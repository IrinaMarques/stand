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
            <div>
                <img src={require("dashboardImages/brand-50px.png")} alt="Banner" />
            </div>
        );
    }
};

export default Banner;