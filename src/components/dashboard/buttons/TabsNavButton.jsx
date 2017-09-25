import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const iconSideHandler = (side, state, props) => (side === 'left' && (
	<div className="tabs-nav-btn-inner-wrapper">
		<span className='btn-text tabs-nav-btn-coll'>{props.children}</span>
		<i className={`btn-icon tabs-nav-btn-coll ${state.iconClassName}`} aria-hidden="true"></i>
	</div> ) || (
	<div className="tabs-nav-btn-inner-wrapper">
		<i className={`btn-icon tabs-nav-btn-coll ${state.iconClassName}`} aria-hidden="true"></i>
		<span className='btn-text tabs-nav-btn-coll'>{props.children}</span>
	</div>
))

class TabsNavButton extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		const props = this.props;
		return nextProps || {
			src: props.src || '#',
			iconSide: props.iconSide || '',
			iconClassName: props.iconClassName || ''
		}
	}

    render() {
		const state = this.state;
		return (
			<Link className='tabs-nav-btn' to={state.src}>
				{ iconSideHandler(state.iconSide, state, this.props) }
			</Link>
		);
    }
};

export default TabsNavButton;