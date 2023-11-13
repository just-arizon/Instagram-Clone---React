import React from 'react';
import "./Signup.css"
function Signup() {
  return (
    <div className='signup'>
       <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input type='email' placeholder='Email'/>
      <input type='email' placeholder='Username'/>
      <input type='password' placeholder='Password' />
      <button>Sign up</button>
    </div>
  );
}

export default Signup;
