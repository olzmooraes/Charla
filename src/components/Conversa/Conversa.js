import React,{useEffect} from 'react';
import './Conversa.css';
import Mensagem from '../mensagem/Mensagem'
import MensagemOposta from '../mensagem/MensagemOposta'

function Conversa(props) {
  const message = props.msg
  return (
    <section className="sectionConversa" id="conversa">
      {
        useEffect((message)=>{
          console.log("erro")
          message.map((elemento) => {
            if (elemento.nome === "Eu" || elemento.nome === "")
              return (
                <Mensagem nome="Eu" mensagem={elemento.mensagem} />
              )
            else
              return (
                <MensagemOposta nome={elemento.nome} mensagem={elemento.mensagem}/>
              )
          })
        },[message])
        
      }
    </section>
  )
}

export default Conversa