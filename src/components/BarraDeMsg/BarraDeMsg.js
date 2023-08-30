import React from 'react'
import { useState } from 'react'
import './BarraDeMsg.css'


function BarraDeMsg(props) {
    const [nome,setNome] = useState("")
    const [mensagem,setMensagem] = useState("")
    return (
        <section className="sectionBarraMsg">
            <input className="inputNome" onChange={(e)=>{setNome(e.target.value)}} type="text"/>
            <input className="inputTexto" onChange={(e)=>{setMensagem(e.target.value)}} type="text"/>
            <button onClick={props.event(nome,mensagem)} className='btnEnviar'>Enviar</button>
        </section>
    )
}
export default BarraDeMsg