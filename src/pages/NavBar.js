import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHockey } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../components/Button';
import { IconContext } from 'react-icons/lib';
import './NavBar.css'
 
function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <GiHockey className='navbar-icon'/>
                    HOPGE
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/> }               
                </div> 
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items'>
                        <Link to='./' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='./newPractice' className='nav-links' onClick={closeMobileMenu}>
                            New Practice
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='./myPractices' className='nav-links' onClick={closeMobileMenu}>
                            My Practices
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='./catalog' className='nav-links' onClick={closeMobileMenu}>
                            Drills
                        </Link>
                    </li>
                    <li className='nav-btn'>
                        {button ? (
                            <Link to='/sing-up' className='btn-link' >
                                <Button buttonStyle='btn--outline'>Sign Up</Button>
                            </Link>
                            ) : (
                                <Link to='/sing-up' className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline'
                                    buttonSize='btn--mobile'>Sign Up</Button>
                            </Link>
                            )
                        }
                    </li>
                </ul>
            </div>
          </div>
          </IconContext.Provider>
        </>
    )
}

export default NavBar
