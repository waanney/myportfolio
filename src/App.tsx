import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/portforlio/Portfolio";
import Web3D from "./pages/web3d/Web3D";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/web3d" element={<Web3D/>} />
      </Routes>
    </Router>

  );
  
}

