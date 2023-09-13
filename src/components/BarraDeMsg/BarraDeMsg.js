import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import './BarraDeMsg.css'

function BarraDeMsg(props) {
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")
    const valorInputNome = (e) => { setNome(e.target.value) }
    const valorInputMensagem = (e) => { setMensagem(e.target.value) }
    const enviarMsg = () => {
        if (mensagem != "") {
            props.eventoBuscaMensagem(nome, mensagem)
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
        <section className="sectionBarraMsg">
            <input className="inputNome" onKeyDown={handleKeyDown} onChange={valorInputNome} placeholder='Nome' type="text" />
            <input className="inputMensagem" onKeyDown={handleKeyDown} onChange={valorInputMensagem} placeholder="Digite Aqui" type="text" />
            <button className='btnEnviar' onClick={enviarMsg}><FontAwesomeIcon className="favIcon" icon={faLocationArrow} />
            </button>
           
        </section>
    )
}
export default BarraDeMsg