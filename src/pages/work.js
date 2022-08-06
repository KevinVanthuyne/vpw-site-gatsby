import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import TableItem from '../components/table-item';

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

            {data.allFile.nodes.map((node) => (
                <div className="col-md-2 offset-md-1">
                    <TableItem
                        link="https://vpuniverse.com/files/file/6933-tales-from-the-crypt-vpw-premium-data-east-1993/"
                        alt="Tales From the Crypt screenshot"
                        img={node.childImageSharp.gatsbyImageData}
                    />
                </div>
            ))}
        </div>
    </Layout>
);

export const query = graphql`
    query {
        allFile(
            filter: {
                sourceInstanceName: { eq: "images" }
                relativeDirectory: { eq: "tables" }
            }
        ) {
            nodes {
                name
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
`;

export default WorkPage;
