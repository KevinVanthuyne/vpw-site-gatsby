import * as React from 'react';
import Header from './header';
import Footer from './footer';
import { Helmet } from 'react-helmet';
import vpwLogo from '../images/vpw-logo.png';

const Layout = ({ pageTitle, children }) => (
    <div>
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta
                name="description"
                content="Virtual Pinball Workshop strives towards recreating the best digital versions of pinball tables that Virtual Pinball X can offer."
            />

            <meta property="og:title" content="Vpin Workshop" />
            <meta
                property="og:description"
                content="Virtual Pinball Workshop strives towards recreating the best digital versions of pinball tables that Virtual Pinball X can offer."
            />
            <meta property="og:image" content={vpwLogo} />

            <meta property="twitter:image" content={vpwLogo} />
            <meta property="twitter:title" content="Vpin Workshop" />
            <meta
                property="twitter:description"
                content="Virtual Pinball Workshop strives towards recreating the best digital versions of pinball tables that Virtual Pinball X can offer."
            />

            <title>{pageTitle} | VPW</title>
        </Helmet>
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
    </div>
);

export default Layout;
