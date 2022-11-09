import React from 'react';
import ReactDOM from 'react-dom';

import Head from './header1';
import Foot from './footer1';
import Reg from './register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import About from './about';
import Signin from './signin';
import From from './form'
import SignUp from './signup';



const App=() =>{
  
  return(
  <div style={{backgroundColor:"grey"}}>
{/* antiquewhite */}
    
     <BrowserRouter>
     <Head></Head><br/>
     
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/register" element={<Reg/>} /> 
            <Route path="/signin" element={<Signin/>} /> 
            <Route path="/signup" element={<SignUp/>} /> 
            
          </Routes>
        </div>
      
    </BrowserRouter> 
    <Foot></Foot>
    
  </div>
    
  )
  }
  
  

ReactDOM.render(

  <App/>,
  document.querySelector("#root")

)