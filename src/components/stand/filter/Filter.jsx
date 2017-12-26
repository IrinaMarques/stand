import React, { Component } from 'react';

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
                            <i className="fa fa-sliders" aria-hidden="true"></i>
                        </div>
                    </div>

                    <form className='container-fluid' action="javascript:void(0)">
                        <div className='filter-main row'>

                            <div className='radio-group col-md-6'>
                                <input type='radio' id='new' name='btt' value='new'/>
                                <label htmlFor='new'> Novos </label>

                                <input type='radio' id='used' name='btt' value='used'/>
                                <label htmlFor='used'> Usado </label>

                                <input type='radio' id='all' name='btt' value='all'/>
                                <label htmlFor='all'> Todos </label> 
                            </div>

                            <div className='select-group col-md-6'>
                                <div className='text-group'>
                                    <button className='text-control'>Selecione</button>
                                    <div className='text-line'></div>
                                    
                                    <ul className='dropdown'>
                                        <li>hhh</li>
                                    </ul>
                                </div>
                                <div className='text-group'>
                                    <input type='text' className='text-control' placeholder='Selecione'/>
                                    <div className='text-line'></div>
                                    <div className='dropdown'></div>
                                </div>
                            </div>

                            <div className='range-price'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                                
                            <div className='range-kms'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>    

                            <div className='range-year'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </form>

                    <div className='filter-footer'>
                        <button>
                            <h3>Proximo</h3>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </button>
                    </div>

                </div>
            </div>
        );
    }
};

export default Filter;