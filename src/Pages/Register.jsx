import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center my-5 font-semibold">
            Register your account
          </h1>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-bold">Your Name</label>
            <input type="text" className="input" placeholder="Enter your name" />

            {/* photo url */}
            <label className="label font-bold">Photo URL</label>
            <input type="text" className="input" placeholder="Your photo url" />



            {/* email */}
            <label className="label font-bold">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label font-bold">Password</label>
            <input type="password" className="input" placeholder="Password" />
            
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-accent text-center my-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
