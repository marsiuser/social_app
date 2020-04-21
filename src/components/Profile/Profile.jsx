import React from 'react';
import classes from './Profile.module.css'
import Post from './MyPost/Post/Post';
import MyPosts from './MyPost/MyPosts';

const Profile = () =>{
return(
   <div className="app_wall">
        <MyPosts />
        <Post post="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ex dignissimos labore reprehenderit nihil in porro. Laborum dolore est cumque inventore odit ad, quis consequuntur, adipisci, libero repellat veritatis illum." count="15" comment="4" />
        <Post post="noting" count="4" comment="1" />
        <Post post="incliuse" count="2" comment="0" />
        <Post post="new" count="1" comment="0" />
   </div>
    );
}

export default Profile;