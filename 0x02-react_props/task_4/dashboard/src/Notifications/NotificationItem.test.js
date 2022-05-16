import { shallow } from 'enzyme';
import React from 'react';
import { NotificationItem } from './NotificationItem';


// Uses shallow to render NotificationItem component
describe('<NotificationItem />', () => {
	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Tests that menuItem is rendered when displayDrawer is false', () => {	
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	})

	it('Tests the div Notifications is not rendered when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.Notifications').length).toBe(0);
	})

	it('Tests that menuItem is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	})

	it('Tests that the div Notifications is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		expect(wrapper.find('.Notifications').length).toBe(1);
	})
})