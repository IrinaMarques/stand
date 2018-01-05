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

                    <button className='text-control'>
                        <span className='text'>
                            Marca
                        </span>
                        <span className='dropdown'>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className='text-line'></div>
                    <ul className='drop-options'>
                        <li>opção 1</li>
                        <li>opção 2</li>
                        <li>opção 3</li>
                        <li>opção 4</li>
                        <li>opção 5</li>
                    </ul>
                    
                </div>
            </div>
        );
    }
};

export default Select;