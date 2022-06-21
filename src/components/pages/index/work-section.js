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
        gsap.fromTo(
            element.querySelector('.table-1'),
            {
                yPercent: 200,
                opacity: 0,
            },
            {
                yPercent: 0,
                opacity: 1,
                ease: Circ.easeOut,
                scrollTrigger: {
                    trigger: element.querySelector('.work-row'),
                    start: 'top bottom',
                    end: 'top 25%',
                    scrub: true,
                    markers: true,
                },
            }
        );
        gsap.fromTo(
            element.querySelector('.table-2'),
            {
                yPercent: 200,
                opacity: 0,
            },
            {
                yPercent: 0,
                opacity: 1,
                ease: Circ.easeOut,
                scrollTrigger: {
                    trigger: element.querySelector('.work-row'),
                    start: '25% bottom',
                    end: '25% 25%',
                    scrub: true,
                    markers: true,
                },
            }
        );
        gsap.fromTo(
            element.querySelector('.table-3'),
            {
                yPercent: 200,
                opacity: 0,
            },
            {
                yPercent: 0,
                opacity: 1,
                ease: Circ.easeOut,
                scrollTrigger: {
                    trigger: element.querySelector('.work-row'),
                    start: '50% bottom',
                    end: '50% 25%',
                    scrub: true,
                    markers: true,
                },
            }
        );
    }, []);

    return (
        <div ref={ref}>
            <div className="row vh-120 work-row">
                <div className="col-md-4 offset-md-2 col-lg-2 offset-lg-3">
                    <h2 className="big-title mt-10">An Established Brand</h2>
                    <p className="display-text">
                        With over 30 released tables and even more
                        work-in-progress ones, the VPW team is an established
                        brand in VPin world.
                    </p>
                    <DisplayButton link="/">Discover our work →</DisplayButton>
                </div>

                <div className="col-md-5 offset-md-1 mt-5">
                    <div className={styles.tableContainer}>
                        <StaticImage
                            src="../../../images/tables/tftc.jpg"
                            alt="Tales From the Crypt screenshot"
                            layout="fullWidth"
                            className={styles.table + ' table-1'}
                        />
                        <StaticImage
                            src="../../../images/tables/lotr.png"
                            alt="Tales From the Crypt screenshot"
                            layout="fullWidth"
                            className={styles.table + ' table-2'}
                        />
                        <StaticImage
                            src="../../../images/tables/bm.jpg"
                            alt="Tales From the Crypt screenshot"
                            layout="fullWidth"
                            className={styles.table + ' table-3'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;
