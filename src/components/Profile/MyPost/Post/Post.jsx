import React from 'react';
import classes from './Post.module.css'

const Post = (props) =>{
    return (
        <div className={classes.app_content}>
        <div className={classes.main_content_wrap}>
           <div className={classes.profile_section_wrap}>
               <img src="http://gambolthemes.net/workwise-new/images/resources/us-pic.png" alt="user"/>
               <div className={classes.profile_info}>
                   <h3>John Doe</h3>
                   <div className={classes.profile_info__sub}>
                       <p>{props.post}</p>
                   </div>
               </div>
           </div>
        </div>
        <div className={classes.like_com}>
                <div className={classes.like_item}>
                <p><img src="https://image.flaticon.com/icons/svg/148/148836.svg" alt="like"/><span>Like</span><span>{props.count}</span></p>
                </div>
                <div className={classes.comment_item}>
                    <p><img src="https://image.flaticon.com/icons/svg/1946/1946374.svg" alt="comment"/><span>{props.comment}</span></p>
                </div>
            </div>
   </div>
    )
}

export default Post;