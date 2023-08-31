import React from 'react'
import { useState } from 'react'
import './BarraDeMsg.css'


function BarraDeMsg(props) {
    const [nome,setNome] = useState("")
    const [mensagem,setMensagem] = useState("")
    const valorInputNome = (e)=>{setNome(e.target.value)}
    const valorInputMensagem = (e)=>{setMensagem(e.target.value)}
    const enviarMsg = ()=>{
        props.event(nome,mensagem)
        setMensagem("")
        setNome("")
    }

    return (
        <section className="sectionBarraMsg">
            <input className="inputNome" onChange={valorInputNome} type="text"/>
            <input className="inputMensagem" onChange={valorInputMensagem} type="text"/>
            <button onClick={enviarMsg} className='btnEnviar'>Enviar</button>
        </section>
    )
}
export default BarraDeMsg