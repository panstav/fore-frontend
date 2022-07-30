import { useState, useCallback, useMemo } from 'preact/compat';
import { connect } from 'unistore/preact';
import { useLocation } from 'wouter-preact';

import isAuth from 'lib/is-auth';

import Component from './Connect';

import { roles } from 'constants.js';

const connectingMethodNames = {
	login: 'Login',
	signup: 'Sign up'
};

export default connect(mapStateToProps)(Connect);

function Connect({ isLoggedIn, methodFromUrl }) {
	const [, setLocation] = useLocation();

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

	// redirect a user to the homepage if they are already logged in
	if (isLoggedIn) return setLocation('/', { replace: true	});

	const props = {
		connectingMethods,
		connectionMethod: selectedMethod
	};

	return Component(props);
}

function mapStateToProps({ user }) {
	const hashString = window.location.hash.substring(1);
	// remove the hash from the url
	window.history.replaceState("", document.title, window.location.pathname + window.location.search);

	return {
		isLoggedIn: isAuth(user.role, { minimum: roles.order[1] }),
		methodFromUrl: Object.keys(connectingMethodNames).includes(hashString) ? connectingMethodNames[hashString] : connectingMethodNames.login
	};
}