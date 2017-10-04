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
			<div className='msg-box new-article-img'>	
				<div className='container-fluid'>
					<div className='row basic-container'>

						<div className='col-md-4'>
							<p>Carregue uma ou mais imagens</p>
							<div className='solo-img'>
								<img src={require("dashboardImages/placeholder-img-200px.png")} alt="Placeholder"/>
							</div>
							<form>
								<input type='file' name='' value='' id='file-upload'/>
								<label for='file-upload'></label>
							</form>

						</div>
						<div className='col-md-8'>
							<p>Imagens carregadas</p>
							<div className='row up-row'>
								<div className='col-sm-4'>
									<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
								</div>
								<div className='col-sm-4'>
									<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
								</div>
								<div className='col-sm-4'>
									<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-4'>
									<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
								</div>
								<div className='col-sm-4'>
									<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
								</div>
								<div className='col-sm-4'>
									<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
								</div>
							</div>	
						</div>

					</div>

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