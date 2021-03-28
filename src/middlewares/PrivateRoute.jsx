import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/auth/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />
      }}
    />
  )
}

export default PrivateRoute
