import React,{useEffect} from 'react';
import './Conversa.css';
import Mensagem from '../mensagem/Mensagem'
import MensagemOposta from '../mensagem/MensagemOposta'

function Conversa(props) {

  return (
    <section className="sectionConversa" id="conversa">
      {
          props.msg.map((elemento) => {
            if (elemento.nome.toLowerCase() === "eu" || elemento.nome === ""){
              return (
                <Mensagem nome="Eu" mensagem={elemento.mensagem} />
              )}
            else{
              return (
                <MensagemOposta nome={elemento.nome} mensagem={elemento.mensagem}/>
              )
            }
          })
      }
    </section>
  )
}

export default Conversa