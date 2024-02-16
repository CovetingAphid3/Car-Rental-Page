import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import { About } from "./Pages/About";
import Pricing from "./Pages/Pricing";
import SignInSide from "./Pages/SignInSide"
import ContactUs from "./Components/ContactUs";
import "./App.css"

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/sign-in" element={<SignInSide/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
  );
}

export default App;
