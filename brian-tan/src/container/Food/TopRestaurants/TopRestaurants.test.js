import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { TopRestaurants } from './TopRestaurants';
import RoundThumbnailCarousel from '../../RoundThumbnailCarousel/RoundThumbnailCarousel';
import Loader from '../../../component/UI/Loader/Loader';

configure({ adapter: new Adapter() });

describe('<TopRestaurants />', () => {
    let wrapper;
    let topRestaurants = [];

    beforeEach(() => {
        wrapper = shallow(<TopRestaurants 
                topRestaurants={topRestaurants} 
                getTopRestaurants={() => {}} />);
    });

    it ('should show <Loader /> if loadingTopRestaurants is true', () => {
        wrapper.setProps({ loadingTopRestaurants: true });
        expect(wrapper.contains(<Loader />)).toEqual(true);
    });

    it ('should show <RoundthumbnailCarousel /> if there are items in props.topRestaurants', () => {
        topRestaurants = [
            {
                name: 'restaurant1',
                image_url: 'image1'
            },
            {
                name: 'restaurant2',
                image_url: 'image2'
            }
        ];

        wrapper.setProps({ topRestaurants: topRestaurants });
        expect(wrapper.find(RoundThumbnailCarousel)).toHaveLength(1);

    });
});