import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Login() {
  const [isLogin, setIsLogin] =useState(false)

  return (
    <div>
      <div>Login Page</div>
      {!isLogin ? <button onClick={()=>setIsLogin(true)}>Login</button> : <Navigate to='/home' />}    </div>
  )
}

export default Login