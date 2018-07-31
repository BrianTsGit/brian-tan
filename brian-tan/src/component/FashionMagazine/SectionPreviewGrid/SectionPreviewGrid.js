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
                        <picture>
                            <source media="(min-width: 640px)" srcSet={props.sectionPreview.headerImage.size640} />
                            <source media="(min-width: 0px)" srcSet={props.sectionPreview.headerImage.default} />
                            <img alt="Preview Section Header Image" />
                        </picture>
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