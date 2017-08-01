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
			<header role='banner'>

                <nav className='tm-box' role='navigation'>
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <img src={require("dashboardImages/brand-50px.png")} alt="Logo"/>
                            </Link>   
                        </li>
                    	<li className='tm-btt'>  
                    		<a href='#'>
                    			<i className="fa fa-home" aria-hidden="true"></i>
                    			<h5>Home</h5>
                    		</a>
                    	</li>
                    	<li className='tm-btt'>
                    		<a href='#'>
                    			<i className="fa fa-power-off" aria-hidden="true"></i>
                    			<h5>Sair</h5>
                    		</a>
                    	</li>
                    	<li className='tm-btt'>
                    		<a href='#'>
                                <i className="fa fa-bullhorn" aria-hidden="true"></i>
                    			<h5>Notificações</h5>
                    		</a>
                    	</li>
                    	<li>
                            <img src={require("dashboardImages/img-avatar-50px.jpg")} alt="user image"/>
                            <p className='s-dgrey p-md'>Nome Sobrenome</p>
                        </li>
                    </ul>   
                </nav>

			</header>
		);
    }
};

export default TopMenu;