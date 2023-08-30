import './Button.css'


function Button(props){
    return <button className='btnEnviar1' onClick={fazerMensagem(props.nome, props.mensagem)}>Enviar</button>
}

export default Button