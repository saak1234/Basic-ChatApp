import React,{useContext} from 'react'
import classes from './Login.module.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AuthContext from '../../authcontext';
// import {auth,provider} from '../../../firebaseConfig';
// import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
const Login = () => {
    
    // const loginHandler=()=>{
    //     signInWithPopup(auth,provider).then((result)=>
    //    {
    //     const user=auth.currentUser;
    // console.log(user.displayName);}
    //     )
    // }
    const ctx=useContext(AuthContext);
    // const onLogIn=()=>{
    //     console.log("working-1")
    // }
  return (
    <React.Fragment> <div className={classes.container}>
      <h2 className={classes.chatRoom}>Welcome to your ChatRoom</h2>
        <div className={classes.whatsup}><WhatsAppIcon  fontSize="1.2em" className={classes.login}/></div>
        <button className={classes.button} onClick={ctx.onLogIn}>Sign in with Google</button>
    </div></React.Fragment>
   
  )
}

export default Login