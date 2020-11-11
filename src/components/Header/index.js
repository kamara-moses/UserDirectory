import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaGithub } from 'react-icons/fa';
import './style.css';

// This is static top section of the page and gives it semantic value.
function Header() {
    return (
        <header className="header">
            <Container>
                <Navbar className="justify-content-between">
                    <Nav>
                        <Nav.Link href="https://github.com/kamara-moses/UserDirectory" target="_Blank"><FaGithub className="github-icon" /></Nav.Link>
                    </Nav>
                </Navbar>
                <h1 className="text-center text-color">Team Directory</h1>
            </Container>
        </header>
    )
}


export default Header;
