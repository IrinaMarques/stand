import React, {Component} from 'react';


class NewArticleBasicData extends Component {
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
							<form>
								<div className='col-md-5 basic-left'>
									<div className='row'>
										<div className='col-xs-12 dados-nome'>
											<label htmlFor='v-nome'><p>Nome da Viatura</p></label>
											<input type='text' name='' id='v-nome' placeholder='Nome'/>
										</div>
									</div>

									<div className='row'>
										<div className='col-md-6'>
											<label htmlFor='v-preço'><p>Pre&ccedil;o</p></label>
											<input type='number' name='' id='v-preço' placeholder='00,00'/>
										</div>
										<div className='col-md-6'>
											<label htmlFor='v-kms'><p>Kms</p></label>
											<input type='number' name='' id='v-kms' placeholder='0'/>
										</div>
									</div>

									<div className='row'>	
										<div className='col-md-6'>
											<label htmlFor='v-potencia'><p>Pot&ecirc;ncia</p></label>
											<input type='number' name='' id='v-potencia' placeholder='0'/>
										</div>
										<div className='col-md-6'>
											<label htmlFor='v-cilindrada'><p>Cilindrada</p></label>
											<input type='number' name='' id='v-cilindrada' placeholder='0'/>
										</div>
									</div>

									<div className='row'>
										<div className='col-md-6'>
											<label htmlFor='v-datav'><p className='sm-date'>Data do ve&iacute;culo</p></label>
											<input type='date' name='' id='v-data' placeholder='DD/MM/AA'/>
										</div>
										<div className='col-md-6'>
											<label htmlFor='v-datav'><p className='sm-datev'>Entrada no Stand</p></label>
											<input type='date' name='' id='v-datav' placeholder='DD/MM/AA'/>
										</div>
									</div>
								</div>

								<div className='col-md-7 basic-right'>
									<div className='row'>
										<div className='col-md-4'>
											<label htmlFor='v-categoria'>
												<p>Categoria</p>
											</label>
											<div className='col-drop'>
												<input type='text' name='' id='v-categoria' placeholder='Selecione'/>
												<div className='drop'>
													<select>
														<option></option>
														<option>Ligeiro</option>
														<option>Pesado</option>
														<option>Motoc&iacute;clo</option>
													</select>
												</div>
											</div>	
										</div>

										<div className='col-md-4 col-drop'>
											<label htmlFor='v-sub'>
												<p>Sub-catgoria</p>
											</label>
											<div className='col-drop'>
												<input type='text' name='' id='v-sub' placeholder='Selecione'/>
												<div className='drop'>
													<select>
														<option></option>
														<option>Passageiros</option>
														<option>Mercadorias</option>
														<option>Mistos</option>
														<option>Tratores</option>
														<option>Especiais</option>
													</select>
												</div>
											</div>
										</div>	

										<div className='col-md-4 col-drop'>
											<label htmlFor='v-estado'>
												<p>Estado</p>
											</label>
											<div className='col-drop'>
												<input type='text' name='' id='v-estado' placeholder='Selecione'/>
												<div className='drop'>	
													<select>
														<option></option>
														<option>Novo</option>
														<option>Como Novo</option>
														<option>M&iacute;stos</option>
														<option>Bem Conservado</option>
														<option>Retorma</option>
														<option>Outros</option>
													</select>
												</div>
											</div>
										</div>

									</div>
									<div className='row'>	
										<div className='col-md-4 col-drop'>
											<label htmlFor='v-combustivel'>
												<p>Combust&iacute;vel</p>
											</label>
											<div className='col-drop'>
												<input type='text' name='' id='v-combustivel' placeholder='Selecione'/>
												<div className='drop'>
													<select>
														<option></option>
														<option>Gasolina</option>
														<option>Gas&oacute;leo</option>
														<option>H&iacute;brido</option>
													</select>
												</div>
											</div>
										</div>

										<div className='col-md-4 col-drop'>
											<label htmlFor='v-caixa'>
												<p>Caixa</p>
											</label>
											<div className='col-drop'>
												<input type='text' name='' id='v-caixa' placeholder='Selecione'/>
												<div className='drop'>
													<select>
														<option></option>
														<option>Manual</option>
														<option>Manual 5 velocidades</option>
														<option>Manual 6 velocidades</option>
														<option>Híbrido</option>
													</select>
												</div>
											</div>
										</div>

										<div className='col-md-4 col-drop'>
											<label htmlFor='v-portas'>
												<p>Portas</p>
											</label>
											<div className='col-drop'>
												<input type='text' name='' id='v-portas' placeholder='Selecione'/>
												<div className='drop'>
													<select>
														<option></option>
														<option>5 portas</option>
														<option>3 portas</option>
														<option>4 portas</option>
													</select>
												</div>
											</div>
										</div>
									</div>

									<div className='row'>
										<div className='col-md-4'>
											<label htmlFor='v-marca'>
												<p>Marca</p>
											</label>
											<input type='text' name='' id='v-marca' placeholder='Selecione'/>
										</div>
										<div className='col-md-4'>
											<label htmlFor='v-cor'>
												<p>Cor</p>
											</label>
											<input type='text' name='' id='v-cor' placeholder='Selecione'/>
										</div>	
										<div className='col-md-4'>
											<label htmlFor='v-lugares'>
												<p>Lugares</p>
											</label>
											<input type='text' name='' id='v-lugares' placeholder='Selecione'/>
										</div>
									</div>

								</div>
							</form>
						</div>
					</div>

				</div>
			</div>
		);
    }
};

export default NewArticleBasicData;