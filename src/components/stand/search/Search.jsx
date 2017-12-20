import React, { Component } from 'react';


class Search extends Component {
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
            <div>
                <div className='search-container'>
                    <div className='search-text'> 
                        <h2>Pesquisa Rápida</h2>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, an usu regione definitionem, facer gloriatur at qui. Case nonumy ea duo, aliquam indoctum persecuti id has.</p>
                    </div>
                    <div className='search-form'>
                        <form>
                            <div className='inp-btt-warper'>
                                <input type="text" placeholder='Pesquisa'/>
                                <button classeName='Pesquisa'>
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>

                                <button className='filtro'>
                                    <i className="fa fa-sliders" aria-hidden="true"></i>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Search;