import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import DisplayButton from '../../display-button';

const MissionSection = () => (
    <div className="row vh-100">
        <div className="col-md-4 offset-md-1 col-lg-2 offset-lg-2">
            <h2 className="big-title mt-10">The Future of Virtual Pinball</h2>
            <p className="display-text">
                We strive towards <span className="beige-text">re</span>creating
                the best virtual versions of pinball tables that Virtual Pinball
                can offer.
            </p>
            <DisplayButton link="/">Our mission →</DisplayButton>
        </div>

        <div className="col-md-6 col-lg-5 col-xl-5 offset-xl-1 col-xxl-4">
            <StaticImage
                src="../../../images/bm_side_view.png"
                alt="Blood Machines pinball cabinet render"
                layout="fullWidth"
            />
        </div>
    </div>
);

export default MissionSection;
