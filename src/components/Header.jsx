import React from 'react';
import Logo from '../images/logo.png'

export default function Header() {
  return (
    <div>
        <header>
        <div className="container">
            <div className='logo-container'>
                <img src={Logo} alt='logo'/>
            </div>
            <h1>Nourishing Communities, Securing Futures</h1>
            <h2>Building a Resilient Food System for All, In Harmony with Nature</h2>
        </div>
        </header>
      
    </div>
  )
}
