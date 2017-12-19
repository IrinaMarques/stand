import React, { Component } from 'react';


class Banner extends Component {
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
            <div className='banner_img'>
                <picture>
                    <source srcSet={require("standImages/road_banner_1200.jpg")} media='(min-width: 1200px)'/>
                    <source srcSet={require("standImages/road_banner_1200.jpg")} media='(min-width: 800px)'/>
                    <source srcSet={require("standImages/road_banner_800.jpg")} media='(min-width: 480px)'/>
                     <source srcSet={require("standImages/road_banner_480.jpg")} media='(min-width: 320px)'/>
                    <img src={require("standImages/road_banner_1200.jpg")} alt="Banner" />
                </picture>
            </div>
        );
    }
};

export default Banner;