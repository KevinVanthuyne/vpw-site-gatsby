import * as React from 'react'
import Header from "./header";

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <Header/>

            <div className="container-fluid mt-5">
                <main>
                    <h1>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
