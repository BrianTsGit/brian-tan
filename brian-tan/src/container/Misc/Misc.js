import React, { Component } from 'react';
import { connect } from 'react-redux';

import sharedClasses from '../../index.scss';
import classes from './Misc.scss';
import * as actions from '../../store/actions/index';
import RoundThumbnailCarousel from '../RoundThumbnailCarousel/RoundThumbnailCarousel';

class Misc extends Component {

    componentDidMount () {
        if (!this.props.miscInterests.length)
            this.props.getMiscInterests();
    }

    render () {
        let carousel = null;

        if (this.props.miscInterests.length) {
            carousel = <RoundThumbnailCarousel slideItems={this.props.miscInterests} />;
        }

        return (
            <div>
                <div className={sharedClasses.Banner}>
                    <h1>TEMP MISC BANNER</h1>
                </div>
                {carousel}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        miscInterests: state.miscInterest.miscInterests
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMiscInterests: () => dispatch(actions.getMiscInterests())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Misc); 