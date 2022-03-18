import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        
        <ul>
            <li><a href="/Home">HOME</a></li>
            <li><a href="/Service">SERVICE</a>
                <ul>
                    <li><a href="/Flower">FLOWERS</a></li>
                    <li><a href="/Wedding">WEDDINGS</a></li>
                    <li><a href="/Event">EVENTS</a></li>
                    <li><a href="/Workshop">WORKSHOPS</a></li>
                </ul>
            </li>
            <li><a href="/Blog">BLOG</a></li>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Contact">CONTACT</a></li>


        </ul>
    </div>
  )
}

export default Navbar