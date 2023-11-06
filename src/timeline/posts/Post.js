import React from 'react';
import "./Post.css";
import { Icon } from '@iconify/react';

function post() {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerAuthor'>
        <Icon icon="carbon:user-avatar-filled" className='postIcon'/> Arizon • <span>12h</span>
        </div>
        <Icon icon="pepicons-pop:dots-x" />
      </div>
      <div className='post__image'>
        <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
      </div>
      <div className='post__footer'>
         <div className='post__footerIcons'>
          <div className='post__iconsMain'>
          <Icon icon="carbon:favorite" className='postIcon'/>
          <Icon icon="ic:twotone-chat-bubble-outline" className='postIcon'/>
          <Icon icon="cil:send" className='postIcon'/>  
          </div>
          <div className='post__iconsSave'>
          <Icon icon="material-symbols:bookmark-outline" className='postIcon'/>
          </div>
         </div>
         Liked by 21 people

      </div>
    </div>
  );
}

export default post;
