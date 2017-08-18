import React, {Component} from 'react';


class NewArticle extends Component {
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
		return (
			<div>
				<div className='main-header'>
					<h1 className='p-font'>Criar Anúncio</h1>
					<p className='s-font'>Campos de preenchimento obrigatório.</p>
				</div>

                { this.props.children } 
			</div>
		);
    }
};

export default NewArticle;