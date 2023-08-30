
import BarraDeMsg from '../BarraDeMsg/BarraDeMsg';
import Contatos from '../Contatos/Contatos';
import Conversa from '../Conversa/Conversa';
import './Main.css'

function Main() {
    return (
        <main>
            <Contatos/>
            <section className="sectionCharla">
                <Conversa/>
                <BarraDeMsg/>
            </section>
        </main>
    )
}

export default Main