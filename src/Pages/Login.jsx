import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h1 className="text-2xl text-center my-5 font-semibold">Login your account</h1>
          <fieldset className="fieldset">
            <label className="label font-bold">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label font-bold">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-accent text-center my-5">Dont’t Have An Account ? <Link className="text-secondary" to='/auth/register'>Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
