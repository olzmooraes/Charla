import './MensagemOposta.css'

function MensagemOposta(props){
    return (
        <section className="balaoMensagemOposta">
            <p className="titulo">{props.nome}</p>
            <hr/>
            <p className="texto">{props.mensagem}</p>
        </section>
    )
}

export default MensagemOposta