import React, {Component} from 'react';

import { RedirectToIndexRoute } from '../../helpers/UrlUtils';

import styles from './Dashboard.scss';

import AsideMenu from '../../components/dashboard/asideMenu/AsideMenu';
import TopMenu from '../../components/dashboard/topMenu/TopMenu';



class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();

		return this;
	}
	
    componentWillReceiveProps(nextProps) {
	}

	componentWillMount() {
		return this.setState({
			stylesLoaded: true
		});
	}

	buildState(nextProps) {
		return nextProps || {
			asideMenuIsOpen: false,
			stylesLoaded: false
		}
	}

	_onAsideMenuToggle() {
		return this.setState({
			asideMenuIsOpen: !this.state.asideMenuIsOpen
		});
	}

    render() {
		const redirect = RedirectToIndexRoute(this.props);
		const { stylesLoaded } = this.state;
		if (stylesLoaded && redirect) return redirect;
		
		return stylesLoaded && (
			<div className='dashboard'>

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
			</div>
		) || (
			<div> 
				Loading...
			</div>
		);
    }
};

export default Dashboard;