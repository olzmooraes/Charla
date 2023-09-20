import React from 'react';
import Contato from '../contato/Contato'
import { styled } from 'styled-components';

const AddContato = styled.button`
    box-shadow: 0 0 0 0;
    border: 0 none;
    width: 100% !important;
    height: 4vh;
    top: 0 !important;
    border-radius: 0px !important;
    background-color: transparent !important;
    color: #bf8d39;
    border-bottom: 1px solid #fff;
`
const SectionAbaContatos = styled.section`
    display:none;
    background-color: #131313;
    width: 30vw !important;
    @media (min-width: 769px){
        display: inline;
    }
`

function Contatos(props) {
    const contatos = props.contatos
    const contatosTratados = contatos.filter((e)=>{
        if(e.nome !== "" && e.nome.toLowerCase() !== "eu") return e
    })
    return (
            <SectionAbaContatos>
                <AddContato>Adicionar Contatos</AddContato>
                {
                    contatosTratados.map((e, index)=>{
                        return (
                            <div key={index}>
                                <Contato nome={e.nome} time={e.time}/>
                            </div>
                        )
                    })
                }
                
            </SectionAbaContatos>
    )
}

export default Contatos