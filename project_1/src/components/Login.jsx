import React from 'react'

export const Login = () => {
  return (
    <>
    <h1>Login Page</h1>
       <form className='form' action="" >
       <div>
       <label htmlFor="email"><b>Email</b></label>
       <input type="text" Value="test" name="email" id="email"/>
       </div>

       <div>
       <label htmlFor="password"><b>Password</b></label>
       <input type="text" name="password" id="password"/>
       </div>
       <button type="submit" >Login</button>
       </form>
    </>
  )
}
