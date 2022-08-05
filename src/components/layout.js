import * as React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => (
    <div>
        <Header />

        <div className="container-fluid overflow-hidden">
            <main>
                <h1 className="d-none">{pageTitle}</h1>
                {children}
            </main>
        </div>

        <Footer />
    </div>
);

export default Layout;
