import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RestaurantHitList.scss';
import * as actions from '../../../store/actions/index';
import YelpResults from '../../../component/Food/YelpResults/YelpResults';

class RestaurantHitList extends Component {

    componentDidMount () {
        this.props.getHitList();
    }

    render () {
        return (
            <div className={classes.RestaurantHitList}>
                <div className={classes.HitListHeader}>
                    <h2>Restaurants to Visit</h2>
                    <span className={classes.Icon} role="img" aria-label="image">👀</span>
                </div>
                <YelpResults 
                    items={this.props.hitList}
                    loading={this.props.loadingHitList} 
                    clickAction="Remove"
                    placeholder="There are no items yet." />
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