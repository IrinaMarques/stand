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
				<ul className='rm-space'>
					<li className='row msg-list'>

						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Barry Allan</p>
						</div>

						<div className='col-xs-1 msg-novo'>
							<div className='bg-red'>
								<h6>Novo</h6>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>

						<div className='col-xs-4 msg-assunto'>
							<p className='s-font p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='s-font p-sm'>05 May<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons'>
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
					</li>

					<li className='row msg-list'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Green Arrow</p>
						</div>

						<div className='col-xs-1 msg-novo'>
							<div className='bg-red'>
								<h6>Novo</h6>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>

						<div className='col-xs-4 msg-assunto'>
							<p className='s-font p-md'>Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra. </p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='s-font p-sm'>20 Apr<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons'>
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
					</li>

					<li className='row msg-list'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Wolverine</p>
						</div>

						<div className='col-xs-1 msg-novo'>
							<div className='bg-red'>
								<h6>Novo</h6>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>

						<div className='col-xs-4 msg-assunto'>
							<p className='s-font p-md'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='s-font p-sm'>01 Apr<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons'>
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
					</li>

					<li className='row msg-list'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Spider Man</p>
						</div>

						<div className='col-xs-1 msg-novo'>
							<div className='bg-red'>
								<h6>Novo</h6>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>

						<div className='col-xs-4 msg-assunto'>
							<p className='s-font p-md'>Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='s-font p-sm'>15 Feb<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons'>
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
					</li>

					<li className='row msg-list s-grey'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Barry Allan</p>
						</div>

						<div className='col-xs-5 msg-assunto'>
							<p className='p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='p-sm'>05 May<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons buttons-visto'>
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
					</li>

					<li className='row msg-list s-grey'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Green Arrow</p>
						</div>

						<div className='col-xs-5 msg-assunto'>
							<p className='s-grey p-md'>Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra. </p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='p-sm'>20 Apr<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons buttons-visto'>
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
					</li>

					<li className='row msg-list s-grey'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Wolverine</p>
						</div>

						<div className='col-xs-5 msg-assunto'>
							<p className='s-grey p-md'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='p-sm'>01 Apr<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons buttons-visto'>
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
					</li>

					<li className='row msg-list s-grey'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Spider Man</p>
						</div>

						<div className='col-xs-5 msg-assunto'>
							<p className='s-grey p-md'>Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='p-sm'>15 Feb<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons buttons-visto'>
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
					</li>

					<li className='row msg-list s-grey'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Barry Allan</p>
						</div>

						<div className='col-xs-5 msg-assunto'>
							<p className='p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='p-sm'>05 May<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons buttons-visto'>
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
					</li>

					<li className='row msg-list s-grey'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Green Arrow</p>
						</div>

						<div className='col-xs-5 msg-assunto'>
							<p className='s-grey p-md'>Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra. </p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='p-sm'>20 Apr<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons buttons-visto'>
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
					</li>

					<li className='row msg-list s-grey'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Wolverine</p>
						</div>

						<div className='col-xs-5 msg-assunto'>
							<p className='s-grey p-md'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='p-sm'>01 Apr<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons buttons-visto'>
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
					</li>

					<li className='row msg-list s-grey'>
						<div className='col-xs-3 msg-nome'>
							<p className='p-md'>Spider Man</p>
						</div>

						<div className='col-xs-5 msg-assunto'>
							<p className='p-md'>Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.</p>
						</div>

						<div className='col-xs-2 msg-data'>
							<p className='p-sm'>15 Feb<span>, 2017</span></p>
						</div>

						<div className='col-xs-2 msg-buttons buttons-visto'>
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
					</li>

				</ul>

                { this.props.children } 
			</div>
		);
    }
};

export default LastMessages;