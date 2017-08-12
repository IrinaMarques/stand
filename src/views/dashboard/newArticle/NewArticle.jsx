import React, {Component} from 'react';


class NewArticle extends Component {
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
				<h1>NewArticle!</h1>

                { this.props.children } 
			</div>
		);
    }
};

export default NewArticle;