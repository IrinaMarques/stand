import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import Bundle from '../components/Bundle';
import Router from '../router';

const buildFullPath = (match, path) => (match ? `${match.url + path}` : path);

const renderComp = (ComponentClass, props, route) => {

	return (
		<ComponentClass {...props} route={route} children={ (() => (
			
			route.routes && route.routes.map((route, i) => {
				return (
					route.async || route.async === undefined ?
						<AsyncRouteWithSubRoutes key={i} route={route} {...props}/>
					:
						<SyncRouteWithSubRoutes key={i} route={route} {...props}/>
				);
			})
		))()}/>
	);
};

const SyncRouteWithSubRoutes = (props) => {
	const { route, match } = props;

	return (
		<Route path={buildFullPath(match, route.path)}  render={ props => (
			renderComp(require('./' + route.component + '.jsx').default, props, route)
			)}
		/>
	);
};

const AsyncRouteWithSubRoutes = (props) => {
	const { route, match } = props;

	return (
		<Route path={buildFullPath(match, route.path)}  render={ props => {

			return (
				<Bundle load={ require('bundle-loader?lazy!./' + route.component + '.jsx') }>
					{((ComponentClass) => renderComp(ComponentClass, props, route)) }
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
		const mainMenu = window.location.pathname === '/' && routes.map((route, i) => <Link key={i} to={route.path}> {route.path} </Link>);


		return (
			<div className='main-container'>

				{ mainMenu }
				
				{routes.map((route, i) => (
					route.async || route.async === undefined ?
						<AsyncRouteWithSubRoutes key={i} route={route}/>
					:
						<SyncRouteWithSubRoutes key={i} route={route}/>
				))}
				
			</div>
		);
    }
};

export default App;