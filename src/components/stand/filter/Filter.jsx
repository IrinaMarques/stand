import React, { Component } from 'react';
import Radio from './radio/Radio';
import Select from './select/Select';
import Range from './range/Range';
import ButtonFilter from './bttFilter/ButtonFilter';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = this.buildState();
        return this;
    }

    buildState(nextProps) {
        return {
        }
    }

    render() {
        return (
            <div className='filter-warpper'>

                <div className='filter-container'>

                    <div className='filter-header'>
                        <div className='left-header'>
                            <h3>Filtro</h3>
                        </div>
                        <div className='right-header'>
                            <i className="fa fa-sliders" aria-hidden="true" onClick={(evt) => this.props.onToggleFilerk(evt)} ></i>
                        </div>
                    </div>

                    <form className='container-fluid' action="javascript:void(0)">
                        <div className='filter-main row'>

                            <div className="row">
                                <div className='col-sm-6 '>
                                    <Radio /> 
                                </div>

                                <div className='col-sm-6 second-group'>
                                    <Select 
                                        options={[
                                            { value: 'opcao 1' },
                                            { value: 'opcao 2' },
                                            { value: 'opcao 3' }
                                        ]}
                                        placeholder='Marca'
                                        id='marca'
                                    />
                                    <Select 
                                        options={[
                                            { value: 'opcao 4' },
                                            { value: 'opcao 5' },
                                            { value: 'xxxxxxxxxxxxxxxx sss &iacute;clo' }
                                        ]}
                                        placeholder='Consumo'
                                        id='consumo'
                                    />
                                </div>
                            </div>


                            <div className='row'>
                                <Range 
                                    className='price col-sm-12'
                                    label='Preço'
                                />
                            </div>

                            <div className='row'>
                                <Range 
                                    className='kms col-sm-12'
                                    label='Kms'
                                />
                            </div>
                            <div className='row'>
                                <Range 
                                    className='year col-sm-12'
                                    label='Ano'
                                />
                            </div>
                                
                        </div>
                        <div className='filter-footer row'>
                            <div className='col-xs-2 col-xs-offset-10'>
                                <ButtonFilter
                                    className='btt-filter'
                                />
                            </div>
                        </div>
                    </form>

                    

                </div>
            </div>
        );
    }
};

export default Filter;