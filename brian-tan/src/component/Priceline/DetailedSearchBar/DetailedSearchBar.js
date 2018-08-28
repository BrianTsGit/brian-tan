import React from 'react';
import PropTypes from 'prop-types';

import classes from './DetailedSearchBar.scss'

const detailedSearchBar = (props) => {

    return (
        <div className={classes.DetailedSearchBar}>
            <div className={classes.SearchArticle}>
                <div className={classes.Icon}>
                    <i className="fas fa-search" />
                </div>
                <div className={classes.SearchParam}>
                    {props.term}
                </div>
            </div>
            <div className={classes.SearchArticle}>
                <div className={classes.Icon}>
                    <i className="fas fa-calendar-alt" />
                </div>
                <div className={classes.SearchParam}>
                    {props.filter}
                </div>
            </div>
            <div className={classes.SearchArticle}>
                <div className={classes.Icon}>
                    <i className="fas fa-users" />
                </div>
                <div className={classes.SearchParam}>
                    1 Company
                </div>
            </div>
            <div className={classes.SearchButton}>
                <span>Update Search</span>
            </div>
        </div>

    );
}

export default detailedSearchBar;