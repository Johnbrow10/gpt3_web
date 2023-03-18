import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons';
import logo from '../../assets/logo.svg';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className="gpt3__navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wtgpts">O que é GPT3?</a></p>
                    <p><a href="#possibility">Open I</a></p>
                    <p><a href="#features">Estudos de Caso</a></p>
                    <p><a href="#blog">Biblioteca</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar