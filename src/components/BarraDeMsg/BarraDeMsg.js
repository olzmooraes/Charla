import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import './BarraDeMsg.css'



function BarraDeMsg(props) {
    const [nome,setNome] = useState("")
    const [mensagem,setMensagem] = useState("")
    const valorInputNome = (e)=>{setNome(e.target.value)}
    const valorInputMensagem = (e)=>{setMensagem(e.target.value)}
    const enviarMsg = ()=>{
        if(mensagem != ""){
            props.event(nome,mensagem)
            setMensagem("")
            setNome("")
            document.querySelector(".inputNome").value = ''
            document.querySelector(".inputMensagem").value = ''
        }else{
            alert("Adicione uma Mensagem!")
        }
    }

    return (
        <section className="sectionBarraMsg">
            <input className="inputNome" onChange={valorInputNome} placeholder='Nome' type="text"/>
            <input className="inputMensagem" onChange={valorInputMensagem} placeholder="Digite Aqui" type="text"/>
            <button className='btnEnviar' onClick={enviarMsg}><FontAwesomeIcon className="favIcon" icon={faArrowAltCircleRight}/>
            </button>
        </section>
    )
}
export default BarraDeMsg