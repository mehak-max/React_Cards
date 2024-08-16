import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Signupscreen = () => {
    const [name, setName]= useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
     const formhandler =(e)=>{
        e.preventDefault();
        console.log(name,email, password)
        setName("");
        setEmail("");
        setPassword("");
        toast.success("User Register Successfuly")
     }
     return(
    <div className='container ' style={{width:'75%'}} >
        <h1 className='text-center pt-5' style={{fontFamily:'monospace',fontSize:'50px',color:'#1F3E6A'}}>Sign Up</h1>
        <form style={{width:'90%', marginLeft:'5%'}} onSubmit={formhandler}> 
        <div className='text-center m-auto rounded shadow w-50 p-3 m-3 bg-light 'style={{border:'4px solid #1F3E6A'}} >
        <div className='p-3 '>  
                <input type='text' className='form-control w-50 mx-auto' value={name}  id='name' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
                
                </div>
          <div className='p-3'>   
                <input type='email' className='form-control w-50 mx-auto'   id='email'  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter your Email' />
                
                </div>     
             <div className='p-3'> 
                <input type='password' className='form-control w-50 mx-auto' value={password} id='password'  onChange={(e)=>setPassword(e.target.value)}placeholder='Enter your password' /> 
                </div> 
                <button type="submit" className="btn btn-secondary m-3" style={{border:'2px solid #1F3E6A',fontFamily:'monospace'}}>Sign up</button>
                </div> 
                
                       


        </form>
    </div>
)
}
export default Signupscreen
