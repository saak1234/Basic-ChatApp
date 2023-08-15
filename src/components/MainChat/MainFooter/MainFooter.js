import React, { useState,useContext } from 'react'
import classes from './MainFooter.module.css'
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import MicIcon from '@mui/icons-material/Mic';
import {collection, doc,setDoc} from 'firebase/firestore/lite';
import { useParams } from 'react-router-dom';
import AuthContext from '../../authcontext';
import { db } from '../../../firebaseConfig';
const MainFooter = (props) => {
  const ctx=useContext(AuthContext)
  const params=useParams();
  const id= params.roomid;
  const [input,setInput]=useState('')
  const changeHandler=(e)=>{
    setInput(e.target.value);
  }
  const messageHandler=async()=>{
    if (input){
       const currentDateTime = new Date();

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    
    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(currentDateTime);
    await setDoc(doc(collection(db,`Rooms/${id}/message`)),{
      name:ctx.userName,
      message:input,
      timestamp:formattedDateTime,
    })
    setInput('')
    console.log('cllick')
    props.messageSent();
  }
    }
   
  return (
    <div className={classes.footer}>
        <SentimentSatisfiedIcon/>
        <input type="text" placeholder='Type a message' onChange={changeHandler} value={input}  onKeyPress={(e) => {
          if (e.key === 'Enter') {
            messageHandler();
          }
        }}/>
        <MicIcon/>
        <div className={classes.sent}><SendIcon onClick={messageHandler}/></div>
        </div>
  )
}

export default MainFooter