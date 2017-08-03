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
						<Link to="/dashboard/entry">
							<i className="fa fa-desktop" aria-hidden="true"></i>
							<h5>Dashboard</h5>
						</Link>
					</li>
					<li>
						<Link to="/dashboard/new-article">
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<h5>Criar Anúncio</h5>
						</Link>
					</li>
					<li>
						<Link to="/dashboard">
							<i className="fa fa-retweet" aria-hidden="true"></i>
							<h5>Gerir Anuncio</h5>
						</Link>
					</li>
					<li>
						<Link to="/dashboard">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<h5>Mensagens</h5>
						</Link>
					</li>
					<li>
						<Link to="/dashboard">
							<i className="fa fa-users" aria-hidden="true"></i>
							<h5>Utilizadores</h5>
						</Link>
					</li>
				</ul>
			</nav>

		);
    }
};

export default AsideMenu;