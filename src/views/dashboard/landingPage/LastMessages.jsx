import React, {Component} from 'react';

import LastMessagesListItem from './LastMessagesListItem';

const buildListItems = (coll) => {
	return coll.map((item, index) => {
		const unreadState = (item.state === 'UNREAD');
		
		const label = unreadState && [{
			mainClassName : 'col-md-1 msg-novo', 
			innerClassName: 'bg-red',
			iconClassName : 'fa fa-exclamation',
			label         : unreadState && 'Novo' || ''
		}] || [];

		const cols = [{
			mainClassName : unreadState && 'col-md-2 msg-nome' || 'col-md-3 msg-nome',
			innerClassName: 'p-md',
			text          : item.name
		}].concat(label, [{
			mainClassName : unreadState && 'col-md-5 msg-assunto' || 'col-md-5 msg-assunto', 
			innerClassName: 's-font p-sm',
			text          : item.message
		}, {
			mainClassName : unreadState && 'col-md-2 msg-data' || 'col-md-2 msg-data', 
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
				<ul className='rm-space'>
					
					{ buildListItems(this.state.collection) }
				
				</ul>
			</div>
		);
    }
};

export default LastMessages;