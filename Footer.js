import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column align-items-center float-left">
      <h4 className="text-center mb-3">All Right Reserved &copy; SJ_Jewellers
      
      </h4>
      <div className="d-flex justify-content-center">
        <p className="text-center">
          <Link to="/about">About</Link>
        </p>
        <p className="text-center mx-3">
          <Link to="/contact">Contact</Link>
        </p>
        <p className="text-center">
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
