import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => (
    <Layout pageTitle="About">
        <div className="row">
            <div className="col-md-4 col-xxl-2 offset-md-1 offset-xxl-2">
                <h2 className="big-title mt-10">
                    About The Work
                    <wbr />
                    shop
                </h2>
            </div>

            <div className="col-md-6 col-lg-5 col-xxl-4 offset-xxl-1">
                <p className="display-text mt-10">
                    Back in June of 2020, VPin Workshop founding members{' '}
                    <em>Benji</em> and <em>Iaakki</em> had been discussing the
                    difficulty that authors were having collaborating on VPX
                    projects. The traditional methods seemed slow and
                    cumbersome. It was then that an idea was born. What if there
                    was a space that original authors could work together and
                    share ideas?
                </p>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-6 col-lg-5 col-xxl-4 offset-md-5">
                <p className="display-text">
                    This workshop, as it would become known, could be a place to
                    assist authors with enhancing the physics, inserts, and
                    lighting of new VPX releases. With that goal in mind,{' '}
                    <em>VPin Workshop</em> was created on Discord and authors
                    Brad1X, Tomate, Wrd1972, Flupper, and Sixtoe joined soon
                    after.
                </p>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-6 col-lg-5 col-xxl-4 offset-md-5">
                <p className="display-text">
                    Since then VPW has grown to over{' '}
                    <em>one hundred members</em> from all corners of the globe.
                    Each member bringing their own talent, specialized skills,
                    and love for pinball.
                </p>
            </div>
        </div>

        <div className="row mt-5 mb-5">
            <div className="col-md-6 col-lg-5 col-xxl-4 offset-md-5">
                <p className="display-text">
                    Now with dozens of releases under their belt, VPW has become
                    well known in the community for their{' '}
                    <em>quality releases</em> and for pushing the boundaries of
                    what is possible in the world of virtual pinball.
                </p>
            </div>
        </div>
    </Layout>
);

export default AboutPage;
