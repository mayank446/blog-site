import React from 'react'
import './Blog.css'

import { Routes, Route, Outlet, Link } from "react-router-dom";


class Blog extends React.Component {
  render() {
    return (
      <div className='vlog'>
        <h3>blog_1</h3>
        <div className='cont'>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam tenetur totam quidem quasi tempore, rem culpa omnis quas magnam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem minima ipsam minus? Quis eligendi impedit odit, sunt, ipsum exercitationem ipsa esse perspiciatis quae reiciendis ab. Eaque dolorem itaque voluptatum non</p>
        </div>
        <div className='bottom_cont'>
            <div className='read'>
                <Link to="/single"><button className='read_btn'>..continue reading</button></Link>
            </div>
            <div className='author'>
                <p>author</p>
            </div>
        </div>
      </div>
    )
  }
}
 
export default Blog