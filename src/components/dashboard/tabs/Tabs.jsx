import React, {Component} from 'react';


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
                            <a href="/dashboard/entry/last-messages">
                                Últimas mensagens
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/entry/general-statistics">
                                Número de visitas
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/entry/articles-statistics">
                                Mais visualizados
                            </a>
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