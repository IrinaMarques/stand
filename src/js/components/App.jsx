import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import Bundle from './Bundle';
import Router from '../router';

const renderComp = (ComponentClass, props, route) => {
	return (
		<ComponentClass {...props} routes={route.routes} children={ () => (
			
			route.routes && route.routes.map((route, i) => (
				
				route.async ?
					<AsyncRouteWithSubRoutes key={i} {...route} {...props}/>
				:
					<SyncRouteWithSubRoutes key={i} {...route} {...props}/>
			))
		)}/>
	);
};

const SyncRouteWithSubRoutes = (route) => {
	return (
		<Route path={ (route.match ? `${ route.match.url + route.path }` : route.path) } render={ props => (
				renderComp(require('./' + route.component), props, route)
			)}
		/>
	);
};

const AsyncRouteWithSubRoutes = (route) => {
	return (
		<Route path={ (route.match ? `${ route.match.url + route.path }` : route.path)} render = { props => (
             
			<Bundle load={ require('bundle-loader?lazy!./' + route.component) }>
				{ ((ComponentClass) => renderComp(ComponentClass, props, route)) }
			</Bundle>
		)}/>
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
				<h1>Welcome!</h1>

				{routes.map((route, i) => (
					<AsyncRouteWithSubRoutes key={i} {...route}/>
				))}
			</div>
		);
    }
};

export default App;