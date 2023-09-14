import React from 'react';
import './Conversa.css';
import Mensagem from '../mensagem/Mensagem'
import MensagemOposta from '../mensagem/MensagemOposta'

function Conversa(props) {
  return (
    <section className="sectionConversa" id="conversa">
      {
        props.msg.map((elemento, indice) => {
          if (elemento.nome.toLowerCase() === "eu" || elemento.nome === "") {
            return (
              <section className="sectionDaMensagemNaconversa">
                <Mensagem mensagem={elemento.mensagem.toUpperCase()} index={indice} excluirMensagem={props.excluirMensagem} />
              </section>
            )
          }
          else {
            return (
              <section className='sectionDaMensagemNaconversa'>
                <MensagemOposta nome={ elemento.nome.toUpperCase()} mensagem={elemento.mensagem.toUpperCase()} index={indice} eventMensagem={props.excluirMensagem} />
              </section>
            )
          }
        })
      }
    </section>
  )
}

export default Conversa