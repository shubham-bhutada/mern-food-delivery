import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
         <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest incredients and culinary expertise. Our mission is to satisfy your dining experience, one delicious meal at a time.</p>
            <button>View Menu</button>
         </div>
    </header>
  )
}

export default Header