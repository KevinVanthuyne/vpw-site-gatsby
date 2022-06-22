import * as React from 'react';
import Layout from '../components/layout';

const WorkPage = () => (
    <Layout pageTitle="Work">
        <div className="row mt-10">
            <div className="col-md-3 offset-md-1">
                <h2 className="big-title">Our Work</h2>
                <p className="display-text">An anthology of our releases.</p>
                <p className="display-text">
                    For the current overview of all release, take a look at the{' '}
                    <a
                        href="https://vpuniverse.com/profile/40692-vpinworkshop/"
                        target="_blank"
                        rel="noopener"
                    >
                        VPW profile on VPUniverse
                    </a>
                    .
                </p>
            </div>

            {/*<div className="col-md-2 offset-md-1">*/}
            {/*    <img src="/assets/img/tables/tftc.jpg" alt="Tales From The Crypt screenshot" className="img-fluid">*/}
            {/*</div>*/}

            {/*<div className="col-md-2 offset-md-1">*/}
            {/*    <a href="https://vpuniverse.com/files/file/10193-the-whos-tommy-pinball-wizard-data-east-1994-vpwmod/">*/}
            {/*        <img src="/assets/img/tables/tommy.png" alt="Tommy screenshot" className="img-fluid">*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    </Layout>
);

export default WorkPage;
