import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';



class LastMessagesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
        const props    = this.props;
        const state    = props.state;
        const isUnread = (state === 'UNREAD');

		return {
            name      : props.name || '',
            message   : props.message || '',
            state     : state || '',
            stateClass: isUnread ? '' : 'old',
            stateTrans: isUnread && 'Novo' || '',
            date      : props.date || '',
        }
	}

    render() {
        const item = this.state;

		return (
            <li className='row msg-list old'>

                <div className='col-sm-3 col-xs-5 msg-nome'>
                    <p>{ item.name }</p>
                </div>

                <div className='col-sm-5 col-xs-1'>
                    <div className='row assunto'>
                        <div className='col-sm-12 col-xs-0 msg-assunto'>
                            <p>{ item.message }</p>
                        </div>
                    </div>
                </div>

                <div className='col-sm-2 col-xs-3 msg-data'>
                    <p>{ item.date }</p>
                </div>

                <div className='col-sm-2 col-xs-3 float-buttons'>
                    <div className='row msg-buttons'>
                        <div className='col-xs-6'>
                            <a href='#'>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className='col-xs-6'>
                            <a href='#'>
                                <i className="fa fa-reply" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
		);
    }
};

export default LastMessagesListItem;