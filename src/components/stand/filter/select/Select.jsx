import React, { Component } from 'react';

const buildOptions = (coll, callback) => {
    return coll.map((item, index) => (
        <li className="drop-option" key={index}>
            <a
                href="javascript: void(0)"
                id={item.value}
                onClick={callback}
            >
                {item.value}
            </a>
        </li>
    ))
};

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = this.buildState();
        return this;
    }

    buildState(nextProps) {
        const props = nextProps || this.props;
        const options = props.options;
        const value = props.value;
        return {
            options: options || [],
            value: value || '',
            id: props.id || '',
            placeholder: props.placeholder || '',
            selection: this.findValue(),
            menuIsOpen: props.menuIsOpen || false
        }
    }

    findValue(val) {
        const props = this.props || {};
        const state = this.state || {};
        const options = state.options || props.options;
        const value = val || state.value || props.value;

        return value && options.filter(option => option.value === value)[0].value || props.placeholder || options[0].value
    }

    _toggleMenu(evt) {
        return this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    }

    _selectOption(evt) {
        const value = evt.currentTarget.id;
        console.log(value)
        return this.setState({
            menuIsOpen: !this.state.menuIsOpen,
            value: value,
            selection: this.findValue(value)
        });
    }

    _close(evt) {
        return setTimeout(() => {
            return this.setState({
                menuIsOpen: false
            });
        }, 150);
    }

    render() {
        const {state} = this;

        return (
            <div className='select-group'>
                <div className={`text-group ${state.menuIsOpen && 'open' || ''}`}>

                    <button 
                        className='text-control'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                        onClick={evt => this._toggleMenu(evt)}
                        onBlur={evt => this._close(evt)}
                    >
                        <span className='text'>
                            {state.selection}
                        </span>
                        <span className='dropdown'>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <ul className='drop-options'>
                        {buildOptions(state.options, (evt => this._selectOption(evt)))}
                    </ul>
                    
                </div>
            </div>
        );
    }
};

export default Select;