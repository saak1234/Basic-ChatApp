import React, { useState, useEffect } from 'react';
import classes from './MainChat.module.css';
import MainTop from './MainTop/MainTop';
import MainBody from './MainBody/MainBody';
import MainFooter from './MainFooter/MainFooter';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore/lite';


const MainChat = (props) => {
    const [chatName, setChatName] = useState('');
    const [photo,setPhoto]=useState('');
    const [allData, setAllData] = useState({
        key:[],
        names: [],
        messages: [],
        time:[],
    
    });
   
    const [messageSent,setMessageSent]=useState(0);
    const params = useParams();
    const id = params.roomid;

    useEffect(() => {
        async function getData() {
            try {
                const collectionRef = collection(db, `Rooms`);
                const collectionSnapshot = await getDocs(collectionRef);

                const index = collectionSnapshot.docs.findIndex(doc => doc.id === id);
                if (index !== -1) {
                    setChatName(collectionSnapshot.docs[index].data().name);
                    setPhoto(collectionSnapshot.docs[index].data().photo);
                }

                const q = await getDocs(collection(db, `Rooms/${id}/message`));
                const data = q.docs.map(doc => doc.data());
             
                setAllData({
                    key:q.docs.map(item=>item.id),
                    names: data.map(item => item.name),
                    messages: data.map(item => item.message),
                    time:data.map(item => item.timestamp),
                    
                });
               
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();
        
    }, [id,messageSent]);
    const messageSentHandler=()=>{
        setMessageSent((prevState)=>prevState+1);
    }
    
    
    return (
        <div className={classes.main}>
            <MainTop chatName={chatName} photo={photo}/>
            <MainBody allData={allData}/>
            <MainFooter messageSent={messageSentHandler} />
        </div>
    );
};

export default MainChat;
