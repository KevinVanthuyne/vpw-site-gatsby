import * as React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => (
    <div className="d-flex flex-column min-vh-100">
        <Header />

        <div className="container-fluid overflow-hidden flex-grow-1">
            <main className="">
                <h1 className="d-none">{pageTitle}</h1>
                {children}
            </main>
        </div>

        <Footer />
    </div>
);

export default Layout;
