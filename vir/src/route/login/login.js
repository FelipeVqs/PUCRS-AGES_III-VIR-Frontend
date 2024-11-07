import React from 'react';
import Form from '../../components/login_form/form';
import './login.css';
import logo_vir from '../images/logo_vir.png'; 

function Login() {
  return (
    <div className="login-container"> {/* A cor de fundo será aplicada aqui */}
      <div className='login'>
        <div className='logo'>
          <img className='logo_vir' src={logo_vir} alt="Logo VIR" />
        </div>
        <div className='form'>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Login;
