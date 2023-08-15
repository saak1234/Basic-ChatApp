import classes from './SideBar.module.css'
import React from 'react';
import SideMain from './SideMain/SideMain';
import SideTop from './SideTop/SideTop';

const SideBar=(props)=>{
    return<div className={classes.side}>
        <SideTop/>
        <SideMain />
           

    </div>
}
export default SideBar;