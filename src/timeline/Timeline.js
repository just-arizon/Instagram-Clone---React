import React, { useState } from 'react';
import './Timeline.css'

import Post from './posts/Post';
import Story from './story';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Arizon",
      postImage: "https://images.pexels.com/photos/531474/pexels-photo-531474.jpeg?auto=compress&cs=tinysrgb&w=600",
      Likes: 12,
      timestamps: "4h  ago",
    }
    ,
    {
      user: "Magret Jennifer",
      postImage: "https://images.pexels.com/photos/1101726/pexels-photo-1101726.jpeg?auto=compress&cs=tinysrgb&w=600",
      Likes: 56,
      timestamps: "1d ago",
    }
    ,
    {
      user: "James Burden",
      postImage: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
      Likes: 102,
      timestamps: "2h ago",
    }
    ,
    {
      user: "Christian",
      postImage: "https://images.pexels.com/photos/765217/pexels-photo-765217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Likes: 122,
      timestamps:  "2d",
    }
    
  ]);
  return (
    <div className='timeline'>
     {/* <div className="story">
      <Story /> 
     </div> */}
         <div className='timeline__container'>
           <div className='timeline__left'>
             <div className='timeline__post'>
             {posts.map((post) => (
              <Post
              user={post.user}
              postImage={post.postImage}
              Likes={post.Likes}
              timestamps={post.timestamps}
            />
            ))}
             </div>
                   </div>
                   <div className='timeline__right'>
                   </div>
         </div>
    </div>
  )
}

export default Timeline