import React from 'react';
import { useState } from 'react';
import BarraDeMsg from '../BarraDeMsg/BarraDeMsg';
import AbaContatos from '../Contatos/abaContatos';
import Conversa from '../Conversa/Conversa';
import './Main.css';
import { styled } from 'styled-components';

const MainApp = styled.main`
    display:flex;
    justify-content: center;
    height: 94vh !important;
    width: 100vw !important;
`
const SectionAbaConversa = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: end;
    width: 100vw !important;
`

function Main() {
    const [mensagens, setMensagens] = useState([])
    const buscarMensagem = (name, message, time) => {
        const balaoMensagem = {
                nome: name,
                mensagem: message,
                time: time
            }
        const novasMensagens = [...mensagens,balaoMensagem]
        setMensagens(novasMensagens);
    }
    const excluirMensagem = (indice)=>{
        const novasMensagens = mensagens.filter((_, index) => index !== indice);
        setMensagens(novasMensagens);
    }
    return (
        <MainApp>
            <AbaContatos contatos={mensagens} />
            <SectionAbaConversa>
                <Conversa excluirMensagem={excluirMensagem} msg={mensagens}/>
                <BarraDeMsg eventoBuscaMensagem={buscarMensagem}/>
            </SectionAbaConversa>
        </MainApp>
    )
}

export default Main