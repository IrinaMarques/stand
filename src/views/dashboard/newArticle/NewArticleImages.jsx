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
							<p>Imagem principal</p>
							<div className='row'>
								<div className='solo-img-container'>
									<div className='solo-img'>
										<picture>
											<source srcSet={require("dashboardImages/placeholder-img-300px.png")} media='(min-width: 1200px)'/>
											
											<source srcSet={require("dashboardImages/placeholder-img-250px.png")} media='(min-width: 400px)'/>
											<img src={require("dashboardImages/placeholder-img-300px.png")} alt="Placeholder"/>
											<input type='file' name='' value='' id=''/>
										</picture>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-8'>
							<p>Imagens complementares</p>
							<div className='row'>
								<div className='col-md-4 col-sm-6 col-xs-12 sm-img'>
									<picture>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 1200px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-150px.png")} media='(min-width: 991px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 400px)'/>
										<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
										<input type='file' name='' value='' id=''/>
									</picture>
								</div>
								<div className='col-md-4 col-sm-6 col-xs-12 sm-img'>
									<picture>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 1200px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-150px.png")} media='(min-width: 991px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 400px)'/>
										<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
										<input type='file' name='' value='' id=''/>
									</picture>
								</div>
								<div className='col-md-4 col-sm-6 col-xs-12 sm-img'>
									<picture>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 1200px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-150px.png")} media='(min-width: 991px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 400px)'/>
										<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
										<input type='file' name='' value='' id=''/>
									</picture>
								</div>
								<div className='col-md-4 col-sm-6 col-xs-12 sm-img down-img'>
									<picture>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 1200px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-150px.png")} media='(min-width: 991px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 400px)'/>
										<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
										<input type='file' name='' value='' id=''/>
									</picture>
								</div>
								<div className='col-md-4 col-sm-6 col-xs-12 sm-img down-img'>
									<picture>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 1200px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-150px.png")} media='(min-width: 991px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 400px)'/>
										<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
										<input type='file' name='' value='' id=''/>
									</picture>
								</div>
								<div className='col-md-4 col-sm-6 col-xs-12 sm-img down-img'>
									<picture>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 1200px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-150px.png")} media='(min-width: 991px)'/>
										<source srcSet={require("dashboardImages/placeholder-img-200px.png")} media='(min-width: 400px)'/>
										<img src={require("dashboardImages/placeholder-img-150px.png")} alt="Placeholder"/>
										<input type='file' name='' value='' id=''/>
									</picture>
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