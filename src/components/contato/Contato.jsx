import React from 'react';
import { styled} from 'styled-components';

const Hr = styled.div`
    width: 100% !important;
    border: 1px solid #bf8d39;
    opacity: 20%;
`
const VistoPorUltimo = styled.p`
    color: #fff;
    font-size: small;
`
const NomeContato = styled.h5`
    color: #bf8d39;
`
const ImagemContato = styled.img`
    width: 3rem;
    border-radius: 100%;
    margin: 2%;
`
const SectionContato = styled.section`
    display: flex;
    align-items: center;
    width: 100% !important;
`
const SectionNomeVistoPorUltimo = styled.section`
    margin-left: 5% ;
`
function Contato(props) {

    return (
        <>
            <SectionContato>
                <ImagemContato src="semFoto.png" alt="Testes" />
                <SectionNomeVistoPorUltimo>
                    <NomeContato>{props.nome.toUpperCase()}</NomeContato>
                    <VistoPorUltimo>Visto por último as {props.time}</VistoPorUltimo>
                </SectionNomeVistoPorUltimo>
            </SectionContato>
            <Hr/>
        </>
    )
}

export default Contato