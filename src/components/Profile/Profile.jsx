import React from 'react';
import classes from './Profile.module.css'
import Post from './MyPost/Post/Post';
import MyPosts from './MyPost/MyPosts';

const Profile = (props) =>{
let postsElement = props.posts.map( p => <Post post={p.post} count={p.count} comment={p.comment} />)
return(
   <div className="app_wall">
        <MyPosts />
       {postsElement}
   </div>
    );
}

export default Profile;