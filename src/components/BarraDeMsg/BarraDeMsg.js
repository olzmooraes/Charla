import './BarraDeMsg.css'

function BarraDeMsg() {
    return (
        <section className="sectionBarraMsg">
            <input className="inputNome" type="text" name="nome" />
            <input className="inputTexto" type="text" name="mensagem" />
            <button className="btnEnviar" type="button" name="enviar">Enviar</button>
        </section>
            )
}

export default BarraDeMsg