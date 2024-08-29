import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cadastro from './Component/SignUp/Cadastro';
import Login from './Component/SignIn/Login'
import './App.css';

function App() {
const [count, setCount] = useState(0) 
return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      </Router>
  </>
)
}

export default App