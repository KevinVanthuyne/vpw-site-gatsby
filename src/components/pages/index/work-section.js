import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DisplayButton from '../../display-button';

const WorkSection = () => (
    <div className="row vh-120">
        <div className="col-md-4 offset-md-2 col-lg-2 offset-lg-3">
            <h2 className="big-title mt-10">An Established Brand</h2>
            <p className="display-text">
                With over 30 released tables and even more work-in-progress
                ones, the VPW team is an established brand in VPin world.
            </p>
            <DisplayButton>Discover our work →</DisplayButton>
        </div>

        <div className="col-md-5 offset-md-1 mt-5">
            <StaticImage
                src="../../../images/tables/tftc.jpg"
                alt="Tales From the Crypt screenshot"
                layout="fullWidth"
            />
        </div>
    </div>
);

export default WorkSection;
