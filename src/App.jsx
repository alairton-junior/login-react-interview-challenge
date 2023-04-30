import { login } from './utils';
import './index.css';
import { useEffect, useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.✅
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.✅
// todo - Desabilite o botão de Login equanto você está executando o login. ✅
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login. ✅
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.✅

export default function LoginForm() {

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {
    if(email && password.length >= 6) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, [email, password])

  function handleLogin() {
      const user = {email: email, password: password}

      setEmail('')
      setPassword('')
      setErrorMessage(null)

      login(user)
        .then(() => {
          alert('Login realizado com sucesso.');
        })
        .catch((error) => {
          setErrorMessage(error.message)
        .finally(() => {
          setIsLogin(true)
        })
    });

  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {errorMessage ? <div className='errorMessage'>{ errorMessage }</div> : null}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='button'>
          <button disabled={isLogin} onClick={handleLogin} >Login</button>
        </div>
      </div>
    </div>
  );
}
