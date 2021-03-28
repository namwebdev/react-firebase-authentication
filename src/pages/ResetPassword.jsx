import { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import '../assets/css/layouts/auth.css'
import { useAuth } from '../contexts/auth/AuthContext'

const ResetPasswordPage = () => {
  const { resetPassword } = useAuth()
  const emailRef = useRef()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError(null)
      setLoading(true)
      await resetPassword(emailRef.current.value)
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
          <h1 className="mb-4">Reset Password</h1>
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
          <div className="min-h-0 mb-2">
            {error && <div className="error-message">{error}</div>}
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading && <div className="btn-loading" />}
              {!loading && <span>Submit</span>}
            </button>
          </div>
          <div className="text-center mt-5 text-gray-400 text-sm">
            <Link
              to="/login"
              className="pl-2 underline hover:text-blue-400"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordPage
