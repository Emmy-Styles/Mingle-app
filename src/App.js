import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Users from "./Components/Users/Users";
import Use from "./Components/Users/Use";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/404Page";
// import { ErrorBoundary } from "./Components/Errorboundary";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="wrapper">
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Use" element={<Use />} />
            <Route path="/Users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        
      </div>
    </div>
  );
}

const ErrorComponent = () => {
  throw new Error();
}

export default App;
