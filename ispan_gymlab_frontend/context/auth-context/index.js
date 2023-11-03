import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

export default AuthContext

export const noLoginState = {
  id: '',
  email: '',
  nickname: '',
  token: '',
}

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(noLoginState)

  // 登出的功能
  const logout = () => {
    localStorage.removeItem('auth')
    setAuth(noLoginState)
  }

  useEffect(() => {
    const str = localStorage.getItem('auth')
    const photo = localStorage.getItem('user_photo')
    if (str) {
      try {
        // const myAuth = JSON.parse(str);
        setAuth({
          id: '',
          email: '',
          nickname: 'ChaCha',
          user_photo:photo,
          token: str,
        })
      } catch (ex) {
        console.log(ex)
      }
    }
  }, [])

  // useEffect(() => {
  //   if (auth.token != "") {
  //   localStorage.setItem("auth", auth.token)
  // }
  // }, [auth])

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
