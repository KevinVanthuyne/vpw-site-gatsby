import * as React from 'react';
import * as styles from './footer.module.scss';

const Footer = () => (
    <footer className={styles.footer + ' container-fluid'}>
        <div className="row p-5">
            <div className="col-md-3 text-center text-md-start">
                &copy; 2022 V-Pin Workshop
            </div>
            <div className="offset-md-6 col-md-3 text-center text-md-end">
                By{' '}
                <a target="_blank" rel="noreferrer" href="https://kevinvt.com">
                    kevinvt.com
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
