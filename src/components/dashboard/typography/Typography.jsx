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
                <h3>Strong Headings</h3>
                <div>
                    <h1 className='p-font'>Verdana h1 - 32px blue</h1>
                    <h2 className='p-font'>Verdana h2 - 26px blue</h2>
                    <h3 className='p-font'>Verdana h3 - 24px blue</h3>
                    <h4 className='p-font'>Verdana h4 - 22px blue</h4>
                    <h5 className='p-font'>Verdana h5 - 20px blue</h5>
                    <h6 className='p-font'>Verdana h6 - 18px blue</h6>
                </div>
                <br/>
                <h3>Light Headings</h3>
                <div>
                    <h1 className='p-light'>Verdana h1 - 32px grey</h1>
                    <h2 className='p-light'>Verdana h2 - 26px grey</h2>
                    <h3 className='p-light'>Verdana h3 - 24px grey</h3>
                    <h4 className='p-light'>Verdana h4 - 22px grey</h4>
                    <h5 className='p-light'>Verdana h5 - 20px grey</h5>
                    <h6 className='p-light'>Verdana h6 - 18px grey</h6>
                </div>

                <br/>

                <h3>Text - Strong</h3>
                <h3 className='s-font'>Lucida Sans 18px blue</h3>
                <p className='s-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>
                
                <h3 className='s-font p-md'>Lucida Sans 16px blue medium</h3>
                <p className='s-font p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>
                
                <h3 className='s-font p-sm'>Lucida Sans 14px blue small</h3>
                <p className='s-font p-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
                
                <h3>Text - Dark Grey</h3>
                <h3 className='s-dgrey'>Lucida Sans 18px grey</h3>
                <p className='s-dgrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
                
                <h3 className='s-dgrey p-md'>Lucida Sans 16px grey medium</h3>
                <p className='s-dgrey p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
            
                <h3 className='s-dgrey p-sm'>Lucida Sans 14px grey small</h3>
                <p className='s-dgrey p-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
                
                <h3>Text - Grey</h3>
                <h3 className='s-grey'>Lucida Sans 18px grey</h3>
                <p className='s-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
                
                <h3 className='s-grey p-md'>Lucida Sans 16px grey medium</h3>
                <p className='s-grey p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
            
                <h3 className='s-grey p-sm'>Lucida Sans 14px grey small</h3>
                <p className='s-grey p-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
                
                <h3>Text - Light Grey</h3>
                <h3 className='s-light'>Lucida Sans 18px light grey</h3>
                <p className='s-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
                
                <h3 className='s-light p-md'>Lucida Sans 16px light grey medium</h3>
                <p className='s-light p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
            
                <h3 className='s-light p-sm'>Lucida Sans 14px light grey small</h3>
                <p className='s-light p-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat a magna eu malesuada. Vestibulum pellentesque, orci in laoreet molestie, quam tortor facilisis neque, a elementum sapien risus nec ante. </p>    
                


                <br/>
			</div>
		);
    }
};

export default Typography;