import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
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
            <footer>
                <ul>
                    <li>
                        <Link to="/stand/entry">Home</Link>
                    </li>
                    <li>
                        <Link to="/stand/new-products">new-products</Link>
                    </li>
                    <li>
                        <Link to="/stand/opportunities">opportunities</Link>
                    </li>
                </ul>
            </footer>
        );
    }
};

export default Footer;