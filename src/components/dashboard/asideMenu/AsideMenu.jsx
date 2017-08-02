import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AsideMenu extends Component {
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
			<nav className='sm-box' role='navigation'>
				<ul>
					<li>
						<div className='side-button'>
							<i class="fa fa-bars" aria-hidden="true"></i>
						</div> 
					</li>
					<li>
						<Link to="/dashboard/entry">
							<i class="fa fa-desktop" aria-hidden="true"></i>
							<h5>Dashboard</h5>
						</Link>
					</li>
					<li>
						<Link to="/dashboard/new-article">
							
							<h5>Criar Anúncio</h5>
						</Link>
					</li>
					<li>
						<Link to="/dashboard">
							<i class="fa fa-retweet" aria-hidden="true"></i>
							<h5>Gerir Anuncio</h5>
						</Link>
					</li>
					<li>
						<Link to="/dashboard">
							<h5>Mensagens</h5>
						</Link>
					</li>
					<li>
						<Link to="/dashboard">
							<i class="fa fa-users" aria-hidden="true"></i>
							<h5>Utilizadores</h5>
						</Link>
					</li>
				</ul>
			</nav>
		);
    }
};

export default AsideMenu;