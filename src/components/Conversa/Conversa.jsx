import React from 'react';  
import Mensagem from '../mensagem/Mensagem'
import MensagemOposta from '../mensagem/MensagemOposta'
import { styled } from 'styled-components';

const SectionConversa = styled.section`
  height: 100% !important;
  width: 100% !important;
  background-color: #272727;
  background-image: url("fundoWhattsApp.png");
  background-size: contain;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

function Conversa(props) {
  return (
    <SectionConversa id="conversa">
      {
        props.msg.map((elemento, indice) => {
          if (elemento.nome.toLowerCase() === "eu" || elemento.nome === "") {
            return (
              <section key={indice} className="sectionDaMensagemNaconversa">
                <Mensagem mensagem={elemento.mensagem.toUpperCase()} index={indice} excluirMensagem={props.excluirMensagem} time={elemento.time}/>
              </section>
            )
          }
          else {
            return (
              <section key={indice} className='sectionDaMensagemNaconversa'>
                <MensagemOposta nome={ elemento.nome.toUpperCase()} mensagem={elemento.mensagem.toUpperCase()} eventMensagem={props.excluirMensagem} time={elemento.time}/>
              </section>
            )
          }
        })
      }
    </SectionConversa>
  )
}

export default Conversa