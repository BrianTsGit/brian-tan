import React, { Component } from 'react';

import classes from './RoundThumbnailCarousel.scss';
import RoundThumbnailSlide from '../../component/RoundThumbnailSlide/RoundThumbnailSlide';

class RoundThumbnailCarousel extends Component {
    state = {
        translateValue : 0,
        slideCount: 1,
        currentSlide: 1
    };

    componentDidMount () {
        this.updateSlides();
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.props.slideItems !== prevProps.slideItems) {
            this.updateSlides();
        }
    }

    updateSlides = () => {
        const slideCount = Math.ceil(this.props.slideItems.length / 4);
        this.setState({ slideCount: slideCount, currentSlide: 1 });
    }

    slideWidth = () => {
        return document.querySelector('.carousel').clientWidth;
    }

    navigateRightHandler = () => {
        const movementVal = this.slideWidth();
        this.setState(prevState => { 
            return { 
                translateValue: prevState.translateValue - movementVal,
                currentSlide: prevState.currentSlide + 1 
            }
        });
    };

    navigateLeftHandler = () => {
        const movementVal = this.slideWidth();
        this.setState(prevState => { 
            return {
                translateValue: prevState.translateValue + movementVal,
                currentSlide: prevState.currentSlide - 1
            }
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
                { this.state.currentSlide === this.state.slideCount ? 
                    null :
                    <div 
                        className={classes.NextArrow}
                        onClick={this.navigateRightHandler}>
                        <i className="fa fa-angle-right fa-2x"></i>
                    </div>
                }
                { this.state.currentSlide === 1 ? 
                    null : 
                    <div 
                        className={classes.PrevArrow}
                        onClick={this.navigateLeftHandler}>
                        <i className="fa fa-angle-left fa-2x"></i>
                    </div>
                }
            </div>
        )
    }
}

// Expects an array of an object that contains: 
// {
//     ._id: String,
//     image_url: String,
//     text: String,
//     category: String (Optional)
// }

export default RoundThumbnailCarousel;