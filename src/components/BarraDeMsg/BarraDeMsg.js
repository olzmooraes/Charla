import './BarraDeMsg.css'
//import Mensagem from '../mensagem/Mensagem'

function fazerMensagem(nome,mensagem){
    alert(nome, mensagem)
}
function BarraDeMsg() {
    return (
        <section className="sectionBarraMsg">
            <input className="inputNome" type="text"/>
            <input className="inputTexto" type="text"/>
            <button className='btnEnviar' >Enviar</button>
        </section>
    )
}
export default BarraDeMsg