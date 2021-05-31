import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div>
				<form action="/home" method="">
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
