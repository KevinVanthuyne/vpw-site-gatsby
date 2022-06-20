import * as React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Layout from '../components/layout';
import LandingSection from '../components/pages/index/landing-section';
import MissionSection from '../components/pages/index/mission-section';
import TeamSection from '../components/pages/index/team-section';
import WorkSection from '../components/pages/index/work-section';

const IndexPage = () => {
    // store a reference to the box div
    const boxRef = useRef();

    // wait until DOM has been rendered
    useEffect(() => {
        gsap.to(boxRef.current, { rotation: '+=360' });
    });

    return (
        <Layout pageTitle="Home">
            <div className="box" ref={boxRef}>
                Hello
            </div>
            <LandingSection />
            <MissionSection />
            <TeamSection />
            <WorkSection />
        </Layout>
    );
};

export default IndexPage;
