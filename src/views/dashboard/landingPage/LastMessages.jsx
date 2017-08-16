import React, {Component} from 'react';

import LastMessagesListItem from './LastMessagesListItem';

const buildListItems = (coll) => {
	return coll.map((item, index) => {
		const unreadState = (item.state === 'UNREAD');
		
		const label = unreadState && [{
			mainClassName : 'col-xs-1 msg-novo', 
			innerClassName: 'bg-red',
			iconClassName : 'fa fa-exclamation',
			label         : unreadState && 'Novo' || ''
		}] || [];

		const cols = [{
			mainClassName : unreadState && 'col-xs-2 msg-nome' || 'col-xs-3 msg-nome',
			innerClassName: 'p-md',
			text          : item.name
		}].concat(label, [{
			mainClassName : unreadState && 'col-xs-5 msg-assunto' || 'col-xs-5 msg-assunto', 
			innerClassName: 's-font p-sm',
			text          : item.message
		}, {
			mainClassName : unreadState && 'col-xs-2 msg-data' || 'col-xs-2 msg-data', 
			innerClassName: 's-font p-sm',
			text          : item.date
		}]);
		
		return (
			<LastMessagesListItem 
				key = { index }
				cols = {cols}
				btns = {[
					{
						mainClassName: 'col-xs-6',
						iconClassName: 'fa fa-trash-o'
					},
					{
						mainClassName: 'col-xs-6',
						iconClassName: 'fa fa-reply'
					}
				]}
			/>
		);
	})
};

class LastMessages extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		return nextProps || {
			collection: [
				{
					name   : 'Barry Allan',
					state  : 'UNREAD',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.',
					date   : '05 May, 2017'
				},
				{
					name   : 'Green Arrow',
					state  : 'UNREAD',
					message: 'Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra.',
					date   : '20 Apr, 2017'
				},
				{
					name   : 'Wolverine',
					state  : 'UNREAD',
					message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
					date   : '01 Apr, 2017'
				},
				{
					name   : 'Spider Man',
					state  : 'UNREAD',
					message: 'Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.',
					date   : '15 Feb, 2017'
				},
				{
					name   : 'Barry Allan',
					state  : 'READED',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.',
					date   : '05 May, 2017'
				},
				{
					name   : 'Green Arrow',
					state  : 'READED',
					message: 'Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra.',
					date   : '20 Apr, 2017'
				},
				{
					name   : 'Wolverine',
					state  : 'READED',
					message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
					date   : '01 Apr, 2017'
				},	
				{
					name   : 'Spider Man',
					state  : 'READED',
					message: 'Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.',
					date   : '15 Feb, 2017'
				},		
				{
					name   : 'Barry Allan',
					state  : 'READED',
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada finibus magna, ut accumsan est. Suspendisse potenti.',
					date   : '05 May'
				},
				{
					name   : 'Green Arrow',
					state  : 'READED',
					message: 'Vivamus id eros vel justo pharetra tempor at a odio. Aliquam id cursus enim. Morbi lacinia nec neque hendrerit pharetra.',
					date   : '20 Apr, 2017'
				},	
				{
					name   : 'Wolverine',
					state  : 'READED',
					message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
					date   : '01 Apr, 2017'
				},
				{
					name   : 'Spider Man',
					state  : 'READED',
					message: 'Aenean nec nunc mi. Pellentesque interdum, lorem in fermentum posuere, arcu leo luctus tortor, a dignissim ligula elit vitae lacus.',
					date   : '15 Feb, 2017'
				}
			]
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
			</div>
		);
    }
};

export default LastMessages;