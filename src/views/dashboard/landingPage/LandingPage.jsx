import React, {Component} from 'react';
import Tabs from '../../../components/dashboard/tabs/Tabs'

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
			<div>
				<div className='main-header'>
					<h1 className='p-font'>Dashboard</h1>
					<p className='s-font'>Resumo de todas as actividades no website</p>
				</div>
				<Tabs>
					{ this.props.children() } 
				</Tabs>
			</div>
		);
    }
};

export default Landingpage;