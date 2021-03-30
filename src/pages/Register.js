import React from 'react';

function Register() {
  return (
    <>
      <form className="text-center p-5 form-layout">
        <p className="h4 mb-4">Sign up</p>

        <input
          type="text"
          id="defaultRegisterFormUsername"
          className="form-control mb-4"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          id="defaultRegisterFormPassword"
          className="form-control"
          name="password"
          placeholder="Password"
        />

        <input
          type="password"
          id="defaultRegisterRepeatPassword"
          className="form-control"
          name="repeatPassword"
          placeholder="Repeat Password"
        />
        <button
          className="btn btn-danger my-4 btn-block w-25 m-auto"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </>
  );
}

export default Register;
