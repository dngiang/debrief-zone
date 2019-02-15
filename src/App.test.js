import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
    it('renders success', () => {
        shallow(<App />);
    });
});