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
                <ul>
                    <li>
                        <Link to="/stand/entry">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Catalogo</Link>
                    </li>
                    <li>
                        <Link to="#">Sobre nós</Link>
                    </li>
                    <li>
                        <Link to="#">serviços</Link>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default TopMenu;