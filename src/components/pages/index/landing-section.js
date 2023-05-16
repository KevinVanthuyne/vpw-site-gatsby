import * as React from 'react';
import { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './landing-section.module.scss';
import { Circ, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LandingSection = () => {
    gsap.registerPlugin(ScrollTrigger);

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
        gsap.fromTo(
            element.querySelector('.vpw-logo-2'),
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
        gsap.fromTo(
            element.querySelector('.vpw-logo-2'),
            {
                yPercent: 0,
            },
            {
                yPercent: -200,
                scrollTrigger: {
                    trigger: element.querySelector('.landing-row'),
                    start: 'bottom bottom',
                    end: 'bottom 25%',
                    scrub: true,
                    // markers: true,
                },
            }
        );
    }, []);

    return (
        <div className={'row ' + styles.backgroundOverlay}>
            <div className={'vh-120 ' + styles.background} ref={ref}>
                <div
                    className={
                        styles.imageContainer + ' landing-row'
                        // ' offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6'
                    }
                >
                    <div className={styles.centerImage + ' img-fluid vpw-logo'}>
                        <StaticImage
                            src="../../../images/vpw-logo-without-pinball.png"
                            alt="VPW logo without the pinball"
                            loading="eager"
                        />
                    </div>
                    <div
                        className={styles.centerImage + ' img-fluid vpw-logo-2'}
                    >
                        <StaticImage
                            src="../../../images/vpw-logo-pinball.png"
                            alt="Globe and pinball combination of the VPW logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
