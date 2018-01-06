import React, {Component} from 'react';


class GeneralStatistics extends Component {
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
			<div className='row-visitas'>
			
				<div className='col-sm-3 col-xxs-6 visitas'>
					<p>1.119</p>
					<h3 className='p-light'>Total</h3>
				</div>
				<div className='col-sm-3 col-xxs-6 visitas'>
					<p>148</p>
					<h3 className='p-light'>M&ecirc;s</h3>
				</div>
			
				<div className='col-sm-3 col-xxs-6 visitas'>
					<p>52</p>
					<h3 className='p-light'>Semana</h3>
				</div>
				<div className='col-sm-3 col-xxs-6 visitas'>
					<p>12</p>
					<h3 className='p-light'>Hoje</h3>
				</div>
			</div>
		);
    }
};

export default GeneralStatistics;