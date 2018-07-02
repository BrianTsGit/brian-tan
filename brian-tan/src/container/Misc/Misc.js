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
        let carousels = null;

        if (this.props.miscInterests.length) {
            //Convert list of miscInterests into carousel sections based on their category
            carousels = [];
            let carouselCollections = {};

            for (let item of this.props.miscInterests) {
                if (!carouselCollections[item.category]) {
                    carouselCollections[item.category] = [];
                }
                carouselCollections[item.category].push(item);
            }

            for (let collection in carouselCollections) {
                carousels.push(
                    <div key={collection} className={classes.CarouselSection}>
                        <div className={classes.SectionTitle}>
                            <span>{collection.toUpperCase()}</span>
                        </div>
                        <RoundThumbnailCarousel slideItems={carouselCollections[collection]} />
                    </div>
                );
            }

        }

        return (
            <div className={classes.Misc}>
                <div className={sharedClasses.Banner}>
                    <h1>Banner Placeholder.</h1>
                </div>
                {carousels}
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