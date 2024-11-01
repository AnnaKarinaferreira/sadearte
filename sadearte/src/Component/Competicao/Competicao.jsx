import React from 'react';
import './Desafios.css';
import { Link } from 'react-router-dom';
import '../barraL.css';
import HomeL from '../HomeL/HomeL.jsx'
import logo from '../../assets/logo 1.png'
import not from '../../assets/not.png';
import user from '../../assets/user.png';

const Competicao = () =>{
    return(
   <>
   <div className='header-home-n'>
    <img src={logo} alt="logo" />
    <div class="unsBnt">
    <button  class='btnETD'>Explorar</button>
    <button  class='btnETD'>Trabalhos</button>
    <button  class='btnETD'><p className='desafios'><a href="/Desafios">Desafios</a></p></button>
    </div>
    <div class='pesquisa' type='search' name='' id=''>

    </div>
   </div>
   </>
    )
}

export default Competicao;