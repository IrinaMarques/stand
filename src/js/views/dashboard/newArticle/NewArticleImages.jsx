import React, {Component} from 'react';


class NewArticleImages extends Component {
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
				<h1>NewArticleImages!</h1>
			</div>
		);
    }
};

export default NewArticleImages;