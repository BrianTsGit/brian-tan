import { Component } from 'react';
import PropTypes from 'prop-types';

const eventNames = ['click', 'mouseover'];

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

    componentWillUnmount () {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }

    camelize = (str) => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
    };

    handleEvent (eventName) {
        const handlerName = `on${this.camelize(eventName)}`; //template literal notation

        return (e) => {
            if (this.props[handlerName]) {
                this.props[handlerName](this.props, this.marker, e);
            }
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

        eventNames.forEach(e => {
            this.marker.addListener(e, this.handleEvent(e));
        });
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
