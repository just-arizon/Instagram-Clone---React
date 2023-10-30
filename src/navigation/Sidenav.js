import React from 'react'
import "./Sidenav.css";
function Sidenav() {
  return (
    <div className='sidenav'>
          <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

    <div className='sidenav__buttons'>
      <div className='side__button'>
        {/* Icons */}
        <span>Home</span>
      </div>
    </div>
      </div>
  )
}

export default Sidenav
