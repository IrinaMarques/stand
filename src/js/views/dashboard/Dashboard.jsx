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
			<div>
				<TopMenu/>
				<AsideMenu/>
				<p>adad adad</p>
				<section>
					{ this.props.children() } 
				</section>
			</div>
		);
    }
};

export default Dashboard;