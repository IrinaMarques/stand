import React, { Component } from 'react';

class NewProducts extends Component {
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
                NewProducts
            </div>
        );
    }
};

export default NewProducts;