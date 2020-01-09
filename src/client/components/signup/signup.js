import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [signup, setsignup] = useState(null);
  const handleChange = e => {
    const { name, value } = e.target;
    setsignup({ ...signup, [name]: value });
  };
  console.log(signup);
  return (
    <div>
      <div className="split right">
        <div className="centered ">
          <h2 className="signlabel">SIGNUP</h2>
          <input
            className="signup"
            name="First Name"
            type="Text"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            className="signup"
            name="Surname "
            type="Text"
            placeholder="Surname"
            onChange={handleChange}
          />

          <input
            className="signup"
            name="Email"
            type="Text"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="signup"
            name="password"
            type="Text"
            placeholder="Password"
            onChange={handleChange}
          />
          <br />

          <p className="snup">
            <input type="checkbox" /> By checking this box you are agreeing to
            our <Link to="/Terms and conditions.">Terms and conditions.</Link>{" "}
          </p>

          <br />
          <Link to="/">
            <button className="btn btn-register" type="submit">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
      <div className="split leftsign"></div>
    </div>
  );
};
export default Signup;
