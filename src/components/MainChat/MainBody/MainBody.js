import React from 'react';
import classes from './MainBody.module.css';
import ChatBox from './ChatBox/ChatBox';
import { orderBy } from 'lodash';
const MainBody = (props) => {
  let Data=[]
  try{Data= props.allData.time.map((timestamp,index) => {
    return {
      key: props.allData.key[index],
      message:props.allData.messages[index],
      name: props.allData.names[index],
      time: timestamp,
    };
  });}
  catch(error){
    console.log(error);
  }
  

const sortedData=orderBy(Data,['time'],['asc']);

  return (
    <div className={classes.mainbody}>
      
      {sortedData.map((data) => (
        <ChatBox key={data.key} message={data.message} name={data.name} time={data.time} />
      ))}
    </div>
  );
};

export default MainBody;
