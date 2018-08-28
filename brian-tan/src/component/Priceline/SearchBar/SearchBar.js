import React from 'react';
import PropTypes from 'prop-types';

import classes from './SearchBar.scss'

const searchBar = (props) => {

    return (
        <div className={classes.SearchBar}>
            <div className={classes.SearchContent}>
                <div className={classes.Icon}>
                    <i className="fas fa-search" />
                </div>
                <div className={classes.SearchMaterial}>
                    <h6>{props.term}</h6>
                    <span>{props.filter}</span>
                </div>
            </div>
        </div>
    );
}

searchBar.propTypes = {
    term: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired
};

export default searchBar;