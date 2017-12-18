import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = this.buildState();
        return this;
    }

    buildState(nextProps) {
        return {
        }
    }

    render() {
        return (
  
            <nav role='navigation'>
                <div className='row lp'>
                    <div className='col-md-4 col-sm-12'>
                    </div>
                    <ul className='col-md-8 col-sm-12'>
                        <li className='nav-menu'>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </li>
                        <li className=' col-sm-3 col-xs-3 col-xxs-12'>
                            <Link to="/stand/entry">Home</Link>
                        </li>
                        <li className=' col-sm-3 col-xs-3 col-xxs-12'>
                            <Link to="#">Catalogo</Link>
                        </li>
                        <li className=' col-sm-3 col-xs-3 col-xxs-12'>
                            <Link to="#">Sobre nós</Link>
                        </li>
                        <li className=' col-sm-3 col-xs-3 col-xxs-12'>
                            <Link to="#">Serviços</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default TopMenu;