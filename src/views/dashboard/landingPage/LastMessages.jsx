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
			<div>
				<ul className='rm-space'>
					<li className='msg-list'>
						<div className='msg-nome'>
							<p>Barry Allan</p>
						</div>
						<div className='msg-novo'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-font p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.</p>
						</div>
						<div className='msg-data'>
							<p className='s-font p-sm'>03 May, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list'>
						<div className='msg-nome'>
							<p>Green Arrow</p>
						</div>
						<div className='msg-novo'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-font p-md'>Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra. </p>
						</div>
						<div className='msg-data'>
							<p className='s-font p-sm'>20 Apr, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list'>
						<div className='msg-nome'>
							<p>Wolverine</p>
						</div>
						<div className='msg-novo'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-font p-md'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
						</div>
						<div className='msg-data'>
							<p className='s-font p-sm'>01 Apr, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list'>
						<div className='msg-nome'>
							<p>Spider Man</p>
						</div>
						<div className='msg-novo'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-font p-md'>Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.</p>
						</div>
						<div className='msg-data'>
							<p className='s-font p-sm'>15 Feb, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list s-grey'>
						<div className='msg-nome nome-visto'>
							<p>Barry Allan</p>
						</div>
						<div className='msg-novo msg-visto'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-grey p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.</p>
						</div>
						<div className='msg-data'>
							<p className='p-sm'>03 May, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list s-grey'>
						<div className='msg-nome nome-visto'>
							<p>Green Arrow</p>
						</div>
						<div className='msg-novo msg-visto'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-grey p-md'>Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra. </p>
						</div>
						<div className='msg-data'>
							<p className='p-sm'>20 Apr, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list s-grey'>
						<div className='msg-nome nome-visto'>
							<p>Wolverine</p>
						</div>
						<div className='msg-novo msg-visto'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-grey p-md'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
						</div>
						<div className='msg-data'>
							<p className='p-sm'>01 Apr, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list s-grey'>
						<div className='msg-nome nome-visto'>
							<p>Spider Man</p>
						</div>
						<div className='msg-novo msg-visto'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-grey p-md'>Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.</p>
						</div>
						<div className='msg-data'>
							<p className='p-sm'>15 Feb, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list s-grey'>
						<div className='msg-nome nome-visto'>
							<p>Barry Allan</p>
						</div>
						<div className='msg-novo msg-visto'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-grey p-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.</p>
						</div>
						<div className='msg-data'>
							<p className='p-sm'>03 May, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list s-grey'>
						<div className='msg-nome nome-visto'>
							<p>Green Arrow</p>
						</div>
						<div className='msg-novo msg-visto'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-grey p-md'>Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra. </p>
						</div>
						<div className='msg-data'>
							<p className='p-sm'>20 Apr, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list s-grey'>
						<div className='msg-nome nome-visto'>
							<p>Wolverine</p>
						</div>
						<div className='msg-novo msg-visto'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='s-grey p-md'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
						</div>
						<div className='msg-data'>
							<p className='p-sm'>01 Apr, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
								<i className="fa fa-trash-o" aria-hidden="true"></i>
								<i className="fa fa-reply" aria-hidden="true"></i>
							</div>
						</div>
					</li>

					<li className='msg-list s-grey'>
						<div className='msg-nome nome-visto'>
							<p>Spider Man</p>
						</div>
						<div className='msg-novo msg-visto'>
							<div className='bg-red'>
								<p>Novo</p>
								<i className="fa fa-exclamation" aria-hidden="true"></i>
							</div>
						</div>
						<div className='msg-assunto'>
							<p className='p-md'>Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.</p>
						</div>
						<div className='msg-data'>
							<p className='p-sm'>15 Feb, 2017</p>
						</div>
						<div className='msg-buttons'>
							<div className='box-buttons'>
							
									<i className="fa fa-trash-o" aria-hidden="true"></i>
								
									<i className="fa fa-reply" aria-hidden="true"></i>
								
							</div>
						</div>
					</li>

				</ul>

                { this.props.children() } 
			</div>
		);
    }
};

export default LastMessages;