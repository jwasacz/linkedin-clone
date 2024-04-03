import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({name, description, message, photoUrl}) {
  return <div className="post">
        <div className="post-header">
            <Avatar/>
            <div className="post-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post-body">
            <p>{message}</p>        
        </div>

        <div className="post-buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey"/>     
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey"/>     
            <InputOption Icon={SendOutlinedIcon} title="Send" color="grey"/>             
        </div>

  </div>;
}

export default Post;
