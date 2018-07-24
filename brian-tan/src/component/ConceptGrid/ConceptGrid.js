import React from 'react';

import classes from './ConceptGrid.scss';

const conceptGrid = (props) => {
    let conceptsGridClasses = [classes.ConceptsGrid, classes.GridClosed].join(' ');

    if (props.showConceptsGrid) {
        conceptsGridClasses = [classes.ConceptsGrid, classes.GridOpened].join(' ');
    }

    return (
        <div className={conceptsGridClasses}>
            <div className={classes.GridHeader}>
                <div onClick={props.closeConceptsGrid} className={classes.CloseButton}>
                    <i className="fas fa-times"/>
                </div>
            </div>
            <div className={classes.ConceptCell}>
                <span>GA</span>
            </div>
            <div className={classes.ConceptCell}>
                <span>taste</span>
            </div>
            <div className={classes.ConceptCell}>
                <span>Montage Magazine</span>
            </div>
            <div className={classes.ConceptCell}>
                <span>Thrill</span>
            </div>
            <div className={classes.ConceptCell}>
                <span>Movieman</span>
            </div>
        </div>
    );
}

export default conceptGrid;