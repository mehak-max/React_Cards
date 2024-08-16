// import Home from './components/Home'
import Contact from './components/Contact';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signupscreen from './auth/Signupscreen';
import Login from './auth/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Product from './pages/Product';
const App = ()=>{
  return(
    // <div>      
    //    <Form/>
    // <div> 
    // <Contact/></div>     
    // </div>
    <div>
    <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/Form' element={<Form/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Signupscreen' element={<Signupscreen/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Product' element={<Product/>}></Route>
         </Routes>
         <ToastContainer/>
    </div>
    
  )
}
export default App;
