import React, {Component} from 'react';


class NumberInput extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
        const props = this.props;
		return {
            id            : props.id || '',
            placeholder   : props.placeholder || '',
            value         : props.value || null,
            min           : props.min || undefined,
            max           : props.max || undefined,
            toFixed       : props.toFixed || 0,
            labelText     : props.labelText || '',
            labelClassName: props.labelClassName || '',
            errorClassName: props.errorClassName || '',
            doneClassName : props.doneClassName || '',
            classNameState: props.classNameState || ''
		}
    }

    getDefaultValue() {
        return parseFloat(this.state.value || this.state.placeholder) || 0;
    }

    getLimitedValue(value) {
        const state = this.state;
        
        if(state.min !== undefined && value < state.min) {
            return this.getToFixedValue(state.min);
        };

        if(state.max !== undefined && value > state.max) {
            return this.getToFixedValue(state.max);
        };

        return this.getToFixedValue(value);
    }

    getToFixedValue(value) {
        return this.state.toFixed ? value.toFixed(this.state.toFixed) : value;
    }

    _add(evt) {
        let value = this.getDefaultValue();

        return this.setState({
            value: this.getLimitedValue( ++value )
        });
    }

    _reduce(evt) {
        let value = this.getDefaultValue();

        return this.setState({
            value: this.getLimitedValue( --value )
        });
    }

    render() {
        const state = this.state;

		return (
            <div className={`input-wrapper number-input ${state.classNameState}`} >
                <label htmlFor={ state.id }>
                    <p className={state.labelClassName}>{ state.labelText }</p>
                </label>
                <div className="input-inner-wrapper">
                    <input type='number' name='' id={ state.id } placeholder={ state.placeholder } value={ state.value }/>
                    <button className='number-input-btn input-btn-asc' onClick={ evt => this._add(evt) }>
                        <i className="fa fa-sort-asc" aria-hidden="true"></i>
                    </button>
                    <button className='number-input-btn input-btn-desc' onClick={ evt => this._reduce(evt) }>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </button>
                </div>
                    
            </div>
		);
    }
};

export default NumberInput;