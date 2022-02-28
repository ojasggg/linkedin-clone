import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="../images/cover.jpg" alt="No Image for now" />
        <Avatar className="sidebar__avatar" />
        <h2>Ojash Gurung</h2>
        <h4>ojasggg@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you?</p>
          <p className="sidebar__statNumber">150</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">450</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React js")}
        {recentItem("Computing")}
        {recentItem("Vite")}
        {recentItem("Algorithm")}
      </div>
    </div>
  );
}

export default Sidebar;
