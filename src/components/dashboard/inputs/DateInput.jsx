import React, {Component} from 'react';


class DateInput extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
        const props = this.props;
		return {
            id         : props.id,
            placeholder: props.placeholder,
            labelText  : props.labelText,
            errorClassName: props.errorClassName,
            doneClassName: props.doneClassName,
            classNameState: props.classNameState
		}
    }

    render() {
        const state = this.state;

		return (
            <div className={`text-input-wrapper ${state.classNameState === state.errorClassName ? state.errorClassName : state.doneClassName}`} >
                <label htmlFor={ state.id }>
                    <p>{ state.labelText }</p>
                </label>
                <input type='number' name='' id={ state.id } placeholder={ state.placeholder } />
            </div>
		);
    }
};

export default DateInput;