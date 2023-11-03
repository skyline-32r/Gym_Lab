import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

export default function GoogleLogin() {
  function handleCallbackResponse(response) {}
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '',
      callback: handleCallbackResponse,
    })
  }, [])
  return <div>GoogleLogin</div>
}
