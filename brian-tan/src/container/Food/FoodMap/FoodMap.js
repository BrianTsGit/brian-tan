import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './FoodMap.scss';
import MapContainer from '../../MapContainer/MapContainer';
import Loader from '../../../component/UI/Loader/Loader';

class FoodMap extends Component {

    mapifyYelpBusinesses = (businesses) => {
        return businesses.map(b => {
            return {
                ...b,
                address: b.location.address1 + ', ' + b.location.city,
                img: b.image_url,
                desc: b.rating + ' stars w/ ' + b.review_count + ' reviews',
                additionalDesc: b.price 
            }
        }); 
    }

    render () {
        let foodMap = (
            <div className={classes.LoaderArea}>
                <Loader />
            </div>
        );

        if (this.props.hitList) {
            let mapifiedYelpBusinesses = this.mapifyYelpBusinesses(this.props.hitList);
            let initialCenter = {
                lat: 40.7675,
                lng: -73.8331
            };
            if (mapifiedYelpBusinesses.length) {
                initialCenter = {
                    lat: mapifiedYelpBusinesses[0].coordinates.latitude,
                    lng: mapifiedYelpBusinesses[0].coordinates.longitude
                };
            }
            foodMap = <MapContainer locations={mapifiedYelpBusinesses} initialCenter={initialCenter}/>
        }

        return (
            <div className={classes.FoodMap}>
                <div className={classes.MapHeader}>
                    <span>MAP OF SAVED FOOD DESTINATIONS</span>
                </div>
                <div className={classes.Map}>{foodMap}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        hitList: state.food.hitList
    };
};

export default connect(mapStateToProps, null)(FoodMap);