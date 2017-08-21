import React, {Component} from 'react';


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
			<div>
				<div className='msg-box'>

					<div className='container-fluid'> 
						<div className='row basic-container'>
							<div className='col-lg-7 more-left'>
								<form>
									<div className='row'>
										<div className='col-lg-6'>
										<h3>Extras</h3>
											<input type='checkbox' name='' value='1'/>
											<label htmlFor='1'>Ar condicionado manual</label>

											<input type='checkbox' name='' value='2'/>
											<label htmlFor='2'>Vidros el&eacute;tricos</label>

											<input type='checkbox' name='' value='3'/>
											<label htmlFor='3'>4 Air Bag</label>

											<input type='checkbox' name='' value='4'/>
											<label htmlFor='4'>Dire&ccedil;&atilde;o assistida</label>

											<input type='checkbox' name='' value='5'/>
											<label htmlFor='5'>Fecho central de portas</label>

											<input type='checkbox' name='' value='6'/>
											<label htmlFor='6'>Far&oacute;is de nevoeiro</label>

											<input type='checkbox' name='' value='7'/>
											<label htmlFor='7'>Vidros escuros</label>

											<input type='checkbox' name='' value='8'/>
											<label htmlFor='8'>Retrovisores aquecidos</label>
										</div>

										<div className='col-lg-6'>
											<input type='checkbox' name='' value='9'/>
											<label htmlFor='9'>Computador de bordo</label>

											<input type='checkbox' name='' value='10'/>
											<label htmlFor='10'>Jantes especiais</label>

											<input type='checkbox' name='' value='11'/>
											<label htmlFor='11'>Alarme</label>

											<input type='checkbox' name='' value='12'/>
											<label htmlFor='12'>R&aacute;dio</label>

											<input type='checkbox' name='' value='13'/>
											<label htmlFor='13'>Sistema de ABS</label>

											<input type='checkbox' name='' value='14'/>
											<label htmlFor='14'>Espelhos Retrovisores El&eacute;tricos</label>

											<input type='checkbox' name='' value='15'/>
											<label htmlFor='15'>Teto de abrir el&eacute;trico</label>

											<input type='checkbox' name='' value='16'/>
											<label htmlFor='16'>CD</label>
										</div>
									</div>
								</form>
							</div>
							<div className='col-lg-5 more-left'>
							<h3>Observa&ccedil;&atilde;es</h3>
								<textarea rows="4" cols="50"></textarea>
								<form>
									<p>Este ve&iacute;culo pertence &agrave;s novidades?</p>
									<input type='radio' name='' value='sim-nov'/>
									<label htmlFor='sim-nov'>Sim</label>
									<input type='radio' name='' value='nao-nov'/>
									<label htmlFor='nao-nov'>N&atilde;o</label>

									<p>Partilhar nas redes sociais?</p>
									<input type='radio' name='' value='sim-soc'/>
									<label htmlFor='sim-soc'>Sim</label>
									<input type='radio' name='' value='nao-soc'/>
									<label htmlFor='nao-soc'>N&atilde;o</label>
								</form>
							</div>
						</div>
						<form>
							<div className='row'>
								<label htmlFor='outros'></label>
								<input type='text' name='' value='outros'/>
							</div>
						</form>
						<div className='row'>
							<div className='col-lg-3'>
								<button>
									<p>Anterior</p>
									<i className="fa fa-caret-square-o-left" aria-hidden="true"></i>
								</button>
							</div>
							<div className='col-lg-3 col-lg-offset-6'>
								<button>
									<p>Pr&oacute;ximo</p>
									<i className="fa fa-caret-square-o-right" aria-hidden="true"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
    }
};

export default NewArticleMoreDetails;