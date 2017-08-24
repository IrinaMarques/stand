import React, {Component} from 'react';

const buildOptions = (coll, callback) => {
    return coll.map((item, index) => (
        <li className="dropdown-option" key={ index }>
            <a 
                href    = "javascript: void(0)" 
                id      = { item.value } 
                onClick = { callback }
            >
                { item.value }
            </a>
        </li>
    ))
};

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
        const props   = nextProps || this.props;
        const options = props.options;
        const value   = props.value;
		return {
            options       : options || [],
            value         : value || '',
            id            : props.id || '',
            labelClassName: props.labelClassName || '',
            labelText     : props.labelText || '',
            placeholder   : props.placeholder || '',
            selection     : this.findValue(),
            menuIsOpen    : props.menuIsOpen || false
		}
    }
    
    
    findValue(val) {
        const props   = this.props || {};
        const state   = this.state || {};
        const options = state.options || props.options;
        const value   = val || state.value || props.value;
        
        return value && options.filter(option => option.value === value)[0].value || props.placeholder || options[0].value
    }
    
    _toggleMenu(evt) {
        return this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    }

    _selectOption(evt) {
        const value = evt.currentTarget.id;

        return this.setState({
            menuIsOpen: !this.state.menuIsOpen,
            value: value,
            selection: this.findValue( value )
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
        const state = this.state;

		return (
            <div className = 'drop' >
                <label htmlFor={ state.id }>
                    <p className={state.labelClassName}>{ state.labelText }</p>
                </label>
                <button 
                    htmlFor       = { state.id }
                    type          = 'button' 
                    className     = 'dropdown-toggle error done' 
                    data-toggle   = 'dropdown' 
                    aria-haspopup = 'true' 
                    aria-expanded = 'false'
                    onClick       = { evt => this._toggleMenu(evt) }
                    onBlur        = { evt => this._close(evt) }
                >
                    <span className='text'>{ state.selection }</span>
                    <i className="fa fa-sort-desc" aria-hidden="true"></i>
                </button>
                <ul 
                    className = 'dropdown-menu' 
                    style = {{display : state.menuIsOpen && 'block' || 'none'}}
                >
                    { buildOptions( state.options, (evt => this._selectOption(evt)) ) }
                </ul>
            </div>
		);
    }
};

export default Dropdown;