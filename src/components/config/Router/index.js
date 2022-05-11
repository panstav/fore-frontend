import WrapConditionally from 'components/wrappers/WrapConditionally';
import { Route, Switch, Redirect } from 'wouter-preact';

import localDB from 'services/localstorage';

import Access from 'wrappers/Access';

import WaitingList from 'components/pages/WaitingList/WaitingList';

import routes from './routes';

export default function Router() {
	// noinspection JSValidateTypes
	return <Switch>
		{routes.map(({ name, path, Component, minimumRole }) => {
			return <Route key={path} path={path} component={({ params }) => {

				// if user does not have sufficient permissions
				// redirect to login and remember the path user tried to access
				return <Access minimum={minimumRole} onFail={() => {
					const failedPath = location.href.substring(location.origin.length);
					if (failedPath !== '/') localDB.set({ redirectTo: failedPath });
					return <Redirect to={`/login`} />;
				}}>
					{(() => {

						// successfully logging in directs users to homepage
						// so only on the homepage we'll check whethere there's a redirectTo saved
						if (path === '/') {
							const redirectTo = localDB.get().redirectTo;
							if (redirectTo) {
								// there's a url saved - delete it and redirect to it
								localDB.set({ redirectTo: null });
								return <Redirect to={redirectTo} />;
							}
						}

						return <WrapConditionally wrapper={AdminsOnly} if={path !== '/login'}>
							<div id="page" data-page={name}>
								<Component params={params} />
							</div>
						</WrapConditionally>;
					})() }
				</Access>;
			}}/>;
		})

			// default route
			.concat(<Route key="default" component={() => {
				return <Redirect replace={true} to={'/'}/>;
			}}/>)
		}
	</Switch>;
}

function AdminsOnly({ children }) {
	return <Access only={(r) => r.ADMIN} onFail={WaitingList}>
		{children}
	</Access>;
}