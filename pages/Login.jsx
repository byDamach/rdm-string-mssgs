import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo_mercafam from '@logos/logo_mercafam.png';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo_mercafam} alt="logo_mercafam" className="logo-mercafam" />
				<div className="input-tags">
					<input type="text" name="email" className="input input-email" required/>
					<label htmlFor="email" >Correo electrónico</label>
				</div>
				<div className="input-tags">
					<input type="password" name="password" className="input input-password" required/>
					<label htmlFor="password"  >Contraseña</label>
				</div>
				<div className="remember-forgot">
					<label><input type="checkbox" />Recuerdame</label>
					<a className="forgotten-password" href="/">Olvide mi contraseña</a> 
				</div>
				<button type='submit'
					onClick={handleSubmit}
					className="primary-button login-button">
					Entrar
				</button>
				<div className='sign-up'>
					<p>¿cliente nuevo?</p>
					<a href="#">crea una cuenta</a>
				</div>
			</div>
		</div >
	);
}

export default Login;

