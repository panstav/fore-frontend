import { useState, useCallback, useMemo } from 'preact/compat';
import { connect } from 'unistore/preact';

import isAuth from 'lib/is-auth';

import Component from './Connect';

import { roles } from 'constants.js';

const connectingMethodNames = {
	login: 'Login',
	signup: 'Sign up'
};

export default connect(mapStateToProps)(Connect);

function Connect({ isLoggedIn, methodFromUrl }) {

	const [selectedMethod, setSelectedMethod] = useState(methodFromUrl);
	const switchTo = useCallback((method) => {
		// setState to the pretty name of the method
		return setSelectedMethod(Object.keys(connectingMethodNames).includes(method) ? connectingMethodNames[method] : connectingMethodNames[Object.keys(connectingMethodNames)[0]]);
	}, [setSelectedMethod]);

	const connectingMethods = useMemo(() => ([
		{
			name: 'Login',
			switchTo: () => switchTo('login')
		},
		{
			name: 'Sign up',
			switchTo: () => switchTo('signup')
		}
	].map((connectingMethod) => {
		// adds isActive property according to method name
		connectingMethod.isActive = connectingMethod.name === selectedMethod;
		return connectingMethod;
	})), [selectedMethod, switchTo]);

	const props = {
		isLoggedIn,
		connectingMethods,
		connectionMethod: selectedMethod
	};

	return Component(props);
}

function mapStateToProps({ user }) {
	const searchString = window.location.search.substring(1);

	return {
		isLoggedIn: isAuth(user.role, { minimum: roles.order[1] }),
		methodFromUrl: Object.keys(connectingMethodNames).includes(searchString) ? connectingMethodNames[searchString] : connectingMethodNames.login
	};
}