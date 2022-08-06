import * as React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

const WorkPage = ({ data }) => (
    <Layout pageTitle="Work">
        <div className="row mt-10 mb-5">
            <div className="col-md-3 offset-md-1">
                <h2 className="big-title">Our Work</h2>
                <p className="display-text">An anthology of our releases.</p>
                <p className="display-text">
                    For the current overview of all our pinball tables, take a
                    look at the{' '}
                    <a
                        href="https://vpuniverse.com/profile/40692-vpinworkshop/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        VPW profile on VPUniverse
                    </a>
                    .
                </p>
            </div>

            <div className="col-md-2 offset-md-1">
                <a
                    href="https://vpuniverse.com/files/file/6933-tales-from-the-crypt-vpw-premium-data-east-1993/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <StaticImage
                        src="../images/tables/tftc.jpg"
                        alt="Top-down view of Tales From The Crypt"
                        layout="fullWidth"
                    />
                </a>
            </div>
        </div>
    </Layout>
);

export default WorkPage;
