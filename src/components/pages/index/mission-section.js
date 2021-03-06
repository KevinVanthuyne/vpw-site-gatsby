import * as React from 'react';
import { useEffect, useRef } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import DisplayButton from '../../display-button';
import { Circ, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MissionSection = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector('.bm-image'),
            {
                opacity: 0,
                xPercent: 100,
            },
            {
                opacity: 1,
                xPercent: 0,
                ease: Circ.easeOut,
                scrollTrigger: {
                    trigger: element.querySelector('.mission-row'),
                    start: 'top bottom',
                    end: 'top 25%',
                    scrub: true,
                    // markers: true,
                },
            }
        );
    }, []);

    return (
        <div ref={ref}>
            <div className="row vh-100 mission-row">
                <div className="col-md-4 offset-md-1 col-lg-2 offset-lg-2">
                    <h2 className="big-title mt-10">
                        The Future of Virtual Pinball
                    </h2>
                    <p className="display-text">
                        We strive towards <span className="beige-text">re</span>
                        creating the best virtual versions of pinball tables
                        that Virtual Pinball can offer.
                    </p>
                    <DisplayButton link="/">Our mission →</DisplayButton>
                </div>

                <div className="col-md-6 col-lg-5 col-xl-5 offset-xl-1 col-xxl-4">
                    <StaticImage
                        src="../../../images/bm_side_view.png"
                        alt="Blood Machines pinball cabinet render"
                        layout="fullWidth"
                        className="bm-image"
                    />
                </div>
            </div>
            <div className="mission-row-end" />
        </div>
    );
};

export default MissionSection;
