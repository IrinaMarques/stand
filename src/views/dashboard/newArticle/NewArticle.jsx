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
					name: 'Dados Básicos',
					path: '/dashboard/new-article/basic-information',
					iconClassName: 'fa fa-envelope-open-o',
					header: {
						title: 'Criar Anúncio',
						description: 'Campos de preenchimento obrigatório.'
					}
				},
				{
					name: 'Observações e Extras',
					path: '/dashboard/new-article/more-details',
					iconClassName: 'fa fa-pie-chart',
					header: {
						title: 'Criar Anúncio',
						description: 'Informação relevante sobre o produto.'
					}
				},
				{
					name: 'Imagens',
					path: '/dashboard/new-article/images',
					iconClassName: 'fa fa-eye',
					header: {
						title: 'Criar Anúncio',
						description: 'Uma imagem obrigatória, restantes opcionais.'
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