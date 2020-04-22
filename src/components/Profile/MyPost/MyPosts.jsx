import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post';

const MyPosts = (props) =>{
    return (
        <div className={classes.app_content}>
            <div className={classes.main_content_wrap}>
               <div className={classes.profile_section_wrap}>
                   <img src="http://gambolthemes.net/workwise-new/images/resources/us-pic.png" alt="user"/>
                   <div className={classes.profile_info}>
                       <h3>John Doe</h3>
                        <div className={classes.create_post}>
                            <textarea placeholder="Typing..." name="create_post"></textarea>
                            <button>Add post</button>
                        </div>
                   </div>
               </div>
            </div>
       </div>
      )
}

export default MyPosts;