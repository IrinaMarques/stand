import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = this.buildState();
        return this;
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.buildState(nextProps));
        return this;
    }

    buildState(nextProps) {
        const props = nextProps || this.props;
        return {
            open: props.menuIsOpen || false
        }
    }

    render() {
        const { open } = this.state;

        return (
  
            <nav role='navigation'>
                <div className='row area-color'>
                    
                    <ul className='col-md-8 col-md-offset-4 col-sm-12'>
                        <li className='nav-menu col-xs-12'>
                            <button onClick={this.props.onChange}>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </button>
                        </li>
                        <li className='col-sm-3 col-xxs-12'>
                            <Link to="/stand/entry">Home</Link>
                        </li>
                        <li className='col-sm-3 col-xxs-12'>
                            <Link to="#">Catalogo</Link>
                        </li>
                        <li className='col-sm-3 col-xxs-12'>
                            <Link to="#">Sobre nós</Link>
                        </li>
                        <li className='col-sm-3 col-xxs-12'>
                            <Link to="#">Serviços</Link>
                        </li>
                    </ul>

                    <div className='top-menu-image-container'>
                    </div>
                </div>
            </nav>
        );
    }
};

export default TopMenu;