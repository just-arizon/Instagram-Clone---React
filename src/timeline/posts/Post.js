import React from 'react';
import "./Post.css";
import { Icon } from '@iconify/react';

function post() {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerAuthor'>
        <Icon icon="carbon:user-avatar-filled" /> Arizon . <span>12h</span>
        </div>
      </div>
      <div className='post__image'>

      </div>
      <div className='post__footer'>

      </div>
    </div>
  );
}

export default post;
