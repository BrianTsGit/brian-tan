import React from 'react';
import PropTypes from 'prop-types';

import classes from './SocialMediaContacts.scss'
import GitHubIcon from './SocialMediaIcons/GitHubIcon';
import LinkedinIcon from './SocialMediaIcons/LinkedinIcon';
import PdfIcon from './SocialMediaIcons/PdfIcon';

const socialMediaContacts = (props) => {

    return (
        <div className={classes.SocialMediaContacts}>
            <ul className={classes.ContactsList}>
                <li>
                    <a href="https://www.linkedin.com/in/brianlintan/" target="_blank">
                        <LinkedinIcon />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/BrianTsGit" target="_blank">
                        <GitHubIcon />
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1XlgJ-qeeUJARZNnFokBUdR_qLm-19T-l/view?usp=sharing" target="_blank">
                        <PdfIcon />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default socialMediaContacts;