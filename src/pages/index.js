import * as React from 'react';
import Layout from '../components/layout';

import LandingSection from '../components/pages/index/landing-section';
import MissionSection from '../components/pages/index/mission-section';
import TeamSection from '../components/pages/index/team-section';

const IndexPage = () => (
    <Layout pageTitle="Home">
        <LandingSection />
        <MissionSection />
        <TeamSection />
    </Layout>
);

export default IndexPage;
