import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) =>{
    return (
        <NavLink to={"/dialogs/"}>
        <div className={classes.gialog_item}>
            <div className={classes.usr_dialog__img}>
                <img src={props.avatar} alt="user"/>
            </div>
            <div className={classes.usr_dialog_info}>
                <h4>{props.name}<span>{props.date}</span></h4>
                <p>{props.shortMes}</p>
            </div>
        </div>
        </NavLink>
    )
}

const DialogOpenUser = (props) => {
    return (
        <div className={classes.message_bar__head}>
        <div className={classes.gialog_item_this}>
            <div className={classes.gialog_item_this_img}>
                <img src={props.open_avatar} alt="user"/>
            </div>
            <div className={classes.usr_dialog_info_online}>
            <h4>{props.open_name}</h4>
                <p>{props.open_status}</p>
            </div>
        </div>
    </div>
    )
}

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

const CurrentFriendMes = (props) => {
    return (
     <div className={classes.wrapper}>
        <div className={classes.user_avatar}>
            <img src="http://gambolthemes.net/workwise-new/images/resources/m-img1.png" alt="friend "/>
        </div>
        <div className={classes.text_message_wrap}>
            <div className={classes.text_message_box_friend}>
                <p>Quasi possimus iure quo consectetur neque rerum saepe itaque minima reiciendis sed.</p>
            </div>
            <div className={classes.message_date}>
                <span>Now</span>
            </div>
        </div>
    </div>
    )
}

const Dialogs = (props) =>{
    let dialogsData=[
        {id: 1, name: 'Arina Chubyr', shortMes: 'smotri eto ti', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png' },
        {id: 2, name: 'Polina Demina', shortMes: 'hello', avatar: 'http://gambolthemes.net/workwise-new/images/resources/m-img1.png'},
        {id: 3, name: 'Kirill Stepka', shortMes: 'how do  you sho', avatar: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png'},
        {id: 4, name: 'Nikita Taraban', shortMes: 'create react app', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
        {id: 5, name: 'Karina Berry', shortMes: 'illya pribsdfj', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
        {id: 6, name: 'Illya Sirnik', shortMes: 'letoeo sgjjwd', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
        {id: 7, name: 'Mash Noyu', shortMes: ' good lack', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
        {id: 8, name: 'Arina Chubyr', shortMes: 'smotri eto ti', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png' },
        {id: 9, name: 'Polina Demina', shortMes: 'hello', avatar: 'http://gambolthemes.net/workwise-new/images/resources/m-img1.png'},
        {id: 10, name: 'Kirill Stepka', shortMes: 'how do  you sho', avatar: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png'},
        {id: 11, name: 'Nikita Taraban', shortMes: 'create react app', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
        {id: 12, name: 'Karina Berry', shortMes: 'illya pribsdfj', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
        {id: 13, name: 'Illya Sirnik', shortMes: 'letoeo sgjjwd', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
        {id: 14, name: 'Mash Noyu', shortMes: ' good lack', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'}
    ]
    
    let dialogsElements = dialogsData.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id} shortMes={dialog.shortMes} avatar={dialog.avatar} /> );
    return  (
        <div className="app_wall">
            <div className={classes.gialogs_wrap}>
                <div className={classes.list_gialog__all}>
                    {dialogsElements}
                </div>
                <div className={classes.dialogs_messages__all}>
                    <DialogOpenUser open_avatar="http://gambolthemes.net/workwise-new/images/resources/m-img1.png" open_name="John Doe" open_status="Online" />
                    <div className={classes.single_dialog}>
                        <div className={classes.your_message}>
                            <CurrentMessage text_message="" current_date="Sat, Aug 23, 00:08 PM" your_avatar="http://gambolthemes.net/workwise-new/images/resources/m-img2.png" />
                        </div>
                        <div className={classes.friend_message}>
                           <CurrentFriendMes />
                        </div>
                        <div className={classes.your_message}>
                            <CurrentMessage text_message="" current_date="5 minutes ago" your_avatar="http://gambolthemes.net/workwise-new/images/resources/m-img2.png" />
                        </div>
                        <div className={classes.your_message}>
                            <CurrentMessage text_message="" current_date="3 minutes ago" your_avatar="http://gambolthemes.net/workwise-new/images/resources/m-img2.png" />
                        </div>
                        <div className={classes.friend_message}>
                            <CurrentFriendMes text_message="Lorem ipsum dolor sit amet, consectetur" />
                        </div>
                        <div className={classes.friend_message}>
                            <CurrentFriendMes text_message="Lorem ipsum dolor sit amet, consectetur" />
                        </div>
                        <div className={classes.friend_message}>
                            <CurrentFriendMes text_message="Lorem ipsum dolor sit amet, consectetur" />
                        </div>
                    </div>
                    <div className={classes.send_message_area}>
                        <form action="submit">
                            <div className={classes.type_message}>
                                <input type="text" name="message" placeholder="Type a message here"/>
                                <button type="submit">Send</button>
                            </div>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;