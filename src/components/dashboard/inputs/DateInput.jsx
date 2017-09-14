import React, {Component} from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';


class DateInput extends Component {
	constructor(props) {
        super(props);
        moment.locale('pt');
        this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
        const props = this.props;
		return {
            id            : props.id || '',
            placeholder   : props.placeholder || '',
            labelText     : props.labelText || '',
            labelClassName: props.labelClassName || '',
            errorClassName: props.errorClassName || '',
            doneClassName : props.doneClassName || '',
            classNameState: props.classNameState || '',
            startDate     : moment()
		}
    }

    _handleChange(date) {
        console.log(date)
        this.setState({
            startDate: date
        });
    }

    render() {
        const state = this.state;

		return (
            <div className={`input-wrapper date-input ${state.classNameState === state.errorClassName ? state.errorClassName : state.doneClassName}`} >
                <label htmlFor={ state.id }>
                    <p className={state.labelClassName}>{ state.labelText }</p>
                </label>
                <DatePicker
                    id={ state.id }
                    placeholder={ state.placeholder }
                    selected={this.state.startDate}
                    dateFormat="DD/MM/YYYY"
                    onChange={ date => this._handleChange(date) }
                />
            </div>
		);
    }
};

export default DateInput;