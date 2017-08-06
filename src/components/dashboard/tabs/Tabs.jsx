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
			<div>
                <div className="tabs-header">
                    <ul>
                        <li>
                            <NavLink 
                                to="/dashboard/entry/last-messages"
                                activeClassName="selected"
                            >
                                Últimas mensagens
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/dashboard/entry/general-statistics"
                                activeClassName="selected"
                            >
                                Número de visitas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/dashboard/entry/articles-statistics"
                                activeClassName="selected"
                            >
                                Mais visualizados
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