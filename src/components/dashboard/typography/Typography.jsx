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
                <h2>*Strong Headings*</h2>
                <div>
                    <h1 className='p-font'>Verdana h1 - 32px blue</h1>
                    <h2 className='p-font'>Verdana h2 - 26px blue</h2>
                    <h3 className='p-font'>Verdana h3 - 24px blue</h3>
                    <h4 className='p-font'>Verdana h4 - 22px blue</h4>
                    <h5 className='p-font'>Verdana h5 - 20px blue</h5>
                    <h6 className='p-font'>Verdana h6 - 18px blue</h6>
                </div>
                <h2>*Soft Headings*</h2>
                <div>
                    <h1 className='p-light'>Verdana h1 - 32px grey</h1>
                    <h2 className='p-light'>Verdana h2 - 26px grey</h2>
                    <h3 className='p-light'>Verdana h3 - 24px grey</h3>
                    <h4 className='p-light'>Verdana h4 - 22px grey</h4>
                    <h5 className='p-light'>Verdana h5 - 20px grey</h5>
                    <h6 className='p-light'>Verdana h6 - 18px grey</h6>
                </div>

                <h3 className='ui'>Paragraphs</h3>
                <h2>Normal Text</h2>
                <p className='s-font'><span className='ui_strong'>Lucida Sans 18px blue</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada.</p>               
                <p className='s-font p-md'><span className='ui_strong'>Lucida Sans 16px blue medium</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada.</p>                
                <p className='s-font p-sm'><span className='ui_strong'>Lucida Sans 14px blue small</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada.</p>    
                
                <h2>Nomal Text</h2>
                <p className='s-dgrey'><span className='ui_strong'>Lucida Sans 18px grey</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>                    
                <p className='s-dgrey p-md'><span className='ui_strong'>Lucida Sans 16px grey medium</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>                
                <p className='s-dgrey p-sm'><span className='ui_strong'>Lucida Sans 14px grey small</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>    
                
                <h2>Helper Text</h2>
                <p className='s-grey'><span className='ui_strong'>Lucida Sans 18px grey</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>    
                <p className='s-grey p-md'><span className='ui_strong'>Lucida Sans 16px grey medium</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>    
                <p className='s-grey p-sm'><span className='ui_strong'>Lucida Sans 14px grey small</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>    
                
                <h2>*Light Grey*</h2>
                <p className='s-light'><span className='ui_strong'>Lucida Sans 18px light grey</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>    
                <p className='s-light p-md'><span className='ui_strong'>Lucida Sans 16px light grey medium</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>    
                <p className='s-light p-sm'><span className='ui_strong'>Lucida Sans 14px light grey small</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. </p>    

                <br/>
			</div>
		);
    }
};

export default Typography;