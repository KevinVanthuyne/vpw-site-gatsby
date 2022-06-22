import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => (
    <Layout pageTitle="About">
        <div className="row">
            <div className="col-md-4 offset-md-1 col-lg-2 offset-lg-2">
                <h2 className="big-title mt-10">The Workshop</h2>
            </div>

            <div className="col-md-6 col-lg-5 col-xl-5 offset-xl-1 col-xxl-4">
                <p className="display-text mt-10">
                    Back in June of 2020, VPin Workshop founding members Benji
                    and Iaakki had been discussing the difficulty that authors
                    were having collaborating on VPX projects. The traditional
                    methods seemed slow and cumbersome. It was then that an idea
                    was born. What if there was a space that original authors
                    could work together and share ideas?
                </p>
                <p className="display-text">
                    This workshop, as it would become known, could be a place to
                    assist authors with enhancing the physics, inserts, and
                    lighting of new VPX releases. With that goal in mind, VPin
                    Workshop was created on Discord and authors Brad1X, Tomate,
                    Wrd1972, Flupper, and Sixtoe joined soon after.
                </p>
                <p className="display-text">
                    Since then VPW has grown to over one hundred members from
                    all corners of the globe. Each member bringing their talent,
                    specialized skills, and love for pinball.
                </p>
                <p className="display-text">
                    Now with dozens of releases under their belt, VPW has become
                    well known in the community for their quality releases and
                    for pushing the boundaries of what is possible in the world
                    of virtual pinball.
                </p>
            </div>
        </div>
    </Layout>
);

export default AboutPage;
