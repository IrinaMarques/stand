import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TopMenu extends Component {
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
			<header>
				<Link to="/dashboard">
                    <img src="" alt="Logo"/>
                </Link>
			</header>
		);
    }
};

export default TopMenu;