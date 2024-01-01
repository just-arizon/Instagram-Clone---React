import React from 'react';
import "./Homepage.css";
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';
import Suggestion from './timeline/Suggestion';


function Homepage() {
  return (
    <div className='homepage'>
      <div className="homepage__nav">
       <Sidenav />

      </div>
      <div className="homepage__timeline">
      <Timeline />  
      </div>
      <div className="homepage__suggestion">
      <Suggestion />
      </div>
    </div>
  );
}

export default Homepage;