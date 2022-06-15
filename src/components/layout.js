import * as React from 'react'
import {Link} from 'gatsby'
import {navContainer, navItem} from './layout.module.css'
import {StaticImage} from 'gatsby-plugin-image'

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <title>{pageTitle} | VPW</title>
            <div>
                <StaticImage src="../images/vpw-icon-solo.png" alt="VPW icon"/>
                <nav>
                    <ul className={navContainer}>
                        <li className={navItem}><Link to="/">Home</Link></li>
                        <li className={navItem}><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
