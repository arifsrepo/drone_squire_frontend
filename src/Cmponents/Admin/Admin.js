import React from 'react';
import './Admin.css';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyCheckAlt, faStar, faTv, faUsers } from '@fortawesome/free-solid-svg-icons';
import useFirebase from '../hooks/useFirebase';

const Admin = () => {
    return (
        <Container>
            <Row>
                <Col className="admin_nav" xs={1} xl={3} sm={1} md={3} lg={3}>
                    <NavLink to="" className="side_menu_NavLink">
                        <span className="NavLink_Span"><FontAwesomeIcon icon={faHome} /> Home</span>
                    </NavLink>
                    <NavLink className="side_menu_NavLink" to="">
                        <span className="NavLink_Span"><FontAwesomeIcon icon={faUsers} />  Manage Users </span>
                    </NavLink>
                    <NavLink className="side_menu_NavLink" to="">
                        <span className="NavLink_Span"><FontAwesomeIcon icon={faTv} />  Add New Show </span>
                    </NavLink>
                    <NavLink className="side_menu_NavLink" to="">
                        <span className="NavLink_Span"><FontAwesomeIcon icon={faMoneyCheckAlt} />  Current Balance </span>
                    </NavLink>
                    <NavLink className="side_menu_NavLink" to="">
                        <span className="NavLink_Span"><FontAwesomeIcon icon={faStar} />  User Ratings </span>
                    </NavLink>
                </Col>
                <Col className="admin_div" xs={11} xl={9} sm={11} md={9} lg={9}>khji</Col>
            </Row>
        </Container>
    );
};

export default Admin;