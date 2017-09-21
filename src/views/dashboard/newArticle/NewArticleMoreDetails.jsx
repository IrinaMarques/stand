import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NewArticleMoreDetails extends Component {
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
			<div className='msg-box new-article-more-details'>
				<form action='javascript:void(0);'>
					<div className='container-fluid'> 
						<div className='row basic-container'>
							<div className='col-md-7 col-sm-12 more-left'>
								<div className='row'>
									<div className='col-md-6 col-sm-6'>
									<h3>Extras</h3>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='1'/>
											<label htmlFor='1'>Ar condicionado</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='2'/>
											<label htmlFor='2'>Vidros el&eacute;tricos</label>
										</div>
										<div className='col-xs-12 item'>	
											<input type='checkbox' name='' id='3'/>
											<label htmlFor='3'>4 Air Bag</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='4'/>
											<label htmlFor='4'>Dire&ccedil;&atilde;o assistida</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='5'/>
											<label htmlFor='5'>Fecho central</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='6'/>
											<label htmlFor='6'>Far&oacute;is de nevoeiro</label>
										</div>
										<div className='col-xs-12 item'>	
											<input type='checkbox' name='' id='7'/>
											<label htmlFor='7'>Vidros escuros</label>
										</div>
										<div className='col-xs-12 item'>	
											<input type='checkbox' name='' id='8'/>
											<label htmlFor='8'>Retrovisores aquecidos</label>
										</div>
									</div>

									<div className='col-lg-6 col-sm-6 right-items'>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='9'/>
											<label htmlFor='9'>Computador de bordo</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='10'/>
											<label htmlFor='10'>Jantes especiais</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='11'/>
											<label htmlFor='11'>Alarme</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='12'/>
											<label htmlFor='12'>R&aacute;dio</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='13'/>
											<label htmlFor='13'>Sistema de ABS</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='14'/>
											<label htmlFor='14'>Retrovisores El&eacute;tricos</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='15'/>
											<label htmlFor='15'>Teto de abrir el&eacute;trico</label>
										</div>
										<div className='col-xs-12 item'>
											<input type='checkbox' name='' id='16'/>
											<label htmlFor='16'>CD</label>
										</div>
									</div>									
								</div>
							</div>
							<div className='col-md-5 col-sm-12 more-right'>
								<h3>Observa&ccedil;&otilde;es</h3>
								<textarea rows="8"></textarea>

								<p>Este ve&iacute;culo pertence &agrave;s novidades?</p>
								<input type='radio' name='' id='sim-nov'/>
								<label htmlFor='sim-nov'>Sim</label>
								<input type='radio' name='' id='nao-nov'/>
								<label htmlFor='nao-nov'>N&atilde;o</label>

								<p>Partilhar nas redes sociais?</p>
								<input type='radio' name='' id='sim-soc'/>
								<label htmlFor='sim-soc'>Sim</label>
								<input type='radio' name='' id='nao-soc'/>
								<label htmlFor='nao-soc'>N&atilde;o</label>
							</div>
							<div className='col-xs-12 more-end'>
								<p className='col-lg-1 col-md-2'>Outros</p>
								<label htmlFor='outros'></label>
								<input className='col-lg-11 col-md-10' type='text' name='' placeholder='outros'/>
							</div>
						</div>	

						<div className='row end-btn'>
							<div className='footer-btn col-xs-2 btn-hidden'>
								<Link to='/dashboard/new-article/basic-information'>
									<i className="btn-icon col-xs-3 p-hidden fa-lg fa fa-chevron-left text-center" aria-hidden="true"></i>
									<p className='btn-text col-xs-9'>Anterior</p>
								</Link>
							</div>
							<div className='footer-btn col-xs-2 col-xs-offset-8'>
								<Link to='/dashboard/new-article/more-details'>
									<p className='btn-text col-xs-9'>Pr&oacute;ximo</p>
									<i className="btn-icon col-xs-3 fa-lg fa fa-chevron-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						
					</div>
				</form>
			</div>
		);
    }
};

export default NewArticleMoreDetails;