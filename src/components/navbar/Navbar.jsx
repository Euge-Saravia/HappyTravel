import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navContainer'>
    <div className='logoContainer'>
        <img className='logoImage' src="public/assets/icons/Logo.svg" alt="logo" />
    </div>
    
    <div className='userNavContainer'>
    <div className='searchContainer'>
        <input type="text" placeholder='Search...' />
    <img className='searchImage' src="public/assets/icons/Glass-icon.svg" alt="search" />
    </div>
        <img className='homeImage' src="public/assets/icons/Home-icon.svg" alt="home" />
        <img className='avatarImage' src="public/assets/icons/Avatar-icon.svg" alt="avatar" />
    </div>
    </div>
  )
}

export default Navbar