import React from 'react'
import './register.css'

import Home_nav from "../components/Home_nav.jsx";

class Register extends React.Component {
  render() {
    return (
      <>
        <Home_nav />
        <body className="body">
          <div className="box">
            <form className="form">
              <h3>Register here</h3>
              <input type={"name"} placeholder="Name" />
              <input type={"email"} placeholder="Email" />
              <input type={"text"} placeholder="Username" />
              <input type={"password"} placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
        </body>
      </>
    );
  }
}

export default Register