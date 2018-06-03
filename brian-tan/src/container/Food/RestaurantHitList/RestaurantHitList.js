import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RestaurantHitList.scss';
import * as actions from '../../../store/actions/index';
import YelpSearch from '../YelpSearch/YelpSearch';
import YelpResults from '../../../component/Food/YelpResults/YelpResults';
import HitListItem from '../../../component/Food/HitListItem/HitListItem';

class RestaurantHitList extends Component {

    componentDidMount () {
        this.props.getHitList();
    }

    render () {
        return (
            <div className={classes.RestaurantHitList}> 
                <h2>Restaurant Hit List</h2>
                <div className={classes.ContentContainer}>
                    <YelpSearch />
                    <div className={classes.HitList}>
                        <YelpResults 
                            items={this.props.hitList} 
                            clickAction="Remove"
                            placeholder="There are no items yet." />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        hitList: state.hitList,
        loadingHitList: state.loadingHitList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHitList: () => dispatch(actions.getHitList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHitList);