import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ConceptGrid.scss';
import * as actions from '../../store/actions/index';
import ConceptGridImage from '../../component/ConceptGrid/ConceptGridImage/ConceptGridImage';
import ConceptGridCell from '../../component/ConceptGrid/ConceptGridCell/ConceptGridCell';

class ConceptGrid extends Component {
    state = {
        concepts: [
            {
                text: 'Montage Magazine',
                image: 'https://images.pexels.com/photos/936112/pexels-photo-936112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                route: '/about'
            },
            {
                text: 'GA',
                image: 'https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                route: '/about'
            },
            {
                text: 'yeppers',
                image: 'https://images.pexels.com/photos/1086719/pexels-photo-1086719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                route: '/about'
            },
        ],
        conceptGridImage: null
    };

    onConceptCellMouseEnterHandler = (conceptGridImage) => {
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
                    clicked={this.props.closeConceptGrid}
                    mouseEnter={() => this.onConceptCellMouseEnterHandler(concept.image)}
                    mouseLeave={this.onConceptCellMouseLeaveHandler}/>
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

const mapDispatchToProps = dispatch => {
    return {
        closeConceptGrid: () => dispatch(actions.closeConceptGrid())
    };
};

export default connect(null, mapDispatchToProps)(ConceptGrid);