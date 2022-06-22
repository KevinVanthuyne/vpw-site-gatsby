import * as React from 'react';
import { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './landing-section.module.scss';
import { Circ, gsap } from 'gsap';

const LandingSection = () => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector('.vpw-logo'),
            {
                yPercent: 200,
                opacity: 0,
            },
            {
                yPercent: 0,
                opacity: 1,
                ease: Circ.easeOut,
                duration: 1.5,
            }
        );
    }, []);

    return (
        <div className={'row ' + styles.backgroundOverlay}>
            <div className={'vh-120 ' + styles.background} ref={ref}>
                <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 vh-100 d-flex justify-content-center align-items-center">
                    <StaticImage
                        src="../../../images/vpw-logo.png"
                        alt="VPW logo"
                        className="img-fluid vpw-logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
