import React, { Component } from 'react';

class Home extends Component {
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
                Home
            </div>
        );
    }
};

export default Home;