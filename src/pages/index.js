import * as React from 'react';
import Layout from '../components/layout';
import LandingSection from '../components/pages/index/landing-section';
import AboutSection from '../components/pages/index/about-section';
import TeamSection from '../components/pages/index/team-section';
import WorkSection from '../components/pages/index/work-section';

const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <LandingSection />
            <AboutSection />
            <TeamSection />
            <WorkSection />
        </Layout>
    );
};

export default IndexPage;
