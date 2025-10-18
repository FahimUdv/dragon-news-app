import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-accent font-bold">Find Us On</h2>
      <div className="join join-vertical w-full mt-3">
        <button className="btn join-item bg-base-100 justify-start text-accent"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item bg-base-100 justify-start text-accent"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item bg-base-100 justify-start text-accent"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
