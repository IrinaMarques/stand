import React, { Component } from 'react';

class Select extends Component {
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
            <div className='select-group'>
                <div className='text-group'>
                    <div className='btt-text'>
                        <button className='text-control'>Selecione</button>
                        <div className='text-line'></div>
                        <ul className='dropdown'>
                            <li>hhh</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Select;