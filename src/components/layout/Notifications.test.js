import React from 'react'
import Notifications from './Notifications'
import { shallow } from 'enzyme'

describe('<Notifications />', () => {
    it('renders success', () => {
        shallow(<Notifications />);
    });
});