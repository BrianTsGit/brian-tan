import React, { Component } from 'react';

import classes from './ConceptGrid.scss';
import GridImage from './GridImage/GridImage';

const conceptGrid = (props) => {
    let data = [
        {
            text: 'GA',
            image: 'https://images.pexels.com/photos/936112/pexels-photo-936112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            url: 'https://www.gq.com/?us_site=y'
        },
        {
            text: 'Montage Magazine',
            image: 'https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            url: 'https://wovenmagazine.com/'
        }
    ];

    let conceptsGridClasses = [classes.ConceptsGrid, classes.GridClosed].join(' ');

    if (props.showConceptsGrid) {
        conceptsGridClasses = [classes.ConceptsGrid, classes.GridOpened].join(' ');
    }

    let gridCells = data.map(cell => {
        return (
            <div key={cell.text} className={classes.ConceptCell}>
                <a href={cell.url}>
                    <span>{cell.text}</span>
                </a>
            </div>
        )
    })

    return (

        <div className={conceptsGridClasses}>
            <div className={classes.ImageCover}>
                <GridImage image="https://images.pexels.com/photos/936112/pexels-photo-936112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                {/* <GridImage image="https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
            </div>
            <div className={classes.GridHeader}>
                <div onClick={props.closeConceptsGrid} className={classes.CloseButton}>
                    <i className="fas fa-times"/>
                </div>
            </div>
            <div className={classes.CellContainer}>
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
        </div>
    );
}

export default conceptGrid;