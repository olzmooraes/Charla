
import { useState } from 'react'
import BarraDeMsg from '../BarraDeMsg/BarraDeMsg';
import Contatos from '../Contatos/Contatos';
import Conversa from '../Conversa/Conversa';
import './Main.css'



function Main() {
    const [mensagens,setMensagens] = useState([])
    const buscarMensagem  = (name, message) => {
        const balaoMensagem = {
            nome: name,
            mensagem: message
        }
        setMensagens(
            msgAnterior =>{
                return msgAnterior += balaoMensagem
            })
    }
    return (
        <main>
            <Contatos/>
            <section className="sectionCharla">
                <Conversa msg={mensagens}/>
                <BarraDeMsg event={buscarMensagem}/>
            </section>
        </main>
    )
}

export default Main