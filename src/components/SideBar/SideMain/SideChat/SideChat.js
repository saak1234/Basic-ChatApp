import classes from './SideChat.module.css';
import React from 'react';
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom';
const SideChat=(props)=>{
   
    // const [src,setSrc]=useState("");
    // useEffect(()=>{
    //     setSrc(Math.floor(Math.random()*5000))
    // },[])
    return <Link to={`/${props.id}`} className={classes.link}><div className={classes.chat}>
        <div><Avatar src={props.photo}/></div>
        <div className={classes.message}>
            <div className={classes.roomName}>{props.roomName}</div>
           
        </div>
    </div>
</Link>}
export default SideChat;