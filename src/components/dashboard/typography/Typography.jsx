import React, {Component} from 'react';


class Typography extends Component {
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

                <div className='heading left'>
                    <h1 className='p-font'>Verdana h1 - 32px blue</h1>
                    <h2 className='p-font'>Verdana h2 - 26px blue</h2>
                    <h3 className='p-font'>Verdana h3 - 24px blue</h3>
                    <h4 className='p-font'>Verdana h4 - 22px blue</h4>
                    <h5 className='p-font'>Verdana h5 - 20px blue</h5>
                    <h6 className='p-font'>Verdana h6 - 18px blue</h6>
                </div>

                <br/>

                <div className='heading right'>
                    <h1 className='s-font'>Lucida Sans h1</h1>
                    <h2 className='s-font'>Lucida Sans h2</h2>
                    <h3 className='s-font'>Lucida Sans h3</h3>
                    <h4 className='s-font'>Lucida Sans h4</h4>
                    <h5 className='s-font'>Lucida Sans h5</h5>
                </div>
			</div>
		);
    }
};

export default Typography;