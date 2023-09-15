import React from 'react'
import { styled } from 'styled-components'

const HoraMensagem = styled.p`
    color : #fff;
    font-size :small;
    text-align: end;
    padding-right : 2px;
`
const SectionMensagem = styled.section`
    min-width: 10%;
    float:right !important;
    max-width: 40%;
    background-color:#747474; 
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    margin: 0.5rem;
`
const TextoMensagem = styled.p`
    padding: 0.6rem !important;
    word-wrap:break-word;
    color: white;
`
function Mensagem(props) {
    const excluirMsg = () => {
        props.excluirMensagem(props.index)
    }
    return (
        <SectionMensagem onDoubleClick={excluirMsg}>
            <TextoMensagem>{props.mensagem}</TextoMensagem>
            <HoraMensagem>{props.time}</HoraMensagem>
        </SectionMensagem>
    )
}
export default Mensagem