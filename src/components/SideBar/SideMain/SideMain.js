import React,{ useState,useEffect} from 'react';
import classes from './SideMain.module.css'
import SearchIcon from '@mui/icons-material/Search';
import SideChat from './SideChat/SideChat';
import {db} from '../../../firebaseConfig';
import { collection,getDocs,addDoc} from 'firebase/firestore/lite';

const SideMain=(props)=>{
    const [chats,setChats]=useState([])
    const collectionRef=collection(db,"Rooms")
    const [src,setSrc]=useState(5000);
    const [input,setInput]=useState('');
    const [searchChat,setSearchChat]=useState({});
    const [search,setSearch]=useState(false);
    useEffect(()=>{
        async function fetchData(){
        
        const data=await getDocs(collectionRef);
        setChats(data.docs.map(doc=>({
            id:doc.id,
            data:doc.data(),
        })))}
   fetchData();
    },[collectionRef])  
    const addHandler=()=>{
        
        const newName=prompt("Enter new Room");
        if(newName){
        setSrc(Math.floor(Math.random()*5000))
        console.log(src);
            const newData={
            name:newName,
            photo:`https://robohash.org/${src}`,
        }
        addDoc(collectionRef,newData)
    }
}
   const changeHandler=(e)=>{
    setInput(e.target.value);
   
   } 
   
   useEffect(()=>{
    
    if(input && chats && chats.find(chat=>chat.data.name===input)){
      
        const index=chats.findIndex(chat=>chat.data.name ===input)
        setSearchChat(
           { name:chats[index].data.name,
            photo:chats[index].data.photo,
            id:chats[index].id
        }
        );
        setSearch(true);
        
} 
    else{
        setSearch(false);       
        }
   },[input,chats])
    return<div className={classes.main}>
        <div className={classes.scroll}> <div className={classes.search}><SearchIcon/>
        <input type ="text" placeholder='Search' value={input} onChange={changeHandler}  />
        </div>
        <button className={classes.add} onClick={addHandler}>Add new Chat</button></div>
       <div className={classes.chats}>
        
      {!search && chats.map((doc)=>{
        return <SideChat key={doc.id} id={doc.id} roomName={doc.data.name} photo={doc.data.photo} />
      })}
      
       { 
        search && <SideChat key={searchChat.id} id={searchChat.id} roomName={searchChat.name} photo={searchChat.photo}/>}
       </div>
       
     
    </div>
}
export default SideMain;