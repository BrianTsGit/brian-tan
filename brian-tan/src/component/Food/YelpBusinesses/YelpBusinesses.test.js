import React from 'react';
import { configure, shallow } from 'enzyme'; //essentially the mocking library for React
import Adapter from 'enzyme-adapter-react-16';

import YelpBusinesses from './YelpBusinesses';
import YelpBusiness from './YelpBusiness/YelpBusiness';
import Loader from '../../UI/Loader/Loader';

configure({ adapter: new Adapter() });

describe('<YelpBusinesses />', () => {
    let wrapper;
    let items = [];

    beforeEach(() => {
        wrapper = shallow(<YelpBusinesses />);
    });

    it ('should have <Loader /> element if loading prop is true', () => {
        wrapper.setProps({ loading: true });
        expect(wrapper.contains(<Loader />)).toEqual(true);
    });

    it ('should load two <YelpBusinesses /> elements if two businesses are in props.items', () => {
        items = [
            {
                yelp_id: '12345',
                name: 'restaurant1',
                image_url: 'image1',
                url: 'url1',
                review_count: 100,
                rating: 5,
                price: '$',
                categories: ['cat1', 'cat2'],
                location: {
                    city: 'city1',
                    address1: 'address1'
                }
            },
            {
                yelp_id: '12346',
                name: 'restaurant2',
                image_url: 'image2',
                url: 'url2',
                review_count: 100,
                rating: 5,
                price: '$',
                categories: ['cat1', 'cat2'],
                location: {
                    city: 'city2',
                    address1: 'address2'
                }
            },
        ];
        wrapper.setProps({ loading: false, items: items, clickAction: 'Save' });
        expect(wrapper.find(YelpBusiness)).toHaveLength(2);
    });

});

// jest helper methods for testing
// describe (nameOfComponent:String, functionThatHasTestInIt:Function)
// beforeEach (setupFunction:Function)
// it (descriptionOfComponentBehavior:String, functionOfActualTestToRun:Function)
// expect (methodOfWhatToExpect:Function)

// enzyme methods
// configure (objectWithAdapter:Object)
// shallow (functionDescribingReactElement:Function(JSX))
    // shallow.setProps(objectRepresentingComponentProps:Object)

// NOTE: To bypass testing a component that is connected to redux store,
// go to the component file and directly export the class and in this test file
// specify the import of the component so we do not use the default export
// which is where the redux connection is setup