import React, { Component } from 'react';

class Home extends Component {
	constructor() {
		super();
		this.state = { nome: '' };
	}
	render() {
		return (
			<div>
				<p>Bem-vindo { this.state.nome } </p>
			</div>
		);
	}
}

export default Home;
