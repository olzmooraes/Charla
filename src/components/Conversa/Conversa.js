import React from 'react';
import './Conversa.css';
import Mensagem from '../mensagem/Mensagem'
import MensagemOposta from '../mensagem/MensagemOposta'

function Conversa(props) {
  return (
    <section className="sectionConversa" id="conversa">
      {
          props.msg.map((elemento,indice) => {
            if (elemento.nome.toLowerCase() === "eu" || elemento.nome === ""){
              return (
                <Mensagem mensagem={elemento.mensagem} index={indice} excluirMensagem={props.excluirMensagem}/>
              )}
            else{
              return (
                <MensagemOposta nome={elemento.nome} mensagem={elemento.mensagem} index={indice} eventMensagem={props.excluirMensagem}/>
              )
            }
          })
      }
    </section>
  )
}

export default Conversa