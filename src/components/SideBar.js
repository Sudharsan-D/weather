import 'react-pro-sidebar/dist/scss/styles.scss';
import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

function Sidebar() {
  return (
    <ProSidebar style={{height: "100vh", position: 'fixed', minWidth: "0vw", width: "17vw"}}>
      <Menu style={{backgroundColor: "#842bd7", height: "100vh", paddingTop: '60px', color: "white", textAlign:"center"}}>
        <h2>Weather</h2>
        <MenuItem >Dashboard</MenuItem>
        <MenuItem >Statistics</MenuItem>
        <MenuItem >Map</MenuItem>
        <MenuItem >Calender</MenuItem>
        <MenuItem >Setting</MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
