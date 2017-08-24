import React, {Component} from 'react';
import Dropdown from '../../../components/dashboard/dropdown/Dropdown'
import TextInput from '../../../components/dashboard/inputs/TextInput'
import NumberInput from '../../../components/dashboard/inputs/NumberInput'

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
											<TextInput 
												id='v-nome' 
												placeholder='Nome' 
												labelText='Nome da Viatura' 
												errorClassName='error' 
												doneClassName='done'
												classNameState='done'
											/>
										</div>
									</div>

									<div className='row'>
										<div className='col-md-6'>
											<NumberInput 
												id='v-preço' 
												placeholder='00,00' 
												labelText='Pre&ccedil;o'
												errorClassName='error' 
												doneClassName='done'
												classNameState='done'
											/>
										</div>
										<div className='col-md-6'>
											<NumberInput 
												id='v-kms' 
												placeholder='0' 
												labelText='Kms' 
												errorClassName='error' 
												doneClassName='done'
												classNameState='done'
											/>
										</div>
									</div>

									<div className='row'>	
										<div className='col-md-6 error done'>
											<NumberInput 
												id='v-potencia' 
												placeholder='0' 
												labelText='Pot&ecirc;ncia' 
												errorClassName='error' 
												doneClassName='done'
												classNameState='done'
											/>
										</div>
										<div className='col-md-6 error done'>
											<NumberInput 
												id='v-cilindrada' 
												placeholder='0' 
												labelText='Cilindrada' 
												errorClassName='error' 
												doneClassName='done'
												classNameState='done'
											/>
										</div>
									</div>

									<div className='row'>
										<div className='col-md-6 error done'>
											<label htmlFor='v-datav'><p className='sm-date'>Data do ve&iacute;culo</p></label>
											<input type='date' name='' id='v-data' placeholder='DD/MM/AA'/>
										</div>
										<div className='col-md-6 error done'>
											<label htmlFor='v-datav'><p className='sm-datev'>Entrada no Stand</p></label>
											<input type='date' name='' id='v-datav' placeholder='DD/MM/AA'/>
										</div>
									</div>
								</div>

								<div className='col-md-7 basic-right'>
									<div className='row'>
										<div className='col-md-4 error done'>
											<label htmlFor='v-categoria'>
												<p>Categoria</p>
											</label>
											<div className='col-drop'>
												<Dropdown
													options = {[
														{value: 'Ligeiro'},
														{value: 'Pesado'},
														{value: 'Motoc&iacute;clo'}
													]}
													placeholder='Selecione'
												/>
											</div>	
										</div>

										<div className='col-md-4 error done'>
											<label htmlFor='v-sub'>
												<p>Sub-categoria</p>
											</label>
											<div className='col-drop'>
												<Dropdown
													options = {[
														{value: 'Passageiros'},
														{value: 'Mercadorias'},
														{value: 'Mistos'},
														{value: 'Tratores'},
														{value: 'Especiais'}
													]}
													placeholder='Selecione'
												/>
											</div>
										</div>	

										<div className='col-md-4 error done'>
											<label htmlFor='v-estado'>
												<p>Estado</p>
											</label>
											<div className='col-drop'>
												<Dropdown
													options = {[
														{value: 'Novo'},
														{value: 'Como Novo'},
														{value: 'M&iacute;stos'},
														{value: 'Bem Conservado'},
														{value: 'Retorma'},
														{value: 'Outros'}
													]}
													placeholder='Selecione'
												/>
											</div>
										</div>

									</div>
									<div className='row'>	
										<div className='col-md-4 error done'>
											<label htmlFor='v-combustivel'>
												<p>Combust&iacute;vel</p>
											</label>
											<div className='col-drop'>
												<Dropdown
													options = {[
														{value: 'Gasolina'},
														{value: 'Gas&oacute;leo'},
														{value: 'H&iacute;brido'}
													]}
													placeholder='Selecione'
												/>
											</div>
										</div>

										<div className='col-md-4 error done'>
											<label htmlFor='v-caixa'>
												<p>Caixa</p>
											</label>
											<div className='col-drop'>
												<Dropdown
													options = {[
														{value: 'Manual'},
														{value: 'Manual 5 velocidades'},
														{value: 'Manual 6 velocidades'},
														{value: 'Híbrido'}
													]}
													placeholder='Selecione'
												/>
											</div>
										</div>

										<div className='col-md-4 error done'>
											<label htmlFor='v-portas'>
												<p>Portas</p>
											</label>
											<div className='col-drop'>
												<Dropdown
													options = {[
														{value: '5 portas'},
														{value: '3 portas'},
														{value: '4 portas'}
													]}
													placeholder='Selecione'
												/>
											</div>
										</div>
									</div>

									<div className='row'>
										<div className='col-md-4'>
											<TextInput 
												id='v-marca' 
												placeholder='Selecione' 
												labelText='Marca' 
												errorClassName='error' 
												doneClassName='done'
												classNameState='done'
											/>
										</div>
										<div className='col-md-4 error done'>
											<TextInput 
												id='v-cor' 
												placeholder='Selecione' 
												labelText='Cor' 
												errorClassName='error' 
												doneClassName='done'
												classNameState='done'
											/>
										</div>	
										<div className='col-md-4 error done'>
											<TextInput 
												id='v-lugares' 
												placeholder='Selecione' 
												labelText='Lugares' 
												errorClassName='error' 
												doneClassName='done'
												classNameState='done'
											/>
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