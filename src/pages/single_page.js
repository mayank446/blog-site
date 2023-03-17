import React from 'react'
import './single_page.css'

import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

import Home_nav from '../components/Home_nav.jsx'

class SinglePage extends React.Component {
  render() {
    return (
      <>
        <Home_nav/>
        <div className='sp_wrap'>
            <div className='sp_back_btn'>
                <NavLink to="/" className='back_link'>Back</NavLink>
            </div>
            <h2>Lorem ipsum dolor sit</h2>
            <img src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' className='sp_img'/>
            <div className='sp_content'>
                
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci enim sequi dolorum, doloremque vero dolor hic qui, aliquid neque culpa deleniti perspiciatis illum? Possimus expedita amet esse unde, aliquid nemo reiciendis! Cum magnam magni quo in animi? Rem corporis aliquam suscipit repudiandae, placeat iusto consequatur voluptatem error eaque deserunt, ipsam numquam enim beatae, incidunt voluptatum iste adipisci alias et. Architecto modi laborum accusamus nemo numquam debitis veniam veritatis eligendi!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ab sit numquam at, sequi molestiae delectus! Excepturi earum vero, repellat, a asperiores itaque voluptate tenetur eligendi magnam recusandae veniam quisquam voluptates culpa, fugiat tempore molestiae numquam laboriosam tempora animi rem. Optio nostrum magnam aliquid temporibus nobis iusto cumque exercitationem reiciendis, expedita praesentium animi, adipisci deserunt asperiores totam, dolore porro perspiciatis unde. Explicabo repudiandae eius magni possimus ea voluptate ducimus numquam suscipit, quibusdam obcaecati, id eum voluptatibus fugit in ad doloremque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt deleniti adipisci officia eos magni libero! Neque ducimus, vel recusandae ratione atque id magni cumque voluptatum commodi consectetur molestiae aspernatur architecto tempore dolor unde adipisci deserunt. Error delectus in tempore quaerat? Similique molestias impedit, ullam aperiam recusandae repellat laboriosam laborum animi sint sunt iste fugit, magni explicabo placeat accusamus tempora perferendis quaerat repellendus aspernatur necessitatibus quae ex ut consequatur eligendi. Soluta asperiores ipsa eum sapiente nobis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur doloremque illum vero cumque, eos sit tenetur fuga praesentium mollitia numquam doloribus itaque pariatur eum officiis id iure odit ea consequuntur temporibus corporis rerum quis! Similique iure distinctio perferendis placeat? Maxime hic perferendis, nulla molestias illum quod voluptates aspernatur fugiat voluptatibus voluptatem sit cupiditate?</p>

            </div>
        </div>
      </>
    )
  }
}

export default SinglePage