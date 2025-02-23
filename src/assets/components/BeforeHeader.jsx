import React from 'react'
import Logo from '../images/logo.png'
import '../css/header.css'

function BeforeHeader() {
  return (
    <div>
        <header className="header">
            <div className="logo">
                <a href='/' className='logo'>
                <img className="logo_img" src={Logo} />
                <span className="logo_text">Pineapple</span>
                </a>
            </div>
            <nav>
                <ul className="header_menu">
                    <li>
                        <a className="header_link" href="/">Home</a>
                    </li>
                    <li>
                        <a className="header_link" href="#review">Review</a>
                    </li>
                    <li>
                        <a className="header_link" href="#contact_us">Contact Us</a>
                    </li>
                    <li className="header_line"></li>
                    <li>
                        <a href="/signin"><button className="btn">Login</button></a>
                    </li>
                </ul>
                <button className="header_bars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    </svg>      
                </button>
            </nav>
        </header>
    </div>
  )
}

export default BeforeHeader
