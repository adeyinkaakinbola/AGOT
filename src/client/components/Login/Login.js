import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/icons/search.svg";

const Login = () => {
  const [logins, setLogins] = useState(null);
  const handleChange = e => {
    const { name, value } = e.target;
    setLogins({ ...logins, [name]: value });
  };
  console.log(logins);
  return (
    <div>
      <div className="split loginright">
        <div className="centered ">
          <h2>LOGIN</h2>
          <input
            className="loginput"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="loginput"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Link to="/">
            {" "}
            <button className="btn btn-sign" type="submit">
              LOG IN
            </button>
          </Link>
          <p className="snup">
            Don't have an account?<Link to="/signup"> signup</Link>
          </p>
          <div className="loginwith d-flex p-2">
            <span>
              <img src={google} alt="google" align="left" />
            </span>
            {"  "}
            <p>
              <strong>Sign in with google</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="split left">
        <h5>
          "It's not the load that breaks you down,it's the way you carry it."
        </h5>
      </div>
    </div>
  );
};
export default Login;
