import { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import '../assets/css/layouts/auth.css'
import { useAuth } from '../contexts/auth/AuthContext'

const LoginPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError(null)
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch (e) {
      setError(e?.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative w-full h-full">
      <div className="auth-container">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 hover:shadow-md p-6 border-gray-200"
        >
          <h1 className="mb-4">Login</h1>
          <div className="mb-4">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="text"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="text-xs text-gray-500 mt-2 mb-1 text-right hover:text-blue-400">
            <Link to="/reset-password">Forgot password</Link>
          </div>
          <div className="h-4 mb-2">
            {error && (
              <div className="text-sm text-red-400 text-center">{error}</div>
            )}
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading && <div className="btn-loading" />}
              {!loading && <span>Login</span>}
            </button>
          </div>
          <div className="text-center mt-5 text-gray-400 text-sm">
            Don't have account?
            <Link to="/sign-up" className="pl-2 underline hover:text-blue-400">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
