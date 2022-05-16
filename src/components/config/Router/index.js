import { Route, Switch, Redirect, useLocation } from 'wouter-preact';

import localDB from 'services/localstorage';

import Access from 'wrappers/Access';

import routes from './routes';

import { roles } from 'constants.js';

function OnChange() {
	useLocation();
	window.scrollTo(0, 0);
	return null;
}

export default function Router() {
	return <>
		<OnChange/>
		<Switch>
			{routes.map(({ name, path, Component, minimumRole }) => {
				return <Route key={path} path={path} component={({ params }) => {

					// successfully logging in directs users to homepage
					// so only on the homepage we'll check whether there's a redirectTo saved
					if (path === '/') {
						const redirectTo = localDB.get().redirectTo;
						if (redirectTo) {
							// there's a url saved - delete it and redirect to it
							localDB.set({ redirectTo: null });
							return <Redirect to={redirectTo} replace={true} />;
						}
					}

					return <Access minimum={minimumRole} onFail={({ userRole }) => {

						if (userRole !== roles.GUEST) {
							// if user is logged and arrived at a restricted route - redirect to /closed-beta exaplanation
							// in the future this will be replaced with /insufficient-permissions page
							return <Redirect to={'/closed-beta'} replace={true} />;
						}

						// if user does not have sufficient permissions
						// redirect to login and remember the path user tried to access
						const failedPath = location.href.substring(location.origin.length);
						if (failedPath !== '/') localDB.set({ redirectTo: failedPath });
						return <Redirect to={`/login`} />;
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