import React, {Component} from 'react';

import { RedirectToIndexRoute } from '../../helpers/UrlUtils';

import AsideMenu from '../../components/dashboard/asideMenu/AsideMenu';
import TopMenu from '../../components/dashboard/topMenu/TopMenu';

require('./Dashboard.scss');

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}

    componentWillReceiveProps(nextProps) {
	}

	componentWillMount() {
	}

	buildState(nextProps) {
		return nextProps || {
			asideMenuIsOpen: false
		}
	}

	_onAsideMenuToggle() {
		return this.setState({
			asideMenuIsOpen: !this.state.asideMenuIsOpen
		});
	}

    render() {
		const redirect = RedirectToIndexRoute(this.props);
		if(redirect) return redirect;
		
		return (
			<div className='box-container'>
				<TopMenu 
					onAsideMenuToggle={ state => this._onAsideMenuToggle(state) }
					isOpen={ this.state.asideMenuIsOpen }
				/>
				
				<div className="content-main-container">
					<AsideMenu isOpen={ this.state.asideMenuIsOpen } />
					<main className='main-box'>
						{ this.props.children } 
					</main>
				</div>
			</div>
		);
    }
};

export default Dashboard;