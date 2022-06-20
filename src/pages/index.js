import * as React from 'react'
import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingSection from "../components/pages/index/landing-section";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <LandingSection/>
        </Layout>
    )
}

export default IndexPage
