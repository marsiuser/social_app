import React from 'react';
import classes from './../Dialogs.module.css'


const CurrentMessage = (props) => {
    let messageData=[
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur'},
        {id: 2, message: 'Lorem ipsum dolor'},
        {id: 3, message: 'Lorem ipsum dolor sit amet'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur'},
        {id: 6, message: 'News'},
        {id: 7, message: 'Hello'}
    ]
    return(
        <div className={classes.wrapper}>
            <div className={classes.text_message_wrap}>
                <div className={classes.text_message_box}>
                <p>{messageData[4].message}</p>
                </div>
                <div className={classes.message_date}>
                    <span>{props.current_date}</span>
                </div>
            </div>
            <div className={classes.user_avatar}>
                <img src={props.your_avatar} alt="your avatar"/>
            </div>
        </div>
    )
}

export default CurrentMessage;