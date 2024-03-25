import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.pexels.com/photos/3608061/pexels-photo-3608061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <Avatar className="sidebar-avatar" />
        <h2>Jakub Wąsacz</h2>
        <h4>jakub.wasacz@gmail.com</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2,543</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">2,331</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

const recentItem = (topic) => (
  <div className="sidebar-recentItem">
    <span className="sidebar-hash">#</span>
    <p>{topic}</p>
  </div>
);

export default Sidebar;
