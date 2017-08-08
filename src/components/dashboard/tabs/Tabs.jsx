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
                                <span>Mensagens</span>
                                <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                        <li className="tabs-item">
                            <NavLink 
                                to="/dashboard/entry/general-statistics"
                                activeClassName="selected"
                                className="tabs-link"
                            >
                                <span>Visitas</span>
                                <i className="fa fa-pie-chart" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                        <li className="tabs-item">
                            <NavLink 
                                to="/dashboard/entry/articles-statistics"
                                activeClassName="selected"
                                className="tabs-link"
                            >
                                <span>Visualizações</span>
                                <i className="fa fa-eye" aria-hidden="true"></i>
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