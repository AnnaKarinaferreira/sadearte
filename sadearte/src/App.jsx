import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cadastro from './Component/SignUp/Cadastro.jsx';
import Login from './Component/SignIn/Login.jsx';
import HomeN from './Component/HomeN/HomeN.jsx'
import OutroArt from './Component/PerfilOutroArt/outroArt.jsx';
import './App.css';

function App() {
const [count, setCount] = useState(0) 
return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<HomeN />} />
        <Route path="Login" element={<Login />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="OutroArt" element={<OutroArt/>} />
      </Routes>
    </Router>
  </>
)
}

export default App;