import MainChat from '../MainChat/MainChat';
import SideBar from '../SideBar/SideBar';
import classes from './Content.module.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';

function Content() {
 
  return (
   <>
   <div className={classes.content}>
    <BrowserRouter>
    <SideBar/>
      <Routes>
        <Route path='/:roomid' element={<MainChat />}> </Route>
      </Routes>
    </BrowserRouter>
 
    
   </div>
   
   </>
  );
}

export default Content;
