import React from 'react';
import { styled } from 'styled-components';

const Logo = styled.img`
    width: 4.5rem !important;
    height: 3.5rem !important;
    margin: 10px 0px !important;
`
const CentralizacaoLogo = styled.div`
display:flex;
justify-content: center;
width: 100% !important;
`
const HeaderApp = styled.header`
    display: flex;
    align-items: center;
    height: 6vh !important;
    background-color: #040404;
    padding: 0px 15px 0px 15px;

`
const JuncaoBarras = styled.ul`
    display: block;
    border: 1px solid #403f3f;
    border-radius: 5px;
    @media (min-width: 769px) {
        display:none;
    }
`
const ButtonHamburguer = styled.div`
    display: block;
    background-color: #403f3f;
    width: 2rem;
    height: 3px;
    cursor: pointer;
    margin: 5px;
`
function Header() {
    const FazerFuncionalidadeDepois = () =>{
        alert("Estamos trabalhando nisto...");
    }
    return (
        <HeaderApp>
            <JuncaoBarras onClick={FazerFuncionalidadeDepois}>
                <ButtonHamburguer />
                <ButtonHamburguer />
                <ButtonHamburguer />
            </JuncaoBarras>
            <CentralizacaoLogo>
                <Logo src="./logo.png" alt="logo" />
            </CentralizacaoLogo>
        </HeaderApp>
    )
}

export default Header