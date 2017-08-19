import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const buildTab = (coll) => {
    return coll.map((item, index) => (
        <li className="tabs-item" key={ index }>
            <NavLink 
                to              = { item.path }
                activeClassName = "selected"
                className       = "tabs-link"
            >
                <span>{ item.name }</span>
                <i className={ item.iconClassName } aria-hidden="true"></i>
            </NavLink>
        </li>
    ))
};

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		return {
            tabs: this.props.list || []
		}
	}

    render() {
		return (
			<div className='tabs-container'>
                <div className="tabs-header">
                    <ul className="tabs">
                        { buildTab(this.state.tabs) }
                    </ul>
                </div>
                <div className="tabs-content">
                    { this.props.children }
                </div>
            </div>
		);
    }
};

export default Tabs;