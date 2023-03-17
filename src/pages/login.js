import React, { Component } from 'react'
import './register.css'

import Home_nav from '../components/Home_nav.jsx'

class LogIn extends Component {
  render() {
    return (
      <>
        <Home_nav />
        <body className="body">
          <div className="box">
            <form className="form">
              <h3>LogIn here</h3>
              <input type={"text"} placeholder="Username" />
              <input type={"password"} placeholder="Password" />
              <button>LogIn</button>
            </form>
          </div>
        </body>
      </>
    );
  }
}

export default LogIn