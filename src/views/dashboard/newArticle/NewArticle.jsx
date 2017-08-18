import React, {Component} from 'react';
import { RedirectToIndexRoute } from '../../../helpers/UrlUtils';
import TabsWithHeader from '../../../components/dashboard/tabs/TabsWithHeader'

class NewArticle extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		return {
			tabs: [
				{
					name: 'Criar Aritigo',
					path: '/dashboard/new-article/basic-information',
					iconClassName: 'fa fa-envelope-open-o',
					header: {
						title: 'xxx1',
						description: 'yyy1'
					}
				},
				{
					name: 'Mais...',
					path: '/dashboard/new-article/more-details',
					iconClassName: 'fa fa-pie-chart',
					header: {
						title: 'xxx2',
						description: 'yyy2'
					}
				},
				{
					name: 'Fotos',
					path: '/dashboard/new-article/images',
					iconClassName: 'fa fa-eye',
					header: {
						title: 'xxx3',
						description: 'yyy3'
					}
				}
			]
		}
	}

    render() {
		const redirect = RedirectToIndexRoute(this.props);
		if(redirect) return redirect;

		return (
			<TabsWithHeader tabs = { this.state.tabs }>
				{ this.props.children } 
			</TabsWithHeader>
		);
    }
};

export default NewArticle;