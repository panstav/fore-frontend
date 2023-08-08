import { useLocation } from 'wouter-preact';

import Component from './Footer';

const version = process.env.npm_package_version;

export default function Footer() {

	const [, setLocation] = useLocation();

	const handleLogOut = async () => {
		setLocation('/logout');
	};

	const props = {
		logOut: handleLogOut,
		version
	};

	return Component(props);

}