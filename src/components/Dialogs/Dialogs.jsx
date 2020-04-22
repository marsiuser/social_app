import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import CurrentMessage from './CurrentMessage/CurrentMessage';

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
    let dialogsElements = props.dialogsData.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id} shortMes={dialog.shortMes} avatar={dialog.avatar} /> );
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