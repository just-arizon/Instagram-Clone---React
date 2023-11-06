import React, { useState } from 'react';
import './Timeline.css'
import Suggestion from './Suggestion';
import Post from './posts/Post';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Arizon",
      postImage: "https://www.pexels.com/photo/silhouette-of-man-standing-near-body-of-water-1136571/",
      Likes: 12,
      timestamps: "4hr ago",
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
         <div className='timeline__left'>
           <div className='timeline__post'>
           {posts.map((post) => (
            <Post />
          ))}
           </div>
        </div>
        <div className='timeline__right'>
        <Suggestion />
        </div>
    </div>
  )
}

export default Timeline