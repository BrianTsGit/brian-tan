import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from '../../hoc/GoogleMap/GoogleMap';
import classes from './MapContainer.scss';
import Map from './Map/Map';
import Marker from './Marker/Marker';

class MapContainer extends Component {

    render () {
        //console.log('MapContainer.js rendered');
        if (!this.props.loaded) {
            return <div>Loading...</div>;
        }

        let markers = null;

        if (this.props.hitList) {
            markers = this.props.hitList.map(item => {
                const pos = { lat: item.coordinates.latitude, lng: item.coordinates.longitude };
                return <Marker key={item.yelp_id} position={pos} />
            });
            //console.log(markers);
        }

        return (
            <div className={classes.Map}>
                <Map google={this.props.google}>
                    {markers}
                </Map>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        hitList: state.hitList
    };
};

export default connect(mapStateToProps, null)(GoogleMap({ apiKey: 'AIzaSyDj8-XjYSBinK929WNoHHq9EYu1SAWWLjM' })(MapContainer))