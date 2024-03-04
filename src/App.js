// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import About from './components/About';
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { Routes,Route} from 'react-router-dom';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //it is a state of application which tells whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark"); // it is a state it can't be chaged like this
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success:");
      document.title='TextUtils - Dark Mode';

      setInterval(()=>{
        document.title='TextUtils is Amazing Mode';
      },2000);

      setInterval(()=>{
        document.title='Install TextUtils Now';
      },1500);
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success:");
      document.title='TextUtils - Light Mode';

      setInterval(()=>{
        document.title='Dhyan aakarshirth karne k liye';
      },500);

      setInterval(()=>{
        document.title='Install TextUtils Now';
      },1000);
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About Textutils"/> */}

      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
      <Routes>
        {/* users---> Component1 
            users/home--->Component2 */}
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>       
          </Route>
      </Routes>
      </div>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;

//mayank suthar is my name kya haal hai bhaiyo yaar react ka course kar rahaha hu busss jaldi hi hoje iski tention hai mere bhaiyo is baat ko complete karna hai dekhte hai kya hota hai

//beast mode on hai mayank bhai ka ab tho sab dekhnege ki aapka bhai kya karta hai aabhi maja aaayega na bidu

// once you change one thing that is your minidset you can change everything

//There is no tommorow

//Gayal tho yaha har ek parinda hai
// lekin fir se uda wahui parinda tho jinda hai
