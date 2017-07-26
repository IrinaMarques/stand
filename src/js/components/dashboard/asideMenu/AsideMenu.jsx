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
			<nav>
				<ul>
					<li>
						<Link to="/dashboard/entry">Dashboard</Link>
					</li>
					<li>
						<Link to="/dashboard/new-article">Criar Anúncio</Link>
					</li>
					<li>
						<Link to="/dashboard">Gerir Anuncio</Link>
					</li>
					<li>
						<Link to="/dashboard">Mensagens</Link>
					</li>
					<li>
						<Link to="/dashboard">Utilizadores</Link>
					</li>
				</ul>
			</nav>
		);
    }
};

export default AsideMenu;