import './Mensagem.css'

function MensagemOposta(props) {
    return (
        <section className="balaoMensagemOposto">
            <h5 className="tituloOposto">{props.nome}</h5>
            <p className="textoOposto">{props.mensagem}</p>
        </section>
    )
}

export default MensagemOposta