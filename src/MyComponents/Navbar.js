import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
import fullWidthImage from './images/nav.png';

function Navbar() {
const [click, setClick]= useState(false);
const [button, setButton]= useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
    if(window.innerWidth <=960){
        setButton(false);
    }else{
        setButton(true);
    }
};

useEffect(()=>{
    showButton();
},[]);

window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SHZ.
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>Skills</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/testimonials' className='nav-links' onClick={closeMobileMenu}>Testimonials</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>Contact Us</Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--primary'>Contact Us</Button>}
        </div>
    </nav>
    <div className="full-width-image">
        <img src={fullWidthImage} alt="Full Width" />
      </div>
    </>
  );
}

export default Navbar
