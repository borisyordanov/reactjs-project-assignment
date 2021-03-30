import React from 'react';

function Login() {
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
        />

        <input
          type="password"
          id="defaultRegisterFormPassword"
          name="password"
          className="form-control"
          placeholder="Password"
        />

        <button
          className="btn btn-danger w-25 m-auto my-4 btn-block"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </>
  );
}

export default Login;
