import React from 'react'
import "./Sidenav.css";
import { Icon } from '@iconify/react';
function Sidenav() {
  return (
    <div className='sidenav'>
          <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

    <div className='sidenav__buttons'>
      <button className='sidenav__button'>
        {/* Icons */}
        <Icon icon="teenyicons:home-solid" />
        <span>Home</span>
      </button>
      <button className='sidenav__button'>
        {/* Icons */}
        <Icon icon="bi:search" />
        <span>Search</span>
      </button>
      <button className='sidenav__button'>
        {/* Icons */}
        <Icon icon="ic:round-explore" />
        <span>Explore</span>
      </button>
      <button className='sidenav__button'>
        {/* Icons */}
        <Icon icon="bi:camera-reels-fill" />
        <span>Reels</span>
      </button>
      <button className='sidenav__button'>
        {/* Icons */}
        <Icon icon="jam:messages-f" />
        <span>Messages</span>
      </button>
      <button className='sidenav__button'>
        {/* Icons */}
        <Icon icon="mdi:heart" />
        <span>Notications</span>
      </button>
      <button className='sidenav__button'>
        {/* Icons */}
        <Icon icon="ph:plus-fill" />
        <span>Create</span>
      </button>
    </div>
    <div className='sidenav__more'>
      <button className='sidenav__button'>
      <Icon icon="ic:round-menu" />
      <span>More</span>
      </button>
    </div>
  </div>
  )
}

export default Sidenav
