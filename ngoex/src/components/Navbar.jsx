import {Link} from'react-scroll'
import { FaBars } from "react-icons/fa";
import React, { useState } from 'react';

function Navbar() {
    const[isOpen, setIsOpen]=useState(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
    
    return (
    
    <div className='container'>
       <>
       <header>
       <nav>
        <div className='logo'>
            <h2>Adopt-A-Paw</h2>
        </div>
        <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
            <li><a href="/Home" className="active">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Get Involved">Get Involved</a></li>
            <li><a href="/Centres">Centres</a></li>
            <li><a href="/Pet Healthcare">Pet Healthcare</a></li>
        </ul>
        <div className='icon' onClick={toggleMenu}>
            <FaBars></FaBars>
        </div>
        </nav>
        </header> 
        <section>
            
            <div className='container'>
             <div className='content'>
                <h2>Responsive</h2>
             </div>
            </div>
            
            
        </section>
        </> 
    </div>
     
    )
}

export default Navbar;