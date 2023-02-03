
import React from 'react';
// import {Link} from 'react-router-dom';
import vg from '../assets/logo.jpg'
// import './style/Response.css'
import {HashLink} from 'react-router-hash-link'
// import Services from './Services'

const Header = () =>{
    return(
       <>
       <nav>
        <img src={vg} alt="logo" />
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"Services"}>Services</HashLink>
            <HashLink to={"Contact"}>Contact</HashLink>
        </main>
       </nav>
       </>
    )
}
export default Header;