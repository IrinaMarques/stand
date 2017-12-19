import React, { Component } from 'react';

import TopMenu from '../topMenu/TopMenu';
import Banner from '../banner/Banner';
import Search from '../search/Search';


class Header extends Component {
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
            <header role='banner'>
                <TopMenu />
                <Banner />
                <Search />
            </header>
        );
    }
};

export default Header;