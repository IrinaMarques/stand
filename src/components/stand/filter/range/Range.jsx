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
            <div className={`range-group ${props.className}`}>

                <h4 className='range-label'>
                    {props.label}
                </h4>

                <div className='range-wrapper'>
                    <div className='range-line'>
                        <div className='ball'>
                            <div className='value'></div>
                        </div>
                        <div className='ball'>
                            <div className='value'></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default Range;