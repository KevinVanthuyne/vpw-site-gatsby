import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './header.module.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => (
    <Navbar expand="md" fixed="top" variant="dark">
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
                <span className="flex-md-grow-1" />
                <Nav>
                    <Nav.Link href="/" className={styles.navLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link href="/about" className={styles.navLink}>
                        About
                    </Nav.Link>
                    <Nav.Link href="/work" className={styles.navLink}>
                        Work
                    </Nav.Link>
                    <Nav.Link
                        href="https://vpin-workshop.creator-spring.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navLink}
                    >
                        Merch
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
