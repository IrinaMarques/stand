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
				<h1>NewArticleBasicData!</h1>
			</div>
		);
    }
};

export default NewArticleBasicData;