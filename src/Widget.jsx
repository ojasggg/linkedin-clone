import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("First Build", "Very Excited- Took 1week")}
      {newsArticle(
        "Second Build on The way",
        "Second Build is expected after Final Thesis Assignment"
      )}
      {newsArticle(
        "UkraineRussia War",
        "Ukraine Russia War dispute is still unsolved, world economy to soon collpse."
      )}
      {newsArticle(
        "Nepse",
        "Nepse After long Bearish run shows little Bull movement. Will It sustain??"
      )}
    </div>
  );
}

export default Widget;
