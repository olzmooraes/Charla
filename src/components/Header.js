import logo from "../logo.png"
import "../components/Header.css"

function Header(){
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"/>
            <input className="barraDePesquisa" placeholder="Pesquise aqui" />
        </header>
    )
}

export default Header