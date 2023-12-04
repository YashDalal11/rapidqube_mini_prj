import React from 'react'
import './Registrations.css'


export const Registrations = () => {

   // const handleInput=()=>{}
  return (
   <>
    <h1>User Registration</h1>
   <form className='form' action="" >
    <div>
       <label htmlFor="username"><b>username</b></label>
       <input type="text" name="username" id="username"/>
       </div>

       <div>
       <label htmlFor="email"><b>Email</b></label>
       <input type="text" name="email" id="email"/>
       </div>

       <div>
       <label htmlFor="phoneno"><b>Phoneno</b></label>
       <input type="text" name="phoneno" id="phoneno"/>
       </div>

       <div>
       <label htmlFor="password"><b>Password</b></label>
       <input type="text"  name="password" id="password"/>
       </div>
        
        
       

   </form>
   </>
  )
}
