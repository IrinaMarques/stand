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
			<div className='msg-box'>
				<dl className='container-fluid'>
					<dt className='row v-list v-none'>
						<div className='col-xs-10 v-name'>
							<h5>Nome</h5>
						</div>
						<div className='col-xs-2 v-number'>
							<i className="fa fa-eye" aria-hidden="true"></i>
						</div>
					</dt>

					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>Volkswagen Orange Van</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>50</p>
						</div>
					</dd>
					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>Mercedes Light Grey</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>47</p>
						</div>
					</dd>
					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>BMW Black</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>36</p>
						</div>
					</dd>
					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>BMW White</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>25</p>
						</div>
					</dd>
					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>Range Rover</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>20</p>
						</div>
					</dd>
					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>Seat Black</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>13</p>
						</div>
					</dd>
					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>Beetle Blue</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>7</p>
						</div>
					</dd>
					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>Harley Black</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>3</p>
						</div>
					</dd>
					<dd className='row v-list'>
						<div className='col-xs-10 v-name'>
							<p>Peugeot</p>
						</div>
						<div className='col-xs-2 v-number'>
							<p>1</p>
						</div>
					</dd>

				</dl>

                { this.props.children } 
			</div>
		);
    }
};

export default ArticlesStatistics;