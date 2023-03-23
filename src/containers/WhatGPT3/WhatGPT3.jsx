import React from 'react'
import { Features } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id='whpt3'>
            <div className="gpt3__whatgpt3-features">
                <Features
                    title="O que é GPT-3"
                    text="Nós achamos que amigos me enviam uma mensagem como prazer.
                      Toda a frente do prato ouviu oh deveria. Sua própria residência defeituosa nem 
                convencida. Conexão colocou impossíveis próprios apartamentos barulhentos. 
                Na junta senhoria, ele insistiu para que a humanidade. Entrada de solteiro amigável
                por perto."
                />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    As possibilidades estão além da sua imaginação
                </h1>
                <p>Explore a Biblioteca</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Features
                    title="Chatboot"
                    text="Nós achamos que amigos me enviam uma mensagem como prazer. 
                    Toda a frente do prato ouviu oh deveria."
                />
                <Features
                    title="Base de Conhecimento"
                    text="Na junta senhoria, ele insistiu para que a humanidade. Entrada de solteiro 
                    amigável por perto. Como colocar apartamentos próprios impossíveis b"
                />
                <Features
                    title="Educação"
                    text="Na junta senhoria, ele insistiu para que a humanidade. Entrada de solteiro amigável por perto. 
                    Como colocar apartamentos próprios impossíveis b"
                />
            </div>
        </div>
    )
}

export default WhatGPT3