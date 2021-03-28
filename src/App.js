import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppContextProvider from './contexts/app/AppContext'
import AuthContextProvider from './contexts/auth/AuthContext'
import AuthRoute from './middlewares/AuthRoute'
import PrivateRoute from './middlewares/PrivateRoute'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import ResetPasswordPage from './pages/ResetPassword'
import SignUpPage from './pages/SignUp'

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AuthContextProvider>
          <div className="container">
            <Router>
              <Switch>
                <AuthRoute exact path="/login" component={LoginPage} />
                <AuthRoute exact path="/sign-up" component={SignUpPage} />
                <AuthRoute
                  exact
                  path="/reset-password"
                  component={ResetPasswordPage}
                />

                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="*">404</Route>
              </Switch>
            </Router>
          </div>
        </AuthContextProvider>
      </AppContextProvider>
    </div>
  )
}

export default App
