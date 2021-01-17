import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";


function Navigation() {

    return (
        <div>
            <Nav className="navBar"variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/saved"className="navBar"eventKey="link-1">Saved Books</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navigation;
