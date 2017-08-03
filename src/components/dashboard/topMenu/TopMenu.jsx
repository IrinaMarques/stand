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

                    <div className='brand'>
                        <div className='img-brand'>
                            <Link to="/dashboard">
                                <img src={require("dashboardImages/brand-50px.png")} alt="Logo"/>
                            </Link>
                        </div>
                        <div className='menu-button'>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div>
                        <ul>
                    	   <li>  
                        		<a href='#'>
                        			<i className="fa fa-home" aria-hidden="true"></i>
                        			<h5>Home</h5>
                        		</a>
                        	</li>
                        	<li>
                        		<a href='#'>
                        			<i className="fa fa-power-off" aria-hidden="true"></i>
                        			<h5>Sair</h5>
                        		</a>
                        	</li>
                        	<li>
                        		<a href='#'>
                                    <i className="fa fa-bell" aria-hidden="true"></i>
                        			<h5>Alertas</h5>
                        		</a>
                        	</li>
                    	</ul>
                    </div>

                    <div>   
                        <img src={require("dashboardImages/img-avatar-50px.jpg")} alt="user image"/>
                        <p className='s-dgrey p-md'>Nome Sobrenome</p>
                    </div>   
                </nav>

			</header>
		);
    }
};

export default TopMenu;