import React, {Component} from 'react';


class Landingpage extends Component {
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
			<div className='main-header'>
				<h1 className='p-font'>Dashboard</h1>
				<p className='s-font'>Resumo de todas as actividades no website</p>

                { this.props.children() } 
			</div>
		);
    }
};

export default Landingpage;