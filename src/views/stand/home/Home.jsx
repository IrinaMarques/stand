import React, { Component } from 'react';

class Home extends Component {
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

                <section className='news-wrapper row'>

                    <div className='header-sm col-12'>
                        <h2>Novidades</h2>
                        <div className='header-line'></div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='thumb-wrapper'>
                                <div className='slider-wrapper'>
                                    <picture className='img-container'>
                                        <source srcSet={require("../../../assets/stand/images/smart_car_800x596.jpg")} media='(min-width: 1200px)' />
                                        <source srcSet={require("../../../assets/stand/images/smart_car_800x596.jpg")} media='(min-width: 768px)' />
                                        <source srcSet={require("../../../assets/stand/images/smart_car_400x298.jpg")} media='(min-width: 480px)' />
                                        <img src={require("../../../assets/stand/images/smart_car_1024x763.jpg")} alt="Banner" />
                                    </picture>   
                                </div>

                                <div className='news-shadow'></div>
                                
                                <div className='btt-container'>
                                    <button className='back-btt'>
                                        <i className="fa fa-chevron-left"></i>
                                    </button>
                                    <button className='next-btt'>
                                        <i className="fa fa-chevron-right"></i>
                                    </button>
                                </div> 
                            </div>
                        </div>

                        <div className='text-container col-sm-6'>
                            <div className='header-lg'>
                                <h2>Novidades</h2>
                                <div className='header-line'></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, pri ea autem mundi, an cum possim maiorum cotidieque, nec idque nemore percipit ex. Ne vim quem moderatius. Volumus definiebas ut per. Dictas hendrerit voluptaria sea ut, vivendum conceptam his id. Vel cu tota admodum corpora, numquam suscipit intellegat vim eu. Te purto vide dolor est, aliquip voluptaria reprehendunt vim te. No vim diam accusata, qui liber everti signiferumque cu. Et elitr dicam nam.</p>
                            <div className='footer-lg'>
                                <div className='footer-line'></div>
                                <h3>Consulte as Novidades</h3>
                                <i className="fa fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='footer-sm col-12'>
                            <div className='footer-line'></div>
                            <h3>Consulte as Novidades</h3>
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </div>
                </section>




                <section className='opportunities'></section>
                <section className='catalog'></section>
                <section className='testimonials'></section>

            </div>
        );
    }
};

export default Home;