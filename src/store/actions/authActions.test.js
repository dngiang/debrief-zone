import React from 'react';
import { signIn, signOut, signUp } from './authActions'
import { shallow } from 'enzyme';

describe('<signIn />', () => {
    it('renders success', () => {
        shallow(<signIn />);
    });
});

describe('<signOut />', () => {
    it('renders success', () => {
        shallow(<signOut />);
    });
});

describe('<signUp />', () => {
    it('renders success', () => {
        shallow(<signUp />);
    });
});