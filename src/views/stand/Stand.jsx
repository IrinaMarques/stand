import React, { Component } from 'react';
import { RedirectToIndexRoute } from '../../helpers/UrlUtils';

import Header from '../../components/stand/header/Header';
import Footer from '../../components/stand/footer/Footer';

class Stand extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}

	componentWillMount() {

		return import('./Stand.scss').then(() => {
			return new Promise((resolve, reject) => {
				return setTimeout(() => {
					resolve()
				}, 50);
			})
		}).then(() => this.setState({
			stylesLoaded: true
		}));
	}

	buildState(nextProps) {
		return {
			stylesLoaded: false
		}
	}

	render() {
		const redirect = RedirectToIndexRoute(this.props);
		const { stylesLoaded } = this.state;
		if (stylesLoaded && redirect) return redirect;

		return stylesLoaded && (
			<div className='box-container'>
				<Header />

				<div className="content-main-container">

					<main className='main-box'>
						{this.props.children}
					</main>

					<Footer />
				</div>
			</div>
		) || (
			<div>
				Loading...
			</div>
		);
	}
};

export default Stand;