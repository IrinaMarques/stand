import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Tabs extends Component {
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
			<div className='tabs-container'>
                <div className="tabs-header">
                    <ul className="tabs">
                        <li className="tabs-item">
                            <NavLink 
                                to="/dashboard/entry/last-messages"
                                activeClassName="selected"
                                className="tabs-link"
                            >
                                Mensagens
                            </NavLink>
                        </li>
                        <li className="tabs-item">
                            <NavLink 
                                to="/dashboard/entry/general-statistics"
                                activeClassName="selected"
                                className="tabs-link"
                            >
                                Visitas
                            </NavLink>
                        </li>
                        <li className="tabs-item">
                            <NavLink 
                                to="/dashboard/entry/articles-statistics"
                                activeClassName="selected"
                                className="tabs-link"
                            >
                                Visualizações
                            </NavLink>
                        </li>
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