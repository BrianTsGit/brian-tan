import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RestaurantHitList.scss';
import * as actions from '../../../store/actions/index';
import YelpSearch from '../YelpSearch/YelpSearch';
import HitListItem from '../../../component/Food/HitListItem/HitListItem';

class RestaurantHitList extends Component {

    componentDidMount () {
        this.props.getHitList();
    }

    render () {

        let hitListItems = <p>There is nothing here yet.</p>

        if (this.props.hitList && this.props.hitList.length) {
            hitListItems = this.props.hitList.map(item => {
                return (
                    <HitListItem 
                        key={item.id} 
                        img={item.image_url}
                        url={item.url} />
                )
            });
        }

        return (
            <div className={classes.RestaurantHitList}> 
                <h2>Restaurant Hit List</h2>
                <div className={classes.ContentContainer}>
                    <YelpSearch />
                    <div className={classes.HitList}>
                        <h3>Targets</h3>
                        <div className={classes.HitListItems}>
                            {hitListItems}
                        </div>
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
        getHitList: () => dispatch(actions.getHitList()),
        saveRestaurant: (restaurant) => dispatch(actions.saveRestaurant(restaurant))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHitList);