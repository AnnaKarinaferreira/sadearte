import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cadastro from './Component/SignUp/Cadastro.jsx';
import Login from './Component/SignIn/Login.jsx';
import HomeN from './Component/HomeN/HomeN.jsx'
import './App.css';

function App() {
const [count, setCount] = useState(0) 
return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="Login" element={<Login />} />
        <Route path="HomeN" element={<HomeN />} />
      </Routes>
    </Router>
  </>
)
}

export default App;