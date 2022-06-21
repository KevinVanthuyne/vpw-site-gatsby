import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './landing-section.module.scss';

const LandingSection = () => {
    return (
        <div className={'row ' + styles.backgroundOverlay}>
            <div className={'vh-120 ' + styles.background}>
                <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 vh-100 d-flex justify-content-center align-items-center">
                    <StaticImage
                        src="../images/vpw-logo.png"
                        alt="VPW logo"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
