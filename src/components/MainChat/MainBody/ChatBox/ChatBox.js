import React,{useContext} from 'react'
import classes from './ChatBox.module.css'
import AuthContext from '../../../authcontext'
const ChatBox = (props) => {
  const ctx=useContext(AuthContext);
 
  const sent=ctx.userName===props.name?classes.receiver:classes.sender; 
  const name=ctx.userName===props.name?"you":props.name;
  return (<div className={classes.chat}>
    <div className={classes.chatbox}> 
    <div className={sent}>
      <p className={classes.name}>{name}</p>
      <div className={classes.message}>{props.message}</div>
    <p className={classes.time}>{props.time}</p>
    </div>
    
    </div>  
  </div> 
  )
}

export default ChatBox