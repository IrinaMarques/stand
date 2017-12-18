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
                <img src={require("standImages/road_banner_1200.jpg")} alt="Banner" />
            </div>
        );
    }
};

export default Banner;