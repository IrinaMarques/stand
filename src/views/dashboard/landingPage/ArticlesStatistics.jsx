import React, {Component} from 'react';


class ArticlesStatistics extends Component {
	constructor(props) {
		super(props);
		this.state = this.buildState();
		return this;
	}
    
	buildState(nextProps) {
		return nextProps || {
		}
	}

    render() {
		return (
			<div>
				<ul className='container-fluid'>
					<li className='row v-list v-none'>
						<div className='col-xs-10 v-name'>
							<h3>Nome</h3>
						</div>
						<div className='col-xs-2 v-number'>
							<i className="fa fa-eye" aria-hidden="true"></i>
						</div>
					</li>

					<li className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>Volkswagen Orange Van</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>50</p>
						</div>
					</li>

				</ul>

                { this.props.children } 
			</div>
		);
    }
};

export default ArticlesStatistics;