import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './RecommendationEntry.scss'
import { recommendationItemType } from '../../../types/index';
import RecommendationItem from './ReccommendationItem/RecommendationItem';

class RecommendationEntry extends Component {

    state = {
        recommendations: [],
        activeIndex: 0
    }

    componentDidMount () {
        const recs = this.props.recommendations.map((rec, index) => {
            return {
                ...rec,
                isActive: index === 0
            };
        });

        this.setState({
            recommendations: recs
        });

        this.recommendationTimer = setInterval(
            () => this.rotateReccommendation(),
            4000
        );
    }

    componentWillUnmount () {
        clearInterval(this.recommendationTimer);
    }

    rotateReccommendation () {
        this.setState((prevState, props) => {
            let updatedActiveIndex = prevState.activeIndex + 1;

            if (updatedActiveIndex > this.state.recommendations.length - 1)
                updatedActiveIndex = 0;

            const updatedRecs = [...this.state.recommendations];
            updatedRecs[this.state.activeIndex].isActive = false;
            updatedRecs[updatedActiveIndex].isActive = true;

            return {
                activeIndex: updatedActiveIndex,
                recommendations: updatedRecs
            }
        });
    }

    render () {
        let recommendationItems = null;
        let recommendationUrl = ""; //Should implement loading overlay when no recommendations?

        if (this.state.recommendations.length > 0) {
            recommendationItems = this.state.recommendations.map(rec => {
                return (
                    <RecommendationItem key={rec.category} recommendation={rec} />
                )
            });

            recommendationUrl = this.state.recommendations[this.state.activeIndex].url;
        }

        return(
            <div className={classes.RecommendationEntry}>
                <a href={recommendationUrl}>
                    {recommendationItems}
                </a>
            </div>
        );
    }
}

RecommendationEntry.propTypes = {
    recommendations: PropTypes.arrayOf(recommendationItemType)
};

export default RecommendationEntry;