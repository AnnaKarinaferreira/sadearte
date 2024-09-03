import React from 'react';
import { useState } from 'react';
import "./Home.css";
import Cadastro from '../SignUp/Cadastro';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import logo from "../HomeNaoLogado/logo.png"
import { createBrowserRouter,RouterProvider} from 'react-router-dom';


return (
  
  <div>
    <header className='header'>
        <p>Explorar</p>
        <p>Trabalhos</p>
        <p>Desafios</p>
        <Search>
        <input type="text" placeholder="Pesquise" />
        <button><Icon icon="simple-line-icons:magnifier" /></button>
        </Search>
    </header>
  </div>

)

export default Cadastro
