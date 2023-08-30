import './Conversa.css';
import Mensagem from '../mensagem/Mensagem'
import MensagemOposta from '../mensagem/MensagemOposta'

function Conversa(props) {
  return (
    <section className="sectionConversa" id="conversa">
      {
        props.mensagens.map((elemento) => {
          if (elemento.nome === "Eu" || elemento.nome === "")
            return (
              <Mensagem nome="Eu" mensagem={elemento.texto} />
            )
          else
            return (
              <MensagemOposta nome={elemento.nome} mensagem={elemento.texto}/>
            )
        })
      }
    </section>
  )
}

export default Conversa