import React from 'react';
import PropTypes from 'prop-types';

import classes from './SectionPreviewGrid.scss'
import TitleCardGrid from '../TitleCardGrid/TitleCardGrid';

const sectionPreviewGrid = (props) => {

    return (
        <div className={classes.SectionPreviewGrid}>
            <div className={classes.GridHeader}>
                <a className={classes.HeaderImageLink}>
                    <div className={classes.HeaderImage}>
                        <img src={props.sectionPreview.headerImage} alt="Preview Section Header Image"/>
                    </div>
                </a>
                <div className={classes.HeaderText}>
                    <a href={props.sectionPreview.url}>
                        <span>{props.sectionPreview.headerText}<i className="fas fa-arrow-right"/></span>
                    </a>
                </div>
            </div>
            <TitleCardGrid titleCards={props.titleCards} withHeroCard />
        </div>

    );
}

export default sectionPreviewGrid;