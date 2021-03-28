import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    return auth.signOut()
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }
  function updateEmail(email) {
    return user.updateEmail(email)
  }
  function updatePassword(password) {
    return user.updatePassword(password)
  }

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    setLoading(false)

    return subscribe
  }, [])
  const data = {
    user,
    signUp,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  }

  return (
    <AuthContext.Provider value={data}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
