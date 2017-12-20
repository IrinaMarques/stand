import React, { Component } from 'react';


const focusClassName = 'focus';
const openClassName = 'filter-open';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = this.buildState();
        return this;
    }

    buildState(nextProps) {
        return {
            focusClassName: '',
            openClassName: ''
        }
    }

    onFocusSearchInput() {
        this.setState({
            focusClassName: focusClassName
        });
        return this;
    }

    onBlursSearchInput() {
        this.setState({
            focusClassName: ''
        });
        return this;
    }

    toggleFiler() {
        const { state } = this;

        this.setState({
            openClassName: state.openClassName ? '' : openClassName
        });
        return this;
    }

    render() {
        const { focusClassName, openClassName } = this.state;

        return (
            <div className={`search-container ${focusClassName} ${openClassName}`}>
                <div className='search-text'>
                    <h2>Pesquisa Rápida</h2>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, an usu regione definitionem, facer gloriatur at qui. Case nonumy ea duo, aliquam indoctum persecuti id has.</p>
                </div>
                <div className='search-form'>
                    <form action='javascript:void(0)'>
                        <div className='inp-btt-warper'>
                            <input type="text" placeholder='Pesquisa' onFocus={(evt) => this.onFocusSearchInput(evt)} onBlur={(evt) => this.onBlursSearchInput(evt)}/>
                            <button className='pesquisa'>
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>

                            <button className='filtro' onClick={(evt) => this.toggleFiler(evt)}>
                                <i className="fa fa-sliders" aria-hidden="true"></i>
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Search;