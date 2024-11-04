import React from 'react';
import '../HomeN/HomeN.css';
import Desafios from '../Desafios/Desafios.jsx';
import Trabalhos from '../Trabalhos/Trabalhos.jsx';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo 1.png';
import '../barraL.css';
import not from '../../assets/not.png';
import user from '../../assets/user.png';

const HomeN = () => {
  return (
    <>
      <div class='barraLogado'>
        <img src={logo} alt="logo" />
        <div class='unsBtn'>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'><p className='trabalhos'><a href="/Trabalhos">Trabalhos</a></p></button>
          <button  class='btnETD'><p className='desafios'><a href="/Desafios">Desafios</a></p></button>        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div>
          <button class='not'><a href="/LogIn"><img src={not} /></a></button>
          <button class='btnPerfil' ><a href="/MeuPerfil"><img class='imgPerfil' src={user} /></a></button>
        </div>
      </div>

      <div class='eventos'>
        <div class='evento'>
          <p>Evento de coisa tal</p>
        </div>
        <div class='evento'>
          <p>Evento de coisa tal</p>
        </div>
        <div class='evento'>
          <p>Evento de coisa tal</p>
        </div>
      </div>

      <h1 class='titulo'>Em alta</h1>
      
      <div class='desenhosHome'>
        <div class='desenho'>
          <h1 className='aviso' >Aviso conteúdo sensível</h1>
          <button className='vizualizar'>Vizualizar</button>
        </div>
        <a href="/OutroArt"><div class='desenho'></div></a>
        <div class='desenho1'><h1></h1></div>
        <div class='desenho2'></div>
        <div class='desenho3'></div>
        <div class='desenho4'></div>
        <div class='desenho5'></div>
        <div class='desenho6'></div>
      </div>


    </>
  )
}

export default HomeN