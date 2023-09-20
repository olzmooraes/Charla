
import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'


const SectionInputs = styled.section`
    display: flex;
    justify-content: center;
    height: 6.5vh;
    background-color: #040404;
`
const Nome = styled.input`
    margin: 5px 0;
    border-radius: 7px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background-color: #f4f7f5;
    width: 15%;
    margin-right: 5px !important;
    padding-left: 10px;
`

const TextoMensagem = styled.input`
    margin: 5px 0;
    border-radius: 7px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background-color: #f4f7f5;
    width: 70%;
    padding-left: 10px;
`
const Enviar = styled.button`
    margin: 5px 0;
    border-radius: 7px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    width: 6%;
    font-size: 100%;
    background-color: transparent !important;
    color: #bf8d39;
    border: 0 none;
` 
const FavIcon = styled.i`
    color: #bf8d39
`
function BarraDeMsg(props) {
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")
    const valorInputNome = (e) => { setNome(e.target.value) }
    const valorInputMensagem = (e) => { setMensagem(e.target.value) }
    const enviarMsg = () => {
        if (mensagem !== "") {
            const dataAtual = new Date();
            const opcoesDeFormato = {
                hour: "2-digit",
                minute: "2-digit",
            };
            const dataFormatada = dataAtual.toLocaleString("pt-BR", opcoesDeFormato);
            props.eventoBuscaMensagem(nome.trim(), mensagem, dataFormatada)
            setMensagem("")
            setNome("")
            document.querySelector(".inputNome").value = ''
            document.querySelector(".inputMensagem").value = ''
        } else {
            alert("Adicione uma Mensagem!")
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            enviarMsg();
        }
    }

    return (
        <SectionInputs>
            <Nome onKeyDown={handleKeyDown} onChange={valorInputNome} placeholder='Nome' className='inputNome' type="text" />
            <TextoMensagem onKeyDown={handleKeyDown} onChange={valorInputMensagem} className='inputMensagem' placeholder="Mensagem" type="text" />
            <Enviar onClick={enviarMsg}><i class="fa-solid fa-paper-plane fa-lg"></i>
            </Enviar>

        </SectionInputs>
    )
}
export default BarraDeMsg