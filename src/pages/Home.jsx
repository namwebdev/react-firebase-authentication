import { useContext } from 'react'
import { AppContext } from '../contexts/app/AppContext'
import { useAuth } from '../contexts/auth/AuthContext'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const { state, dispatch } = useContext(AppContext)
  const { logout, user } = useAuth()
  const history = useHistory()

  const userEmail = user?.email || ''

  const handleClick = () => {
    dispatch({ type: 'ADD', data: { id: 1, test: 'test' } })
  }
  const handleLogout = async () => {
    await logout()
    history.push('/login')
  }
  return (
    <div className="">
      <div>{userEmail}</div>
      <button onClick={handleLogout} className="btn btn-light">
        Log out
      </button>
    </div>
  )
}

export default HomePage
