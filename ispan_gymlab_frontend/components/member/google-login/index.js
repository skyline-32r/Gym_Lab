import { useEffect, useState, useRef, useContext } from 'react'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'
import AuthContext from '@/context/auth-context'

export default function GoogleLogin({ width }) {
  const {auth, setAuth} = useContext(AuthContext)
  const [user, setUser] = useState({})
  const btnRef = useRef(null)
  const router = useRouter()
  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential)
    let userObject = jwt_decode(response.credential)
    console.log(userObject)
    setUser(userObject)
    // document.getElementById('signInDiv').hidden = true
    btnRef.current.hidden = true
    console.log(btnRef.current)
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }
  console.log('user ', user)
  useEffect(() => {
    if (Object.keys(user).length != 0) {
      fetch('http://localhost:3002/member/google-login', {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((result) => {
          console.log(result)
          if(result.accessToken){
              localStorage.setItem('auth', result.accessToken)
              setAuth({
                id: '',
                email: '',
                nickname: '',
                token: result.accessToken,
              })
          }
        })
    }
  }, [user])
  function handleSignOut(event) {
    btnRef.current.hidden = false
    // document.getElementById('signInDiv').hidden = false
    setUser({})
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '1084196545735-p63sr6kh292lp8a6d2t9c5ragcusokkr.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
      width: '355px',
    })

    google.accounts.id.prompt()
  }, [])
  // If we have no user: sign in button
  // If we have a user: show the log out button
  return (
    <>
      <div ref={btnRef} id="signInDiv"></div>
      {/* {Object.keys(user).length != 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign out</button>
      )} */}
      {Object.keys(user).length != 0 && (
        <div>
          <img src={user.picture}></img>
          <h3 style={{ color: 'black' }}>{user.name}</h3>
        </div>
      )}
    </>
  )
}
