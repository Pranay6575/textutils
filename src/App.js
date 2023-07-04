import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from 'react';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Link, Route, Routes } from 'react-router-dom';


function App() {

 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert = (message, type)=>{
  setAlert({
    msg : message,
    type:type

  })
 }

 const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey'
    showAlert("Dark mode has been eneabled", 'success')
    document.title = "Textutils- Dark mode"
    // setInterval(()=>{
    //   document.title = "Textutils- is the best App"
    // },3000);
    // setInterval(()=>{
    //   document.title = "Download Testutils NOW !"
    // },1500);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been eneabled", 'success')
    document.title = "Textutils- Light mode"
  }
 }
  return (
    <>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container"> 
      <Routes>
      <Route exact path="/" element={<TextForm  heading= 'Enter your Thoughts' mode={mode}/>} />
      <Route exact path="/About" element={<About />} />
      </Routes>
      
      
      
      </div>
    </>
  );
}

export default App;
