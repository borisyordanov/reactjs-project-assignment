import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <form className="text-center p-5 form-layout">
        <p className="h4 mb-4">Sign in</p>

        <input
          type="text"
          id="defaultRegisterFormUsername"
          name="email"
          className="form-control mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="defaultRegisterFormPassword"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-danger w-25 m-auto my-4 btn-block"
          type="submit"
          onClick={signIn}
        >
          Sign in
        </button>
      </form>
    </>
  );
}

export default Login;
