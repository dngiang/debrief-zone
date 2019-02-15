import React from 'react';
import { shallow } from 'enzyme';
import SignedOutLinks from './SignedOutLinks';

describe('<SignedOutLinks />', () => {
    it('renders success', () => {
        shallow(<SignedOutLinks />);
    });

});