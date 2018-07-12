//enzyme allows us to load a single component without having to render the whole react application
//shallow is a method that renders a component without rendering its children 

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe ('<NavigationItems />', () => {
    it ('should render 2 <NavigationItem /> elements.', () => {
        const wrapper = shallow(<NavigationItems />);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    }); 
});

//jest helper methods for testing
//describe (nameOfComponent:String, functionThatHasTestInIt:Function)
//it (descriptionOfComponentBehavior:String, functionOfActualTestToRun:Function)
//expect (methodOfWhatToExpect)