import React, { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://172.17.120.209:8000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Sucesso!', data);
    });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <form onSubmit={ handleSubmit }>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          inputMode="email"
          autoComplete="username"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
}