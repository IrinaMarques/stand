import React, { Component } from 'react';

class Filter extends Component {
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
            <div className='filtro-test'>
                ola
            </div>
        );
    }
};

export default Filter;