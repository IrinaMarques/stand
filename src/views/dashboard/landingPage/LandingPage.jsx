import React, {Component} from 'react';
import { RedirectToIndexRoute } from '../../../helpers/UrlUtils';
import TabsWithHeader from '../../../components/dashboard/tabs/TabsWithHeader'

class Landingpage extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		return {
			tabs: [
				{
					name: 'Mensagens',
					path: '/dashboard/entry/last-messages',
					iconClassName: 'fa fa-envelope-open-o'
				},
				{
					name: 'Visitas',
					path: '/dashboard/entry/general-statistics',
					iconClassName: 'fa fa-pie-chart'
				},
				{
					name: 'Visualizações',
					path: '/dashboard/entry/articles-statistics',
					iconClassName: 'fa fa-eye'
				}
			]
		}
	}

    render() {
		const redirect = RedirectToIndexRoute(this.props);
		if(redirect) return redirect;

		return (
			<TabsWithHeader 
				tabs        = { this.state.tabs }
				title       = 'Dashboard'
				description = 'Resumo de todas as actividades no website'
			>
				{ this.props.children } 
			</TabsWithHeader>
		);
    }
};

export default Landingpage;