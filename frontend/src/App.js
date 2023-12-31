import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    
    <BrowserRouter>
  <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
