import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Header'> 
        <h1>This is a header</h1>

        <div className="header-left">
            <img src="" alt=""></img>
        </div>

        <div className="header-right">
        {/* SearchIcon */}
        <input type="text"></input>
        </div>
    </div>
  )
}

export default Header