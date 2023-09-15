import React from 'react'
import { styled } from 'styled-components'

const HoraMensagem = styled.p`
    color : #fff;
    font-size :small;
    text-align: start;
    padding-left : 2px;
    `
const SectionMensagem = styled.section`
    min-width: 10%;
    max-width: 40%;
    float:left !important;
    background-color:#131313; 
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin: 0.5rem;
`

const Nomeontato = styled.h5`
    color:#bf8d39;
    padding: 0.2rem 0 0 0.6rem !important;
    word-wrap:break-word;
    margin-right: 0.5rem !important;
`

const TextoMensagem = styled.p`
    padding: 0.6rem !important;
    word-wrap:break-word;
    text-align:end;
    color:white;
`

function MensagemOposta(props) {
    const excluirMsg = ()=>{
        props.excluirMensagem(props.index)
        }
    return (
        <SectionMensagem ondblclick={excluirMsg}>
            <Nomeontato >{props.nome}</Nomeontato>
            <TextoMensagem>{props.mensagem}</TextoMensagem>
            <HoraMensagem>{props.time}</HoraMensagem>
        </SectionMensagem>
    )
}

export default MensagemOposta