import React, {Component} from 'react';


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
		return (
			<div>
				<h1>Dashboard!</h1>
			</div>
		);
    }
};

export default Dashboard;