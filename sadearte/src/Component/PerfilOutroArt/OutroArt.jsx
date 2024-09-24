import React from 'react'
import './OutroArt.css'
import '../HomeN/HomeN.css'
import logo from '../../assets/logo 1.png'
import user from '../../assets/user.png'


const OutroArt = () => {
    return (
      <>
        <div class='header-home-n'>
            <img src={logo} alt="logo" />
            <div class='unsBtn'>
                <button  class='btnETD'>Explorar</button>
                <button  class='btnETD'>Trabalhos</button>
                <button  class='btnETD'>Desafios</button>
            </div>
            <div>
                <input class='pesquisa' type="search" name="" id="" />
            </div>
            <div>
                <button class='btnlogin'>Fazer Login</button>
                <button class='btncadastro'>Cadastrar-se</button>
            </div>
        </div>
       <div class='tudo'>
            <div class='infos'>
                <div class='centro'>
                    <img class='userimg' src={user} alt='user'/>
                    <h2>Nome do artista</h2>
                    <p>user</p>
                </div>
                <div class='maisinfos'>
                    <p>seguidores: xxxx</p>
                    <p>seguindo: xxx</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non iaculis eros. Proin...</p>
                    <p>mostrar mais</p>
                </div>
            </div>
            <div class='cima'>
                <div class='retangulo'></div>
                <div class='menuC'>
                    <p class='categorias'>Categoria</p>
                    <p class='categorias'>Categoria</p>
                    <p class='categorias'>Competições</p>
                </div>
                <div class='desenhosOutroArt'>
                    <div class='outrodesenho'></div>
                    <div class='outrodesenho'></div>
                    <div class='outrodesenho'></div>
                </div>
            </div>
       </div>
    
    
    
    
    
    </>
    )
}      

export default OutroArt