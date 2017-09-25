import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TabsNavButton extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		const props = this.props;
		return nextProps || {
			title: props.title | ''
		}
	}

    render() {
		const state = this.state;

		return (
			<Link className='footer-btn' to='/dashboard/new-article/more-details'>
				<p className='btn-text col-xs-9'>{this.props.children}</p>
				<i className="btn-icon col-xs-3 fa-lg fa fa-chevron-right" aria-hidden="true"></i>
			</Link>
		);
    }
};

export default TabsNavButton;