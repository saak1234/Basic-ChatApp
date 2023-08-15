import React,{useState} from 'react'
import {auth,provider} from '../firebaseConfig';
import {signInWithPopup} from 'firebase/auth';

const AuthContext =React.createContext({
    isLoggedIn:false,
    onLogIn:()=>{},
    userName:false,
    photo:false,
})
  export const AuthContextProvider=(props)=>{
    const [userName,setUserName]=useState('')
    const [isLoggedIn,setLoggedIn]=useState(false);
    const [photo,setPhoto]=useState('')
    const loginHandler=()=>{
        
        signInWithPopup(auth,provider).then((result)=>
       {
        const user=auth.currentUser;
        if(user){
            setLoggedIn(true);
        }
        setUserName(user.displayName);
        setPhoto(user.photoURL)
        }
        )
    }
    // const loginHandler=()=>{
    //     console.log("working-2")
    // }
    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn,userName:userName,onLogIn:loginHandler,photo:photo}}>
    {props.children}</AuthContext.Provider>
  }

export default AuthContext