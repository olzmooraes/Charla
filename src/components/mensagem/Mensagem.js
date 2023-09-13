import './Mensagem.css'

function Mensagem(props) {
    const excluirMsg = ()=>{
        props.excluirMensagem(props.index)
        }
    return (
        <section onClick={excluirMsg} className='balaoMensagem'>
            <p className="texto">{props.mensagem}</p>
        </section>
    )
}
export default Mensagem