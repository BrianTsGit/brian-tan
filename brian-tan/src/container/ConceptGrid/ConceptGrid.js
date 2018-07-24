import React, { Component } from 'react';

import classes from './ConceptGrid.scss';
import ConceptGridImage from '../../component/ConceptGrid/ConceptGridImage/ConceptGridImage';
import ConceptGridCell from '../../component/ConceptGrid/ConceptGridCell/ConceptGridCell';

class ConceptGrid extends Component {
    state = {
        concepts: [
            {
                text: 'Montage Magazine',
                image: 'https://images.pexels.com/photos/936112/pexels-photo-936112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                url: 'https://wovenmagazine.com/'
            },
            {
                text: 'GA',
                image: 'https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                url: 'https://www.gq.com/?us_site=y'
            }
        ],
        conceptGridImage: null
    };

    onConceptCellMouseEnterHandler = (conceptGridImage) => {
        console.log('conceptGridImage', conceptGridImage);
        this.setState({ conceptGridImage: conceptGridImage });
    }

    onConceptCellMouseLeaveHandler = () => {
        this.setState({ conceptGridImage: null });
    }

    render () {
        let conceptsGridClasses = [classes.ConceptsGrid, classes.GridClosed].join(' ');

        if (this.props.showConceptGrid) {
            conceptsGridClasses = [classes.ConceptsGrid, classes.GridOpened].join(' ');
        }

        let conceptCells = this.state.concepts.map(concept => {
            return (
                <ConceptGridCell 
                    key={concept.text}
                    concept={concept}
                    mouseEnter={() => this.onConceptCellMouseEnterHandler(concept.image)}
                    mouseLeave={this.onConceptCellMouseLeaveHandler}/>
                // <a key={concept.text} href={concept.url}>
                //     <div 
                //         className={classes.ConceptCell}
                //         onMouseEnter={() => this.onConceptCellMouseEnterHandler(concept.image)}
                //         onMouseLeave={this.onConceptCellMouseLeaveHandler}>
                //             <span>{concept.text}</span>  
                //     </div>
                // </a>
            )
        })

        return (

            <div className={conceptsGridClasses}>
                <div className={classes.ImageCover}>
                    <ConceptGridImage show image={this.state.conceptGridImage} />
                </div>
                <div className={classes.GridHeader}>
                    <div onClick={this.props.closeConceptGrid} className={classes.CloseButton}>
                        <i className="fas fa-times"/>
                    </div>
                </div>
                <div className={classes.CellContainer}>
                    {conceptCells}
                </div>
            </div>
        );
    }
}

export default ConceptGrid;