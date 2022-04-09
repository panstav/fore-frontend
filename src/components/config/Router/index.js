import { Route, Switch, Redirect } from 'wouter-preact';

import Access from 'wrappers/Access';

import routes from './routes';

export default function Router() {
	// noinspection JSValidateTypes
	return <Switch>
		{routes.map(({ name, path, Component, minimumRole }) => {
			return <Route key={path} path={path} component={({ params }) => {
				return <Access minimum={minimumRole} onFail={() => <Redirect to={'/login'}/>}>
					<div id="page-container" data-page={name}>
						<Component params={params} />
					</div>
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