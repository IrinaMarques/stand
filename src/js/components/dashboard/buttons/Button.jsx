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
			<button>Button...</button>
		);
    }
};

export default Button;