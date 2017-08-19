import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Tabs from './Tabs';

class TabsWithHeader extends Component {
	constructor(props) {
        super(props);
        
        this._lastPathname = '';
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
        const props = this.props;
        const tabs = props.tabs;
        
        return {
            tabs       : tabs || [],
            title      : props.title || '',
            description: props.description || ''
		}
    }

    findHeaderData(location) {
        const {pathname} = location;
        
        if(!this.state.title && this._lastPathname === pathname) return;

        this._lastPathname = pathname;

        const selectedTab = this.state.tabs.filter(tab => tab.path === pathname)[0];
        const tabHeader = selectedTab.header;

        tabHeader && this.setState({
            title: tabHeader.title,
            description: tabHeader.description
        });
    }

    componentWillMount() {
        this.findHeaderData(this.props.location);
    }
    
    componentWillReceiveProps(nextProps) {
        this.findHeaderData(nextProps.location);
    }

    render() {
        const state = this.state;
		return (
			<section>
				<header className='main-header'>
					<h1 className='p-font'>{ state.title }</h1>
					<p className='s-font'>{ state.description }</p>
				</header>

				<Tabs list={ state.tabs }>
					{ this.props.children } 
				</Tabs>
            </section>
		);
    }
};

export default withRouter(props => <TabsWithHeader {...props}/>);