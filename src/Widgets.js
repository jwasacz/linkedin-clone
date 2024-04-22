import React from "react";
import "./Widgets.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InfoIcon from "@mui/icons-material/Info";

function Widgets() {
  const newsArticle = (heading, Subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{Subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Tesla S Plaid ", "na torze wyścigowym")}
      {newsArticle("Meta AI", "Zuckerberg twierdzi, że")}
      {newsArticle("25. urodziny Google", "Jak zmieniał się przez lata?")}
      
    </div>
  );
}

export default Widgets;
