import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

import Bundle from '../components/Bundle';
import Router from '../router';

const renderComp = (ComponentClass, props, route) => {
	return (
		<ComponentClass {...props} routes={route.routes} children={ () => (
			
			route.routes && route.routes.map((route, i) => {
				console.log(route)
				return (
					route.async || route.async === undefined ?
						<AsyncRouteWithSubRoutes key={i} {...route} {...props}/>
					:
						<SyncRouteWithSubRoutes key={i} {...route} {...props}/>
				);
			})
		)}/>
	);
};

const SyncRouteWithSubRoutes = (route) => {
	return (
		<Route path={ (route.match ? `${ route.match.url + route.path }` : route.path) } render={ props => (
				renderComp(require('./' + route.component + '.jsx').default, props, route)
			)}
		/>
	);
};

const AsyncRouteWithSubRoutes = (route) => {
	return (
		<Route path={ (route.match ? `${ route.match.url + route.path }` : route.path)} render = { props => {
			console.log('bundle-loader?lazy!./' + route.component)
			return (
				<Bundle load={ require('bundle-loader?lazy!./' + route.component + '.jsx') }>
					{ ((ComponentClass) => renderComp(ComponentClass, props, route)) }
				</Bundle>
			);
		}}/>
	);
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}

	buildState(nextProps) {
		return nextProps || {
			routes: Router || []
		}
	}

    render() {
        const routes = this.state.routes;

		return (
			<div>
				{routes.map((route, i) => (
					route.async || route.async === undefined ?
						<AsyncRouteWithSubRoutes key={i} {...route}/>
					:
						<SyncRouteWithSubRoutes key={i} {...route}/>
				))}
			</div>
		);
    }
};

export default App;