import { Route, Switch, Redirect } from 'wouter-preact';

// import Route from 'wrappers/RenderChildren.js';

import routes from './routes';

export default function Router() {
	// noinspection JSValidateTypes
	return <Switch>
		{routes.map(({ name, path, Component }) => {
			return <Route key={path} path={path} component={({ params }) => {
				return <div id="page-container" data-page={name}>
					<Component params={params} />
				</div>;
			}}/>;
		})

			// default route
			.concat(<Route key="default" component={() => {
				return <Redirect replace={true} to={'/'}/>;
			}}/>)
		}
	</Switch>;
}