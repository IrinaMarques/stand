import React, {Component} from 'react';


class Button extends Component {
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
			<button className={'btt-footer ' + this.props.className }>
				<h3>Próximo</h3>
				<i className="fa fa-angle-right" aria-hidden="true"></i>
			</button>	
		);
    }
};

export default Button;