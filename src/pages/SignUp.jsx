import '../assets/css/layouts/auth.css'
import { useRef, useState } from 'react'
import { useAuth } from '../contexts/auth/AuthContext'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const SignUpPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError(null)
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)
      history.push('/login')
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
          <h1 className="mb-4">Sign Up</h1>
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
          <div className="mb-2">
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
          <div className="h-4 mb-2">
            {error && <div className="error-message">{error}</div>}
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading && <div className="btn-loading" />}
              {!loading && <span>Create account</span>}
            </button>
          </div>
          <div className="text-center mt-5 text-gray-400 text-sm">
            Already have an account?
            <Link to="/login" className="pl-2 underline hover:text-blue-400">
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
