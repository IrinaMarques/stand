import React, {Component} from 'react';


class LastMessages extends Component {
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
				<ul>
					<li>
						<p>Nome Sobrenome</p>
						<p>Novo</p>
						<p>Mensagem ou ref. não sei ainda tenho que ver como caber parte da mensagem aqui ou não por só a referencia da publicação ou o assunto</p>
						<p>data</p>
						<p>icon</p>
						<p>icon</p>
					</li>
				</ul>

                { this.props.children() } 
			</div>
		);
    }
};

export default LastMessages;