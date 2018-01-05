import React, { Component } from 'react';
import Radio from './radio/Radio';
import Select from './select/Select';
import Range from './range/Range';

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

                            <div className='col-sm-6 '>
                                <Radio /> 
                            </div>

                            <div className='col-sm-6 second-group'>
                                <Select />
                                <Select />
                            </div>

                            <div>
                                <Range className='price'/>
                            </div>
                            <div>
                                <Range className='kms'/>
                            </div>
                            <div>
                                <Range className='year'/>
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