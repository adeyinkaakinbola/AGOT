import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [signup, setsignup] = useState(null);
  const [response, setResponse] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setsignup({ ...signup, [name]: value });
  };

  const handleSubmit = async () => {
    const postData = await axios.post("/api/register", signup);
    setResponse(postData.data);
    if (typeof postData.data == "string") {
      return <Redirect to="/feed" />;
    }
  };
  console.log(response);
  return (
    <div>
      <div className="split right">
        <div className="centered ">
          <h2 className="signlabel">SIGNUP</h2>
          <input

          
            className="signup"
            name="FirstName"
            type="Text"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            className="signup"
            name="Surname"
            type="Text"
            placeholder="Surname"
            onChange={handleChange}
          />
          <input
            className="signup"
            name="UserName"
            type="Text"
            placeholder="Username"
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
            name="Password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <br />

          <p className="snup">
            <input type="checkbox" /> By checking this box you are agreeing to
            our <Link to="/Terms and conditions.">Terms and conditions.</Link>{" "}
          </p>

          <br />
          {/* <Link to="/"> */}
          <button
            onClick={handleSubmit}
            className="btn btn-register"
            type="submit"
          >
            SIGN UP
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div className="split leftsign"></div>
    </div>
  );
};
export default Signup;
