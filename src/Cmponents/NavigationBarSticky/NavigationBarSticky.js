import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationBarSticky.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import useFirebase from '../hooks/useFirebase';

const NavigationBarSticky = () => {
    const { logout } = useFirebase();
    return (
        <div className="nav_bg">
            <Container>
                <nav className="nav_bar">
                    <div className="nav_bar_sub">
                        <NavLink className="nav_bar_link" to="/"> HOME </NavLink>
                        <NavLink className="nav_bar_link" to="/shop"> SHOP </NavLink>
                        <NavLink className="nav_bar_link" to="/about"> ABOUT US</NavLink>
                        <NavLink className="nav_bar_link" to="/login">LOGIN</NavLink>
                    </div>
                    <div className="nav_bar_sub_right">
                        <NavLink className="order_style" to="/order"><b><FontAwesomeIcon icon={faPlus} /> <span className="order_text">Make Order</span></b></NavLink>
                        <b> <span style={{marginLeft:'15px'}} className="order_text" onClick={logout}>Log Out</span></b>
                        <div className="nav_bar_baricon"><FontAwesomeIcon icon={faBars} /></div>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default NavigationBarSticky;