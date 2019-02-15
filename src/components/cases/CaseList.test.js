import React from 'react';
import CaseList from './CaseList'
import { shallow } from 'enzyme';

describe('<CaseList />', () => {
    it('renders success', () => {
        shallow(<CaseList />);
    });
});