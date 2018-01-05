import React, { Component } from 'react';

class Radio extends Component {
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
            <div className='radio-group'>
                <input type='radio' id='new' name='btt' value='new' />
                <label htmlFor='new'> Novos </label>

                <input type='radio' id='used' name='btt' value='used' />
                <label htmlFor='used'> Usado </label>

                <input type='radio' id='all' name='btt' value='all' />
                <label htmlFor='all'> Todos </label>
            </div>
        );
    }
};

export default Radio;