import './Mensagem.css'

function Mensagem(props){
    return (
        <section className="balaoMensagem">
            <p className="titulo">{props.nome}</p>
            <hr/>
            <p className="texto">{props.mensagem}</p>
        </section>
    )
}

export default Mensagem