import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../../../components/dashboard/dropdown/Dropdown'
import TextInput from '../../../components/dashboard/inputs/TextInput'
import NumberInput from '../../../components/dashboard/inputs/NumberInput'
import DateInput from '../../../components/dashboard/inputs/DateInput'

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
			<div className='msg-box'>
				<form action='javascript:void(0);'>
					<div className='container-fluid'>
						<div className='row basic-container'>
							<div className='col-lg-5 basic-left'>
								<div className='col-xs-12 dados-nome'>
										<TextInput
											id='v-nome'
											placeholder='Nome'
											labelText='Nome da Viatura'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>
								
								<div className='col-sm-6'>
										<NumberInput
											id='v-preço'
											placeholder='00,00'
											toFixed='2'
											labelText='Pre&ccedil;o'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>

								<div className='col-sm-6'>
										<NumberInput
											id='v-kms'
											placeholder='0'
											labelText='Kms'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>
								
								<div className='col-sm-6'>
										<NumberInput
											id='v-potencia'
											placeholder='0'
											labelText='Pot&ecirc;ncia'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>

								<div className='col-sm-6'>
										<NumberInput
											id='v-cilindrada'
											placeholder='0'
											labelText='Cilindrada'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>
								
								<div className='col-sm-6'>
										<DateInput
											id='v-datav'
											placeholder='DD/MM/AA'
											labelText='Data do ve&iacute;culo'
											labelClassName='sm-date'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>

								<div className='col-sm-6'>
										<DateInput
											id='v-data-e'
											placeholder='DD/MM/AA'
											labelText='Data em Stand'
											labelClassName='sm-datev'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>
							</div>

							<div className='col-lg-7 basic-right'>
								<div className='col-lg-4 col-sm-6'>
										<div className='col-drop'>
											<Dropdown
												options={[
													{ value: 'Ligeiro' },
													{ value: 'Pesado' },
													{ value: 'Motoc&iacute;clo' }
												]}
												placeholder='Selecione'
												id='v-categoria'
												labelText='Categoria'
											/>
										</div>
								</div>

								<div className='col-lg-4 col-sm-6'>
										<div className='col-drop'>
											<Dropdown
												options={[
													{ value: 'Passageiros' },
													{ value: 'Mercadorias' },
													{ value: 'Mistos' },
													{ value: 'Tratores' },
													{ value: 'Especiais' }
												]}
												placeholder='Selecione'
												id='v-sub'
												labelText='Sub-categoria'
											/>
										</div>
								</div>

								<div className='col-lg-4 col-sm-6'>
										<div className='col-drop'>
											<Dropdown
												options={[
													{ value: 'Novo' },
													{ value: 'Como Novo' },
													{ value: 'M&iacute;stos' },
													{ value: 'Bem Conservado' },
													{ value: 'Retorma' },
													{ value: 'Outros' }
												]}
												placeholder='Selecione'
												id='v-estado'
												labelText='Estado'
											/>
										</div>
								</div>								
								
								<div className='col-lg-4 col-sm-6'>
										<div className='col-drop'>
											<Dropdown
												options={[
													{ value: 'Gasolina' },
													{ value: 'Gas&oacute;leo' },
													{ value: 'H&iacute;brido' }
												]}
												placeholder='Selecione'
												id='v-combustivel'
												labelText='Combust&iacute;vel'
											/>
										</div>
								</div>

								<div className='col-lg-4 col-sm-6'>
										<div className='col-drop'>
											<Dropdown
												options={[
													{ value: 'Manual' },
													{ value: 'Manual 5 velocidades' },
													{ value: 'Manual 6 velocidades' },
													{ value: 'Híbrido' }
												]}
												placeholder='Selecione'
												id='v-caixa'
												labelText='Caixa'
											/>
										</div>
								</div>

								<div className='col-lg-4 col-sm-6'>
										<div className='col-drop'>
											<Dropdown
												options={[
													{ value: '5 portas' },
													{ value: '3 portas' },
													{ value: '4 portas' }
												]}
												placeholder='Selecione'
												id='v-portas'
												labelText='Portas'
											/>
										</div>
								</div>
								
								<div className='col-lg-4 col-sm-6'>
										<TextInput
											id='v-marca'
											placeholder='Selecione'
											labelText='Marca'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>

								<div className='col-lg-4 col-sm-6'>
										<TextInput
											id='v-cor'
											placeholder='Selecione'
											labelText='Cor'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>

								<div className='col-lg-4 col-sm-6'>
										<TextInput
											id='v-lugares'
											placeholder='Selecione'
											labelText='Lugares'
											errorClassName='error'
											doneClassName='done'
											classNameState=''
										/>
								</div>
							</div>

							<div className='row end-btn'>
								<div className='col-md-3 btn-hidden'>
									<Link to='/dashboard/new-article/basic-information'>
										<p>Anterior</p>
										<i className="fa fa-caret-square-o-left" aria-hidden="true"></i>
									</Link>
								</div>
								<div className='col-md-3 col-md-offset-6'>
									<Link to='/dashboard/new-article/more-details'>
										<p>Pr&oacute;ximo</p>
										<i className="fa fa-caret-square-o-right" aria-hidden="true"></i>
									</Link>
								</div>
							</div>
							
						</div>
					</div>
				</form>
			</div>
		);
    }
};

export default NewArticleBasicData;