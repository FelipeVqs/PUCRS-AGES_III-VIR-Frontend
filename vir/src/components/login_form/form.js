import React, { useState } from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('https://virback.totalclan.com.br/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), // Converte os dados do usuário para JSON
      });

      if (response.ok) {
        // Login bem-sucedido
        const result = await response.json();
        console.log(result); // Verificar a resposta do servidor

        // Salva o access token no localStorage para futuras requisições
        localStorage.setItem('access_token', result.access_token);

        // Redireciona para a página home após o login bem-sucedido
        navigate('/Bookshelf');
      } else if (response.status === 401 || response.status === 403) {
        // Login falhou, exibir mensagem de erro
        setError('Credenciais inválidas. Verifique seu e-mail e senha.');
      } else {
        // Lida com outros erros que não são de autenticação
        setError('Ocorreu um erro. Tente novamente mais tarde.');
      }

    } catch (error) {
      console.error('Error sending data:', error);
      setError('Erro ao conectar ao servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='container'>
        <div className='container_email'>
          <p className='text'>Email</p>
          <input
            id='email'
            type='email'
            className='input'
            placeholder='nome-sobrenome@escola.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='container_senha'>
          <p className='text'>Senha</p>
          <input
            id='password'
            className='input'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>} {/* Exibe a mensagem de erro, se existir */}

        <button type='submit' className='button_entrar'>Entrar</button>
      </form>
    </div>
  );
};

export default Form;
