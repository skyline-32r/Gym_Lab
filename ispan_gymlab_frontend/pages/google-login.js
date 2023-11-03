import { useEffect, useState, useRef } from 'react'
import jwt_decode from 'jwt-decode'

export default function GoogleLogin({width}) {
  const [user, setUser] = useState({})
  const btnRef = useRef(null)

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential)
    let userObject = jwt_decode(response.credential)
    console.log(userObject)
    setUser(userObject)
    // document.getElementById('signInDiv').hidden = true
    btnRef.current.hidden = true
    console.log(btnRef.current)
  }

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
    })

    google.accounts.id.prompt()
  }, [])
  // If we have no user: sign in button
  // If we have a user: show the log out button
  return (
    <>
      <div ref={btnRef} id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <button style={{
            width: width
        }} onClick={(e) => handleSignOut(e)}>Sign out</button>
      )}
      {Object.keys(user).length !=0 && (
        <div>
          <img src={user.picture}></img>
          <h3 style={{ color: 'black' }}>{user.name}</h3>
        </div>
      )}
    </>
  )
}
