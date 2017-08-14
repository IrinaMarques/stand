import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const buildCols = (coll) => {
    return coll.map((item, index) => {
        if(item.label) {
            return (
                <div key={ index } className={ item.mainClassName }>
                    <div className={ item.innerClassName }>
                        <h6>{ item.label }</h6>
                        <i className={ item.iconClassName } aria-hidden="true"></i>
                    </div>
                </div>
            );
        };

        if(item.text) {
            return (
                <div key={ index } className={ item.mainClassName }> 
                    <p className={ item.innerClassName }>{ item.text }</p>
                </div>
            );
        }
        
        return null;
    });
};

const buildBtns = (coll) => {
    return coll.map((item, index) => {
        return (
            <div key={ index } className={ item.mainClassName }>
                <a href='#'>
                    <i className={ item.iconClassName } aria-hidden="true"></i>
                </a>
            </div>
        );
    });
};

class LastMessagesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		return {
            cols: this.props.cols || [],
            btns: this.props.btns || []
        }
	}

    render() {
		return (
            <li className='row msg-list'>

                { buildCols(this.state.cols) }

                <div className='col-md-2 msg-buttons'>
                   
                    { buildBtns(this.state.btns) }
                </div>
            </li>
		);
    }
};

export default LastMessagesListItem;