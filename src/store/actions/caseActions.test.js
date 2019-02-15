import React from 'react';
import createCase from './caseActions'
import { shallow } from 'enzyme';

describe('<createCase />', () => {
    it('renders success', () => {
        shallow(<createCase />);
    });
});