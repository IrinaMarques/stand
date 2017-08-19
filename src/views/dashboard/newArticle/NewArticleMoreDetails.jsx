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
											<label for='1'>Ar condicionado manual</label>

											<input type='checkbox' name='' value='2'/>
											<label for='2'>Vidros elétricos</label>

											<input type='checkbox' name='' value='3'/>
											<label for='3'>4 Air Bag</label>

											<input type='checkbox' name='' value='4'/>
											<label for='4'>Direção assistida</label>

											<input type='checkbox' name='' value='5'/>
											<label for='5'>Fecho central de portas</label>

											<input type='checkbox' name='' value='6'/>
											<label for='6'>Faróis de nevoeiro</label>

											<input type='checkbox' name='' value='7'/>
											<label for='7'>Vidros escuros</label>

											<input type='checkbox' name='' value='8'/>
											<label for='8'>Retrovisores aquecidos</label>
										</div>

										<div className='col-lg-6'>
											<input type='checkbox' name='' value='9'/>
											<label for='9'>Computador de bordo</label>

											<input type='checkbox' name='' value='10'/>
											<label for='10'>Jantes especiais</label>

											<input type='checkbox' name='' value='11'/>
											<label for='11'>Alarme</label>

											<input type='checkbox' name='' value='12'/>
											<label for='12'>Radio</label>

											<input type='checkbox' name='' value='13'/>
											<label for='13'>Sistema de ABS</label>

											<input type='checkbox' name='' value='14'/>
											<label for='14'>Espelhos Retrovisores Elétricos</label>

											<input type='checkbox' name='' value='15'/>
											<label for='15'>Teto de abrir elétrico</label>

											<input type='checkbox' name='' value='16'/>
											<label for='16'>CD</label>
										</div>
									</div>
								</form>
							</div>
							<div className='col-lg-5 more-left'>
							<h3>Observações</h3>
								<textarea rows="4" cols="50"></textarea>
								<form>
									<p>Este veiculo pertence às novidades?</p>
									<input type='radio' name='' value='sim-nov'/>
									<label for='sim-nov'>Sim</label>
									<input type='radio' name='' value='nao-nov'/>
									<label for='nao-nov'>Não</label>

									<p>Partilhar nas redes sociais?</p>
									<input type='radio' name='' value='sim-soc'/>
									<label for='sim-soc'>Sim</label>
									<input type='radio' name='' value='nao-soc'/>
									<label for='nao-soc'>Não</label>
								</form>
							</div>
						</div>
						<form>
							<div className='row'>
								<label for='outros'>
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
									<p>Proximo</p>
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