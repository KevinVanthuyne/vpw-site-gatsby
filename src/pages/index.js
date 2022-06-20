import * as React from 'react';
import Layout from '../components/layout';

import LandingSection from '../components/pages/index/landing-section';
import MissionSection from '../components/pages/index/mission-section';

const IndexPage = () => (
    <Layout pageTitle="Home">
        <LandingSection />
        <MissionSection />
    </Layout>
);

export default IndexPage;
