import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as styles from './team-section.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TeamSection = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector('.infinite-scroll-content'),
            {
                xPercent: 0,
            },
            {
                xPercent: -50,
                scrollTrigger: {
                    trigger: element.querySelector('.team-row'),
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    markers: true,
                },
            }
        );
        gsap.fromTo(
            element.querySelector('.infinite-scroll-content-2'),
            {
                xPercent: -50,
            },
            {
                xPercent: 0,
                scrollTrigger: {
                    trigger: element.querySelector('.team-row'),
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    markers: true,
                },
            }
        );
    }, []);

    return (
        <div ref={ref}>
            <div className="row mt-10 team-row">
                <div className={styles.infiniteScrollContainer}>
                    <div
                        className={
                            styles.infiniteScrollContent +
                            ' infinite-scroll-content'
                        }
                    >
                        Sixtoe Benji Bord Iaakki Apophis daphisbowl hawkeyez88
                        Sixtoe Benji Bord Iaakki Apophis daphisbowl hawkeyez88
                    </div>
                    <div
                        className={
                            styles.infiniteScrollContent +
                            ' infinite-scroll-content-2'
                        }
                    >
                        Fleep nFozzy freezy Rothbauwerw Nailbuster Flupper
                        gtxjoe g5k Borg EBisLit Hauntfreaks Fluffhead
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-5 offset-md-2">
                    <h2 className="big-title">A Dedicated Team</h2>
                </div>

                <div className="col-md-4 col-lg-2">
                    <p className="display-text">
                        Consisting out of more than 100 members from around the
                        globe, each member brings his own skills and talents.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
