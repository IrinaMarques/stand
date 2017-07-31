import React, {Component} from 'react';


class NewArticleMoreDetails extends Component {
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
				<h1>NewArticleMoreDetails!</h1>
			</div>
		);
    }
};

export default NewArticleMoreDetails;