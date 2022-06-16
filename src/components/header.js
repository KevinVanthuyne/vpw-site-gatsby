import * as React from 'react'
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './header.module.scss'

const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <StaticImage src="../images/vpw-icon-solo.png" alt="VPW logo"
                                 className={styles.navbarBrandImg}/>
                </Link>

                <span className="flex-grow-1"/>

                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
