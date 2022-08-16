import { useEffect } from 'preact/hooks';
import { Route, Switch, Redirect, useLocation } from 'wouter-preact';

import localDB from 'services/localstorage';

import scrollBackToTop from 'lib/scroll-back-to-top';

import Access from 'wrappers/Access';

import routes from './routes';

import { roles } from 'constants.js';

const defaultPathFor400 = '/';

export default function Router() {

	useOverlayRemoval();

	return <>
		<OnChange/>
		<Switch>
			{routes.map(({ name, path, Component, minimumRole }) => {
				return <Route key={path} path={path} component={({ params }) => {
					return <Access minimum={minimumRole} onFail={({ userRole }) => {

						if (userRole !== roles.GUEST) {
							// if a logged-in user arrived at a restricted route - redirect to home
							// in the future this will be replaced with a page explaining insufficient permissions
							return <Redirect to={defaultPathFor400} replace={true} />;
						}

						// if a user that isn't logged-in arrived at a restricted route - redirect to signup/login page and remember the path user tried to access
						const failedPath = location.href.substring(location.origin.length);
						// ignore the default path to avoid unnecessary redirects
						if (failedPath !== defaultPathFor400) localDB.set({ redirectTo: failedPath });
						return <Redirect to={`/connect`} />;
					}}>
						<main id="page" data-page={name}>
							<Component params={params} />
						</main>
					</Access>;
				}} />;
			})

				// default route
				.concat(<Route key="default" component={() => {
					return <Redirect replace={true} to={'/'} />;
				}} />)
			}
		</Switch>
	</>;
}

function OnChange() {
	useLocation();
	if ('hj' in window) window.hj('stateChange', window.location.pathname);
	scrollBackToTop();
	return null;
}

function useOverlayRemoval() {
	useEffect(() => {
		const overlay = document.body.firstElementChild;
		const animationDuration = 0.3;

		// set animation duration
		overlay.style.animationDuration = animationDuration + 's';
		// start animation
		overlay.classList.add('fading');
		setTimeout(() => {
			overlay.remove();
		}, animationDuration * 1000);
	}, []);
}