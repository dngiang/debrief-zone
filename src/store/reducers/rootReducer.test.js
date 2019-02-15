import React from 'react';
import rootReducer from './rootReducer'
import { shallow } from 'enzyme';

describe('<rootReducer />', () => {
    it('renders success', () => {
        shallow(<rootReducer />);
    });
});