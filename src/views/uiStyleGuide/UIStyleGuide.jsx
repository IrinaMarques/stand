import React, {Component} from 'react';

import Typography from '../../components/dashboard/typography/Typography';

require('./UIStyleGuide.scss');

class UIStyleGuide extends Component {
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
			<div className='box'>
				<div className='box-menu'>
					<h1>UI Style Guide!</h1>
					<ul>
						<li>Backgrounds</li>
						<li>Colors</li>
						<li>Typography</li>
						<li>Forms</li>
						<li>Iconography</li>
						<li>Buttons</li>
					</ul>
				</div>	

				<h3>Backgrounds</h3>
				<hr/>
				<div className='square-containers '>
					<div className='white square-none'></div>
				</div>

				<h3>Colors</h3>
				<hr/>

					<div className='square-containers'>
						<div className='white square-none'></div>
					</div>

					<div className='square-containers'>
						<div className='brown square'></div>
						<div className='light-brown sm-square'></div>
						<div className='dark-brown sm-square'></div>
					</div>
					
					<div className='square-containers'>
						<div className='blue square'></div>
						<div className='light-blue sm-square'></div>
						<div className='dark-blue sm-square'></div>
					</div>

					<div className='square-containers'>
						<div className='grey square'></div>
						<div className='light-grey sm-square'></div>
						<div className='dark-grey sm-square'></div>
					</div>

					<div className='square-containers'>
						<div className='red square'></div>
						<div className='light-red sm-square'></div>
						<div className='dark-red sm-square'></div>
					</div>

				<h3>Typography</h3>
				<hr/>

				<Typography />

				

				<h3>Forms</h3>
				<hr/>
				<input type='text' value='default'/>
				<input type="" name=""/>


				<h3>Iconography</h3>
				<hr/>

				<h3>Buttons</h3>
				<hr/>

				<div className='btt'>
					<button className='btn-lg btn-grey'>
						<p>Pesquisar</p>
						<i className="fa fa-search" aria-hidden="true"></i>
					</button>
				
					<br/>
				
					<button className='btn-sm'>
						<i className="fa fa-search" aria-hidden="true"></i>
					</button>
				</div>

				<br/>

				<div className='btt'>
					<button className='btn-lg btn-brown'>
						<p>Pesquisar</p>
						<i className="fa fa-search" aria-hidden="true"></i>
					</button>
				
					<br/>
				
					<button className='btn-sm btn-brown'>
						<i className="fa fa-search" aria-hidden="true"></i>
					</button>
				</div>
					
				<br/>

				<div className='btt'>
					<button className='btn-lg btn-dbrown'>
						<p>Pesquisar</p>
						<i className="fa fa-search" aria-hidden="true"></i>
					</button>
				
					<br/>
				
					<button className='btn-sm btn-dbrown'>
						<i className="fa fa-search" aria-hidden="true"></i>
					</button>
				</div>

                { this.props.children } 
			</div>
		);
    }
};

export default UIStyleGuide;