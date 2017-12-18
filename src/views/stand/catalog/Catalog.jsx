import React, { Component } from 'react';

class Catalog extends Component {
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
                Catalog
            </div>
        );
    }
};

export default Catalog;