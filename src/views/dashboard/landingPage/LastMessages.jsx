import React, {Component} from 'react';


class LastMessages extends Component {
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
			<div className='msg-box'>
				<ul className='fluid-container'>
					<li className='row msg-list'>
						
							<div className='col-sm-3 col-xs-4 msg-nome'>
								<p>Barry Allan</p>
							</div>
							
							<div className='col-sm-5 col-xs-2'>
								<div className='row assunto'>
									<div className='col-sm-2 col-xs-12 msg-novo'>
										<div className='bg-red'>
											<h6>Novo</h6>
											<i className="fa fa-exclamation" aria-hidden="true"></i>
										</div>
									</div>

									<div className='col-sm-10 col-xs-0 msg-assunto'>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.</p>
									</div>
								</div>
							</div>
		
							<div className='col-sm-2 col-xs-3 msg-data'>
								<p>16/08<span>/17</span></p>
							</div>

							<div className='col-sm-2 col-xs-3'>
								<div className='row msg-buttons'>
									<div className='col-xs-6'>
										<a href='#'>
											<i className="fa fa-trash-o" aria-hidden="true"></i>
										</a>
									</div>
									<div className='col-xs-6'>
										<a href='#'>
											<i className="fa fa-reply" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						
					</li>

					<li className='row msg-list old'>
						
							<div className='col-sm-3 col-xs-4 msg-nome'>
								<p>Barry Allan</p>
							</div>
							
							<div className='col-sm-5 col-xs-2'>
								<div className='row assunto'>
									<div className='col-sm-2 col-xs-12 msg-novo'>
										<div className='bg-red'>
											<h6>Novo</h6>
											<i className="fa fa-exclamation" aria-hidden="true"></i>
										</div>
									</div>

									<div className='col-sm-10 col-xs-0 msg-assunto'>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.</p>
									</div>
								</div>
							</div>
		
							<div className='col-sm-2 col-xs-3 msg-data'>
								<p>16/08<span>/17</span></p>
							</div>

							<div className='col-sm-2 col-xs-3'>
								<div className='row msg-buttons'>
									<div className='col-xs-6'>
										<a href='#'>
											<i className="fa fa-trash-o" aria-hidden="true"></i>
										</a>
									</div>
									<div className='col-xs-6'>
										<a href='#'>
											<i className="fa fa-reply" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						
					</li>

				</ul>

                { this.props.children } 
			</div>
		);
    }
};

export default LastMessages;