import React, { useState } from "react";
import React from 'react';
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";
function Authentication() {
  return (
    <div className='authenticate container'>
      <div className='auth__left'>
      <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
        />
      </div>
      <div className='auth__right'>
      <Signup />

        <div className='auth__more'>
          <span>Don't have an account? <button>Sign up</button></span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
