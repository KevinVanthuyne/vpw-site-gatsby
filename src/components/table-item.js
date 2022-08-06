import * as React from 'react';
import * as styles from './table-item.module.scss';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

const TableItem = ({ link, alt, img }) => (
    <div>
        <a href={link} target="_blank" rel="noreferrer">
            <GatsbyImage image={img} alt={alt} layout="fullWidth" />
        </a>
    </div>
);

export default TableItem;
