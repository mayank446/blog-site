import React from 'react'
import './Home_nav.css'

// import Link from "react-router-dom"
import { Routes, Route, Outlet, Link } from "react-router-dom";


class Home_nav extends React.Component {
  render() {
    return (
      <div className='hm_nav'>
        <div className='nav_left'>
          <Link to="/" className='pro_title'><h2>projectBlog</h2></Link>
        </div>

        <div className='nav_right'>
          <Link to="/login"><button className='login_btn'>LogIn</button></Link>
          <Link to="/register"><button className='reg_btn'>Register</button></Link>
        </div>
      </div>
    )
  }
}

export default Home_nav