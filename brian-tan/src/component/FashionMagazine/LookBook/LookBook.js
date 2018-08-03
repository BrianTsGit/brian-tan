import React from 'react';
import PropTypes from 'prop-types';

import classes from './LookBook.scss'
import { lookBookItemType } from '../../../types/index';
import LookBookItem from './LookBookItem/LookBookItem';

const lookBook = (props) => {
    let lookBookSliderContent = React.createRef();

    let lookBookItems = null;

    if (props.lookBookItems.length > 0) {
        lookBookItems = props.lookBookItems.map(item => {
            return <LookBookItem key={item._id} lookBookItem={item} />
        });
    }

    const scrollRightHandler = () => {
        lookBookSliderContent.current.scrollBy({
            left: 750,
            behavior: 'smooth'
        });
    }

    const scrollLeftHandler = () => {
        lookBookSliderContent.current.scrollBy({
            left: -750,
            behavior: 'smooth'
        });
    }

    return (
        <div className={classes.LookBook}>
            <div className={classes.Header}>
                <h2>Celebrity Look Books</h2>
            </div>
            <div className={classes.LookBookSlider}>
                <div className={classes.LookBookSliderContent} ref={lookBookSliderContent}>
                    <div className={classes.SpaceItem}></div>
                    {lookBookItems}
                </div>
                <button className={classes.LeftButton} onClick={scrollLeftHandler}>
                    <i className="fas fa-arrow-left" />
                </button>
                <button className={classes.RightButton} onClick={scrollRightHandler}>
                    <i className="fas fa-arrow-right" />
                </button>
            </div>
        </div>
    );
}

lookBook.propTypes = {
    lookBookItems: PropTypes.arrayOf(lookBookItemType)
};

export default lookBook;