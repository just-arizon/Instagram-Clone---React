import React from 'react';
import "./Post.css";
import { Icon } from '@iconify/react';

function post({user, postImage, Likes, timestamps}) {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerAuthor'>
        <Icon icon="carbon:user-avatar-filled" className='postIcon'/> {user} • <span>{timestamps}</span>
        </div>
        <Icon icon="pepicons-pop:dots-x" />
      </div>
      <div className='post__image'>
        <img src={postImage} alt=''/>
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
         Liked by {Likes} people

      </div>
    </div>
  );
}

export default post;
