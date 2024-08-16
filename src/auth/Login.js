import { useState } from "react"
import { toast } from 'react-toastify';
const Login = () => {
  const [auth, setAuth] = useState({
      email: "",
      password: "", 
        
  })

  const formhandler= (e)=>{
   e.preventDefault();
   console.log(auth) 
   toast.success("User Register Successfuly")
   setAuth({email: "", password: ""});
  }
     return(
    <div className='container p-3' style={{width:'70%'}} >
        <h1 className='text-center pt-5' style={{fontFamily:'monospace',fontSize:'40px',color:'#1F3E6A'}}> Please Login!</h1>
        <form onSubmit={formhandler}  >
        <div className='text-center m-auto rounded shadow w-50 p-3 m-3 bg-light 'style={{border:'4px solid #1F3E6A'}} >
          <div className='p-3'>   
                <input type='email' className='form-control w-50 mx-auto'  id='email'  placeholder='Enter your Email' value={auth.email} onChange={(e)=>setAuth({...auth, email:e.target.value})}  />
                
                </div>     
             <div className='p-3'> 
                <input type='password' className='form-control w-50 mx-auto' id='password' required placeholder='Enter your password' value={auth.password}  onChange={(e)=>setAuth({...auth, password:e.target.value})}  /> 
                </div> 
                <button type="submit" className="btn btn-secondary m-3" style={{border:'2px solid #1F3E6A'}}>  Login </button>
                </div> 
                </form>
    </div>
)
}
export default Login
