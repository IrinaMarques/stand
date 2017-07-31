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

                <nav className='tm-box'>
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <img src={require("dashboardImages/brand.png")} alt="Logo"/>
                            </Link>   
                        </li>
                    	<li className='tm-btt'>  
                    		<a href='#'>
                    			<i className="fa fa-home" aria-hidden="true"></i>
                    			<h3>Home</h3>
                    		</a>
                    	</li>
                    	<li className='tm-btt'>
                    		<a href='#'>
                    			<i className="fa fa-power-off" aria-hidden="true"></i>
                    			<h3>Sair</h3>
                    		</a>
                    	</li>
                    	<li className='tm-btt'>
                    		<a href='#'>
                                <i className="fa fa-bullhorn" aria-hidden="true"></i>
                    			<h3>Notificações</h3>
                    		</a>
                    	</li>
                    	<li>
                            <img src="" alt="user image"/>
                            <p>Nome Sobrenome</p>
                        </li>
                    </ul>   
                </nav>

			</header>
		);
    }
};

export default TopMenu;