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
										<div className='col-xs-12'>
											<label htmlFor='v-nome'>Nome da Viatura</label>
											<input type='text' name='' id='v-nome' value='v-nome' placeholder='Nome'/>
										</div>
									</div>
									<div className='row'>
										<div className='col-lg-6'>
											<label htmlFor='v-preço'>Preço</label>
											<input type='number' name='' id='v-preço' value='v-preço' placeholder='00,00'/>
										</div>
										<div className='col-lg-6'>
											<label htmlFor='v-kms'>Kms</label>
											<input type='number' name='' id='v-kms' value='v-kms' placeholder='0'/>
										</div>
									</div>
									<div className='row'>	
										<div className='col-lg-6'>
											<label htmlFor='v-potencia'>Potência</label>
											<input type='number' name='' id='v-potencia' value='v-potencia' placeholder='0'/>
										</div>
										<div className='col-lg-6'>
											<label htmlFor='v-cilindrada'>Cilindrada</label>
											<input type='number' name='' id='v-cilindrada' value='v-cilindrada' placeholder='0'/>
										</div>
									</div>
									<div className='row'>
										<div className='col-lg-6'>
											<label htmlFor='v-datav'>Data do veiculo</label>
											<input type='date' name='' id='datav' value='datav' placeholder='DD/MM/AA'/>
										</div>
										<div className='col-lg-6'>
											<label htmlFor='v-datav'>Entrada em Stand</label>
											<input type='date' name='' id='datav' value='datav' placeholder='DD/MM/AA'/>
										</div>
									</div>
								</div>

								<div className='col-md-7 basic-right'>
									<div className='row'>
										<div className='col-lg-4'>
											<label htmlFor='v-categoria'>Categoria</label>
											<input type='text' name='' id='v-categoria' value='v-categoria' placeholder='Selecione'/>
											<select>
												<option>Ligeiro</option>
												<option>Pesado</option>
												<option>Motociclo</option>
											</select>	
										</div>
										<div className='col-lg-4'>
											<label htmlFor='v-sub'>Sub-catgoria</label>
											<input type='text' name='' id='v-sub' value='v-sub' placeholder='Selecione'/>
											<select>
												<option>Passageiros</option>
												<option>Mercadorias</option>
												<option>Mistos</option>
												<option>Tractores</option>
												<option>Especiais</option>
											</select>
										</div>	
										<div className='col-lg-4'>
											<label htmlFor='v-estado'>Estado</label>
											<input type='text' name='' id='v-estado' value='v-estado' placeholder='Selecione'/>
											<select>
												<option>Novo</option>
												<option>Como Novo</option>
												<option>Mistos</option>
												<option>Bem Conservado</option>
												<option>Retorma</option>
												<option>Outros</option>
											</select>
										</div>
									</div>
									<div className='row'>	
										<div className='col-lg-4'>
											<label htmlFor='v-combustivel'>Combustível</label>
											<input type='text' name='' id='v-combustivel' value='v-combustivel' placeholder='Selecione'/>
											<select>
												<option>Gasolina</option>
												<option>Gasóleo</option>
												<option>Híbrido</option>
											</select>
										</div>
										<div className='col-lg-4'>
											<label htmlFor='v-caixa'>Caixa</label>
											<input type='text' name='' id='v-caixa' value='v-caixa' placeholder='Selecione'/>
											<select>
												<option>Manual</option>
												<option>Manual 5 velocidades</option>
												<option>Manual 6 velocidades</option>
												<option>Híbrido</option>
											</select>
										</div>
										<div className='col-lg-4'>
											<label htmlFor='v-portas'>Portas</label>
											<input type='text' name='' id='v-portas' value='v-portas' placeholder='Selecione'/>
											<select>
												<option>5 portas</option>
												<option>3 portas</option>
												<option>4 portas</option>
											</select>
										</div>
									</div>
									<div className='row'>
										<div className='col-lg-4'>
											<label htmlFor='v-marca'>Marca</label>
											<input type='text' name='' id='v-marca' value='v-marca'/>
										</div>
										<div className='col-lg-4'>
											<label htmlFor='v-cor'>Cor</label>
											<input type='text' name='' id='v-cor' value='v-cor'/>
										</div>	
										<div className='col-lg-4'>
											<label htmlFor='v-lugares'>Lugares</label>
											<input type='text' name='' id='v-lugares' value='v-lugares'/>
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