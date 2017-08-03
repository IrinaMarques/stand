import React, {Component} from 'react';

import AsideMenu from '../../components/dashboard/asideMenu/AsideMenu';
import TopMenu from '../../components/dashboard/topMenu/TopMenu';

require('./Dashboard.scss');

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		return nextProps || {
		}
	}

    render() {
		/** Escrever html aqui ( ... ) */
		return (
			<div className='box-container'>
				<TopMenu/>
				<AsideMenu/>
				<main className='main-box'>
					{ this.props.children() } 
				</main>
			</div>
		);
    }
};

export default Dashboard;