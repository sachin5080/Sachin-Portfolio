import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Project";
import Services from "./components/Services/Services";


function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <Projects/>
   <Contact/>
   <Footer/>
   </> 
  )
}

export default App;
