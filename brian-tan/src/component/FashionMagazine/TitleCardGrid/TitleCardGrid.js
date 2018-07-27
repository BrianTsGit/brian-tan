import React from 'react';
import PropTypes from 'prop-types';

import classes from './TitleCardGrid.scss'
import { titleCardType } from '../../../types/index';
import TitleCard from './TitleCard/TitleCard';

const titleCardGrid = (props) => {

    let titleCards = null;

    if (props.titleCards && props.titleCards.length > 0) {
        titleCards = props.titleCards.map(card => {
            return <TitleCard key={card._id} titleCard={card} />
        })
    }

    return (
        <div className={classes.TitleCardGrid}>
            {titleCards}
        </div>
    );
}

titleCardGrid.propTypes = {
    titleCards: PropTypes.arrayOf(titleCardType)
};

export default titleCardGrid;