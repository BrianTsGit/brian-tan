import React from 'react';
import PropTypes from 'prop-types';

import classes from './TitleCardGrid.scss'
import { titleCardType } from '../../../types/index';
import HeroTitleCard from './HeroTitleCard/HeroTitleCard';
import TitleCard from './TitleCard/TitleCard';

const titleCardGrid = (props) => {

    let titleCards = null;

    if (props.titleCards && props.titleCards.length > 0) {
        titleCards = props.titleCards.map((card, index) => {
            if (props.withHeroCard) {
                if (index === 0) {
                    return <HeroTitleCard key={card._id} heroTitleCard={card} />
                }

                return <TitleCard key={card._id} titleCard={card} small />
            } else {
                return <TitleCard key={card._id} titleCard={card} />
            }
        })
    }

    return (
        <div className={classes.TitleCardGrid}>
            {titleCards}
        </div>
    );
}

titleCardGrid.propTypes = {
    titleCards: PropTypes.arrayOf(titleCardType),
    withHeroCard: PropTypes.bool
};

export default titleCardGrid;