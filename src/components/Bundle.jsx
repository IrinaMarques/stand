import React, {Component} from 'react';

class Bundle extends Component {
    constructor(props) {
        super(props);
        this.state = this.stateBuild();
        return this;
    }

    stateBuild(mod) {
        return {
            mod: (mod !== undefined ? mod : null) // short for "module" but that's a keyword in js, so "mod"
        }
    }

    updateState(opt) {
        this.setState(this.stateBuild(opt));
        return this;
    }

    componentWillMount() {
        this.load(this.props);
        return this;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) this.load(nextProps);
        return this;
    }
    
    load(props) {
            
        this.updateState(null);
        props.load((mod) => {
            const es6ModFallback = (mod.default ? mod.default : mod);
            
            //console.log("%c COMPONENT LOADED ", 'background: #5d9836; color: #fff', es6ModFallback.name);
            this.updateState(es6ModFallback);
        });
        return this;
    }

    render() {
        return (this.state.mod ? this.props.children(this.state.mod) : null)
    }
};

export default Bundle;