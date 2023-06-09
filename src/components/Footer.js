import React from 'react';
import logo from '../assets/logoFooter.png'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={logo} alt="logo de l'entreprise Kasa" />
            <p className='footer-copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;