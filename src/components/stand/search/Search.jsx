import React, { Component } from 'react';


class Search extends Component {
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
            <div>
               <input type="text"/>
            </div>
        );
    }
};

export default Search;