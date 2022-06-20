import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './header.module.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => (
    <Navbar expand="lg" fixed="top">
        <Container fluid>
            <Navbar.Brand>
                <Link to="/">
                    <StaticImage
                        src="../images/vpw-icon-solo.png"
                        alt="VPW logo"
                        className={styles.navbarBrandImg}
                    />
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <span className="flex-grow-1" />
                <Nav>
                    <Nav.Link href="/" className={styles.navLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link href="/about" className={styles.navLink}>
                        About
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
