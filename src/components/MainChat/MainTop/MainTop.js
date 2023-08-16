import classes from './MainTop.module.css'
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const MainTop =(props)=>{
    return<div className={classes.top}> 
        <Avatar src={props.photo}/>
        <h2 className={classes.chatName}>{props.chatName}</h2>
        <div className={classes.right}><SearchIcon/>
        <AttachFileIcon/>
        <MoreVertIcon/></div>
        
    </div>
}
export default MainTop;