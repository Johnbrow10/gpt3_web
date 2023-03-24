import React from 'react'
import './possibility.css'
import { possibility } from '../../assets/import'

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className="gpt3__possibility-image">
                <img src={possibility} alt="" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Solicite acesso antecipado para começar</h4>
                <h1 className='gradient__text'>
                    As possibilidades estão além da sua imaginação
                </h1>
                <p>No entanto, aceite qualquer indulgência de ajuda em viagens desagradável.
                    Nem todos os pensamentos exercem bênçãos. Indulgência forma como tudo alegria alteração turbulento o anexo.
                    Parte nós anos para pedir permissão.</p>
                <h4>Solicite acesso antecipado para começar</h4>
            </div>
        </div>
    )
}

export default Possibility