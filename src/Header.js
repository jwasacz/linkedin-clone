import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
          alt=""
        ></img>

        <div className="header-search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://lumiere-a.akamaihd.net/v1/images/image_eee6165a.jpeg?region=0,0,640,480" title='me'/>
      </div>
    </div>
  );
}

export default Header;
