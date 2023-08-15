import { Avatar } from '@mui/material';
import React,{useContext} from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classes from './SideTop.module.css'
import AuthContext from '../../authcontext';
const SideTop=()=>{
    const ctx=useContext(AuthContext);
  
    return<div className={classes.top}>
        <div className={classes.left}>
        <Avatar src={ctx.photo} />
        <h4 className={classes.userName}>{ctx.userName}</h4>
        </div>
        
        <div className={classes.right}>
        <DonutLargeIcon/>
        <ChatIcon/>
        <MoreVertIcon/>
        </div>
        
        
        
    </div>
}
export default SideTop;