import React from 'react'
import "./navbar.scss"
import CreateButton from '../buttons/CreateButton'
import LogOutButton from '../buttons/LogOutButton'

const Navbar = () => {
  return (
    <div className='navContainer'>
    <div className='logoContainer'>
        <img className='logoImage' src="assets/icons/Logo.svg" alt="logo" />
    </div>
    
    <div className='userNavContainer'>
    <div className='searchContainer'>
        <input type="text" placeholder='Search...' />
    <img className='searchImage' src="assets/icons/Glass-icon.svg" alt="search" />
    </div>
    <button>
    <img className='homeImage' src="assets/icons/Home-icon.svg" alt="home" />
    </button>
    <CreateButton/>
    <LogOutButton/>
        <button>
    <img className='avatarImage' src="assets/icons/Avatar-icon.svg" alt="avatar" />
        </button>
        
    </div>
    </div>
  )
}

export default Navbar