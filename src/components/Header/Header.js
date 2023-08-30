import React from 'react';
import "./Header.css"

function Header(){
    return (
        <header className="header">
            <img className="logo" src="./logo.png" alt="logo"/>
            <input className="barraDePesquisa" placeholder="Pesquise aqui" />
        </header>
    )
}

export default Header