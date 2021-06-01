import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	render() {
		return (
			<div>
				<form action="http://localhost:8080/auth" method="POST">
					Usuário
					<br />
					<input type="text" id="usuario" name="usuario" />
					<br />
					Senha
					<br />
					<input type="password" id="senha" name="senha" />
					<br />
					<button>Enviar</button>
				</form>
			</div>
		);
	}
}

export default Login;
