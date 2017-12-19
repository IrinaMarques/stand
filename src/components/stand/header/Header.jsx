import React, { Component } from 'react';

import TopMenu from '../topMenu/TopMenu';
import Banner from '../banner/Banner';
import Search from '../search/Search';

const openClassName = 'nav-menu-open';
const closeClassName = 'nav-menu-close';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = this.buildState();
        return this;
    }

    buildState(nextProps) {
        return {
            menuIsOpen: false,
            className: closeClassName
        }
    }

    toggle() {
        const newState = !this.state.menuIsOpen;

        this.setState({
            menuIsOpen: newState,
            className: newState && openClassName || closeClassName
        });
        return this;
    }

    render() {
        const { state } = this;
        const menuIsOpen = state.menuIsOpen;

        return (
            <header role='banner' className={state.className}>
                <TopMenu onChange={() => this.toggle()} menuIsOpen={menuIsOpen} />
                <Banner menuIsOpen={menuIsOpen} />
                <Search menuIsOpen={menuIsOpen} />
            </header>
        );
    }
};

export default Header;