import './Mensagem.css'

function MensagemOposta(props) {
    const excluirMsg = ()=>{
        props.excluirMensagem(props.index)
        }
    return (
        <section ondblclick={excluirMsg} className="balaoMensagemOposto">
            <h5 className="tituloOposto">{props.nome}</h5>
            <p className="textoOposto">{props.mensagem}</p>
        </section>
    )
}

export default MensagemOposta