import React from 'react';
import classes from './../Dialogs.module.css'
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

export default DialogItem;