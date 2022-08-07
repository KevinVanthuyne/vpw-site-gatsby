import * as React from 'react';
import { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DisplayButton from '../../display-button';
import { Circ, gsap } from 'gsap';
import * as styles from './work-section.module.scss';

const WorkSection = () => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const fromVars = {
            yPercent: 250,
            // opacity: 0,
        };
        const toVars = {
            yPercent: 0,
            // opacity: 1,
            ease: Circ.easeOut,
            scrollTrigger: {
                trigger: element.querySelector('.work-row'),
                scrub: true,
                // markers: true,
            },
        };

        gsap.fromTo(element.querySelector('.table-1'), fromVars, {
            ...toVars,
            scrollTrigger: {
                ...toVars.scrollTrigger,
                start: 'top bottom',
                end: 'top 50%',
            },
        });
        gsap.fromTo(element.querySelector('.table-2'), fromVars, {
            ...toVars,
            scrollTrigger: {
                ...toVars.scrollTrigger,
                start: '25% bottom',
                end: '25% 50%',
                // end: '25% 25%',
            },
        });
        gsap.fromTo(element.querySelector('.table-3'), fromVars, {
            ...toVars,
            scrollTrigger: {
                ...toVars.scrollTrigger,
                start: '50% bottom',
                end: '50% 50%',
                // end: '50% 25%',
            },
        });
    }, []);

    return (
        <div ref={ref}>
            <div className="row vh-min-md-75 work-row mt-10 mt-md-20">
                <div className="col mb-5 mb-md-10 col-md-6 col-lg-5 col-xl-4 offset-md-1 offset-lg-2">
                    <div className={styles.tableContainer}>
                        <div className={styles.table + ' table-1'}>
                            <StaticImage
                                src="../../../images/tables/mtl.jpg"
                                alt="Stern's Metallica screenshot"
                                layout="fullWidth"
                            />
                        </div>
                        <div className={styles.table + ' table-2'}>
                            <StaticImage
                                src="../../../images/tables/lotr.jpg"
                                alt="Lord of the Rings screenshot"
                                layout="fullWidth"
                            />
                        </div>
                        <div className={styles.table + ' table-3'}>
                            <StaticImage
                                src="../../../images/tables/bm.jpg"
                                alt="Blood Machines screenshot"
                                layout="fullWidth"
                            />
                        </div>
                        <div className={styles.tablePlaceholder}>
                            <StaticImage
                                src="../../../images/tables/mtl.jpg"
                                alt="Stern's Metallica screenshot"
                                layout="fullWidth"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-10 col-md-4 col-lg-2 offset-md-1 offset-lg-2">
                    <h2 className="big-title mt-10">An Established Brand</h2>
                    <p className="display-text my-4">
                        With over 30 released tables and even more
                        work-in-progress ones, the VPW team is an established
                        brand in VPin world.
                    </p>
                    <DisplayButton link="/work">
                        Discover our work →
                    </DisplayButton>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;
