import React from 'react'
import './footer.css'
import { logo } from '../../assets/import';

const Footer = () => {
    let dateNown = new Date()
    let year = dateNown.getFullYear();

    return (
        <div className='gpt3__footer section__padding'>
            <div className="gpt3__footer-heading">
                <h1 className='gradient__text'>
                    Você quer entrar no futuro antes dos outros
                </h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Solicitar acesso antecipado</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={logo} alt="logo do footer" />
                    <p>OpenAI Crechterwoord K12 182 DK Alknjkcb, Todos os Direitos reservados</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Geral</p>
                    <p>Mídia social</p>
                    <p>Contadores</p>
                    <p>Contato</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Termos e Condições</p>
                    <p>Politica de Privácidade</p>
                    <p>Contato</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Entrar em Contato</h4>
                    <p>São Francisco, Califórnia, EUA</p>
                    <p>openai.com</p>
                    <p>info@openai.com</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>©️ {JSON.stringify(year)} GPT-3 Todos os Direitos reservados </p>
            </div>
        </div>
    )
}

export default Footer