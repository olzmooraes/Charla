import './BarraDeMsg.css'
import { useState } from 'react'


function BarraDeMsg(props) {
    const [nome,setNome] = useState()
    const [mensagem,setMensagem] = useState()
    return (
        <section className="sectionBarraMsg">
            <input className="inputNome" onChange={setNome()} type="text"/>
            <input className="inputTexto" onChange={setMensagem()} type="text"/>
            <button onClick={props.event(nome,mensagem)} className='btnEnviar' >Enviar</button>
        </section>
    )
}
export default BarraDeMsg