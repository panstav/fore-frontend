import { Route, Switch, Redirect } from 'wouter-preact';

// import Route from 'wrappers/RenderChildren.js';

import routes from './routes';
import { useEffect } from 'preact/compat';

export default function Router() {
	// noinspection JSValidateTypes
	return <Switch>
		{routes.map(({ name, path, Component }) => {
			return <Route key={path} path={path} component={({ params }) => {
				return <RouteWrapper name={name}><Component params={params}/></RouteWrapper>;
			}}/>;
		})

			// default route
			.concat(<Route key="default" component={() => {
				return <Redirect replace={true} to={'/'}/>;
			}}/>)
		}
	</Switch>;
}

function RouteWrapper({ name, children }) {

	useEffect(() => {
		document.body.dataset.page = name;
	}, []);

	return children;
}