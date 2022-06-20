import * as React from 'react';
import * as styles from './display-button.module.scss';
import { Link } from 'gatsby';

const DisplayButton = ({ link, children }) => (
    <Link to={link} className={styles.displayButton}>
        {children}
    </Link>
);

export default DisplayButton;
