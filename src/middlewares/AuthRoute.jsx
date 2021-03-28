import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/auth/AuthContext'

const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        return user === null ? <Component {...props} /> : <Redirect to="/" />
      }}
    />
  )
}

export default AuthRoute
