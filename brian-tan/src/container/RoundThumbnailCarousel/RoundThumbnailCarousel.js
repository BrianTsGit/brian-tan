import React, { Component } from 'react';

import classes from './RoundThumbnailCarousel.scss';
import RoundThumbnailSlide from '../../component/RoundThumbnailSlide/RoundThumbnailSlide';

class RoundThumbnailCarousel extends Component {
    state = {
        translateValue : 0
    };

    slideWidth = () => {
        return document.querySelector('.carousel').clientWidth;
    }

    navigateRightHandler = () => {
        const movementVal = this.slideWidth();
        this.setState(prevState => { 
            return {translateValue: prevState.translateValue - movementVal}
        });
    };

    navigateLeftHandler = () => {
        const movementVal = this.slideWidth();
        this.setState(prevState => { 
            return {translateValue: prevState.translateValue + movementVal}
        });
    };

    render () {
        let carouselSlides = null;

        //Creates a RoundThumbnailSlide for every 4 slideItems
        if (this.props.slideItems.length) {
            let thumbnailContent = [];
            carouselSlides = this.props.slideItems.reduce((slides, item, index, array) => {
                thumbnailContent.push(item);
                if ((index + 1) % 4 === 0 || index === array.length - 1) {
                    slides.push(
                        <RoundThumbnailSlide 
                            key={index} 
                            items={thumbnailContent}
                            category={item.category} />
                    );
                    thumbnailContent = [];
                }
                return slides;
            }, []);
        }

        return (
            <div className={[classes.RoundThumbnailCarousel, 'carousel'].join(' ')}>
                <div 
                    className={classes.CarouselWrapper}
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.3s'
                    }}>
                    {carouselSlides}
                </div>
                <div 
                    className={classes.NextArrow}
                    onClick={this.navigateRightHandler}>
                    <i className="fa fa-angle-right fa-2x"></i>
                </div>
                <div 
                    className={classes.PrevArrow}
                    onClick={this.navigateLeftHandler}>
                    <i className="fa fa-angle-left fa-2x"></i>
                </div>
            </div>
        )
    }
}

export default RoundThumbnailCarousel;