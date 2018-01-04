import React, { Component } from 'react';

class Range extends Component {
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
        const {props} = this;

        return (
            <div className={`range ${props.className}`}>
                <div className='label'></div>
                <div className='line'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='value'></div>
            </div>
        );
    }
};

export default Range;