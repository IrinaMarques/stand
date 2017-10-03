import React, {Component} from 'react';

import TabsNavButton from '../../../components/dashboard/buttons/TabsNavButton';

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
				<div className='container-fluid'>
					<div className='row end-btn'>
						<TabsNavButton
							src='/dashboard/new-article/more-details'
							iconSide='right'
							iconClassName='fa fa-chevron-left'
						>
							Anterior
						</TabsNavButton>
						<TabsNavButton
							src='/dashboard/new-article/more-details'
							iconSide='left'
							iconClassName='fa fa-chevron-right'
						>
							Próximo
						</TabsNavButton>
					</div>
				</div>
			</div>
		);
    }
};

export default NewArticleImages;