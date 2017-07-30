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

                <div className='tm-box'>
                	<div className='logo'></div>
                	<ul>
                		<li>
                			<a href='#'>
                				<i className="fa fa-home" aria-hidden="true"></i>
                				<h3>Home</h3>
                			</a>
                		</li>
                		<li>
                			<a href='#'>
                				<i className="fa fa-power-off" aria-hidden="true"></i>
                				<h3>Sair</h3>
                			</a>
                		</li>
                		<li>
                			<a href='#'>
                				<h3>Notificações</h3>
                			</a>
                		</li>
                	</ul>
                	<div className='tm-user'></div>
                </div>

			</header>
		);
    }
};

export default TopMenu;