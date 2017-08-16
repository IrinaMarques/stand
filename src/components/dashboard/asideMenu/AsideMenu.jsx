import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class AsideMenu extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		const props = nextProps || this.props;
		return {
			isOpen   : props.isOpen || false,
			className: props.isOpen ? 'sm-box on' : 'sm-box'
		}
	}

	componentWillReceiveProps(nextProps, nextState) {
		return this.setState(
			this.buildState(nextProps))
	}

    render() {
		return (
			<nav className={ this.state.className } role='navigation'>
				<ul>
					<li>
						<NavLink 
							to="/dashboard/entry"
							activeClassName="selected"
						>
							<i className="fa fa-desktop" aria-hidden="true"></i>
							<h5>Dashboard</h5>
						</NavLink>
					</li>
					<li>
						<NavLink 
							to="/dashboard/new-article"
							activeClassName="selected"
						>
							<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							<h5>Criar Anúncio</h5>
						</NavLink>
					</li>
					<li>
						<NavLink 
							to              = "/dashboard/manage-article"
							className       = 'disabled'
							activeClassName = "selected"
							isActive        = { () => false }
						>
							<i className="fa fa-retweet" aria-hidden="true"></i>
							<h5>Gerir Anuncio</h5>
						</NavLink>
					</li>
					<li>
						<NavLink 
							to              = "/dashboard/messages"
							className       = 'disabled'
							activeClassName = "selected"
							isActive        = { () => false }
						>
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<h5>Mensagens</h5>
						</NavLink>
					</li>
					<li>
						<NavLink 
							to              = "/dashboard/users"
							className       = 'disabled'
							activeClassName = "selected"
							isActive        = { () => false }
						>
							<i className="fa fa-users" aria-hidden="true"></i>
							<h5>Utilizadores</h5>
						</NavLink>
					</li>
				</ul>
			</nav>

		);
    }
};

export default AsideMenu;