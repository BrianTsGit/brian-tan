import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ConceptGrid.scss';
import * as actions from '../../store/actions/index';
import brianTanLogo from '../../assets/images/brian_tan_site_logo.png';
import gqHomeLogo from '../../assets/images/gq_home_logo.png';
import foodJournalLogo from '../../assets/images/food_journal_logo.png';
import ConceptGridImage from '../../component/ConceptGrid/ConceptGridImage/ConceptGridImage';
import ConceptGridCell from '../../component/ConceptGrid/ConceptGridCell/ConceptGridCell';

class ConceptGrid extends Component {
    state = {
        concepts: [
            {
                _id: 'concept1',
                logo: brianTanLogo,
                image: 'https://images.pexels.com/photos/1064129/pexels-photo-1064129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                route: '/'
            },
            {
                _id: 'concept2',
                logo: foodJournalLogo,
                image: 'https://images.pexels.com/photos/845847/pexels-photo-845847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                route: '/food-journal'
            },
            {
                _id: 'concept3',
                logo: gqHomeLogo,
                image: 'https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                route: '/gq-magazine'
            }
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
                    key={concept._id}
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