import React, {Component} from 'react';


class NewArticleBasicData extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		return nextProps || {
		}
	}

    render() {
		return (
			<div>
				<div className='msg-box'>
				</div>
			</div>
		);
    }
};

export default NewArticleBasicData;