import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Marker extends Component {
    componentDidMount () {
        this.renderMarker();
    }

    componentDidUpdate (prevProps) {
        if ((this.props.map !== prevProps.map) ||
            (this.props.position !== prevProps.position)) {
                this.renderMarker();
            } 
    }

    renderMarker () {
        let {
            map, google, position, mapCenter
        } = this.props;

        let pos = position || mapCenter; //if we don't pass in a position, the marker will show on center
        position = new google.maps.LatLng(pos.lat, pos.lng);

        const pref = {
            map: map,
            position: position
        };
        this.marker = new google.maps.Marker(pref); //this creates the actually marker
        this.props.pushMarker(this.marker);
    }

    render () {
        return null;
    }
}

Marker.propTypes = {
    position: PropTypes.object,
    map: PropTypes.object
};

export default Marker; 
