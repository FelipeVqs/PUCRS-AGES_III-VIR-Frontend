import React from "react";
import "./commonInput.css";

const CommonInput = ({ label, placeholder }) => (
  <div className="common-input">
    <label className="input-label">{label}</label>
    <input className="input-field" placeholder={placeholder} />
  </div>
);

export default CommonInput;
