import React, { useState } from 'react'
import './Registrations.css'


export const Registrations = () => {
  const [userRegistration, setUserRegistration] = useState({
   username:"",
   email:"",
   phoneno:"",
   password:""
  });

 const handleInput=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   //setuserRegistration({userRegistration,[e.target.name]:e.target.value});
   console.log(name, value);

   setUserRegistration({ ...userRegistration, [name]: value});
 }
 const handleSubmit=(e)=>{
   e.preventDefault();
   //const newRecord={ ...userRegistration, id= new Date().getTime().toString() }

 }
  return (
   <>
    <h1>User Registration</h1>
   <form className='form' action="" onSubmit={handleSubmit}>
    <div>
       <label htmlFor="username"><b>username</b></label>
       <input type="text" value={userRegistration.username  } onChange={handleInput} name="username"/>
       </div>

        <div>
       <label htmlFor="email"><b>Email</b></label>
       <input type="text" value={userRegistration.email} onChange={handleInput} name="email" id="email"/>
       </div>

       <div>
       <label htmlFor="phoneno"><b>Phoneno</b></label>
       <input type="text" value={userRegistration.phoneno} onChange={handleInput} name="phoneno" id="phoneno"/>
       </div>

       <div>
       <label htmlFor="password"><b>Password</b></label>
       <input type="text" value={userRegistration.password} onChange={handleInput} name="password" id="password"/>
       </div> 
        
        <button type="submit">Registration</button>
       

   </form>
   </>
  )
}


