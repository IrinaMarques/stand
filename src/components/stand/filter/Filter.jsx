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

                    <form>
                        <div className='filter-main'>

                            <div className='radio-group'>
                                <input type='radio' id='new' name='btt'/>
                                <label for='new'> Novos </label>

                                <input type='radio' id='used' name='btt' />
                                <label for='used'> Usado </label>

                                <input type='radio' id='all' name='btt' />
                                <label for='all'> Todos </label>
                                
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
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