//  React Arrow Function Component Export (rafce)

import { useState } from "react";



const Contact = () => {
  // hooks 
  const [data, setData] = useState(0);
  // event handlers
 const addvalue = ()=>{
  if(data<10){
    setData(data+1)
  }
  //  setData(data+1)
 }
 const subvalue =()=>{
  if(data>0){
    setData(data-1)
  }
  //  setData(data-1)
 }
  return (
    <div className="text-center m-auto" style={{backgroundColor:'#ACC3BE', padding:'100px', width:'44%', border:'5px solid black', }}>
     <h1 style={{fontFamily:'revert-layer'}}>Counter App</h1>
     <h1 style={{backgroundColor:'white', width:'20%', marginLeft:'40%' , marginBottom:'10%', marginTop:'10%', border:'3px solid black'}}> {data}</h1>
    <button  onClick={subvalue} className="btn btn-dark mx-3" >Decrement</button>
     
    <button  onClick={addvalue} className="btn btn-dark mx-3">Increment</button>

      {/* <h1>Hello, React!</h1>
      <p>Welcome to your new React App!</p> */}
    </div>
  );
};

export default Contact;
