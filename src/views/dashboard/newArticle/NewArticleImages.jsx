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
				<p>Carregue uma ou mais imagens</p>
					<img></img>
			</div>
		);
    }
};

export default NewArticleImages;