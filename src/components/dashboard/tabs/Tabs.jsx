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
                    <ul className='tabs tabs-nav'>
                        <li className='tabs-item'>
                            <a className='tabs-link p-font' href="/dashboard/entry/last-messages">
                                Mensagens
                            </a>
                        </li>
                        <li className='tabs-item'>
                            <a className='tabs-link p-font' href="/dashboard/entry/general-statistics">
                                Visitas
                            </a>
                        </li>
                        <li className='tabs-item'>
                            <a className='tabs-link p-font' href="/dashboard/entry/articles-statistics">
                                Visualizações
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