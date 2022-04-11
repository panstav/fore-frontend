import WrapConditionally from 'components/wrappers/WrapConditionally';
import { Route, Switch, Redirect } from 'wouter-preact';

import Access from 'wrappers/Access';

import WaitingList from 'components/pages/WaitingList/WaitingList';

import routes from './routes';

export default function Router() {
	// noinspection JSValidateTypes
	return <Switch>
		{routes.map(({ name, path, Component, minimumRole }) => {
			return <Route key={path} path={path} component={({ params }) => {
				return <Access minimum={minimumRole} onFail={() => <Redirect to={'/login'}/>}>
					<WrapConditionally wrapper={AdminsOnly} if={path !== '/login'}>
						<div id="page-container" data-page={name}>
							<Component params={params} />
						</div>
					</WrapConditionally>
				</Access>;
			}}/>;
		})

			// default route
			.concat(<Route key="default" component={() => {
				return <Redirect replace={true} to={'/'}/>;
			}}/>)
		}
	</Switch>;

	function AdminsOnly({ children }) {
		return <Access only={(r) => r.ADMIN} onFail={WaitingList}>
			{children}
		</Access>;
	}
}