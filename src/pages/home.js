import React from 'react'
import './home.css'

import Home_nav from '../components/Home_nav.jsx'
import Blog from '../components/Blog.jsx'

class Home extends React.Component {
  render() {
    return (
      <div className="home_body">
        <Home_nav />
        <div>
          <img
            className="home_img"
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          />
        </div>
        <div className="wrap">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        {/* <Blog/> */}
      </div>
    );
  }
}

export default Home