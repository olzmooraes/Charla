import React from 'react';
import { styled } from 'styled-components';

const Logo = styled.img`
    width: 4.5rem !important;
    height: 3.5rem !important;
    margin: 10px 0px !important;
`
const HeaderApp = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vh !important;
    background-color: #040404;
    padding: 0px 15px 0px 15px;

`
function Header(){
    return (
        <HeaderApp>
            <Logo src="./logo.png" alt="logo"/>
        </HeaderApp>
    )
}

export default Header