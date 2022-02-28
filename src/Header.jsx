import React from "react";
import HeaderOption from "./HeaderOption";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="../images/linkedin.png" alt="linkedin logo" />
        {/* Search Icon */}
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="MyNetwork" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Job" Icon={BusinessCenterIcon} />
        <HeaderOption title="Chat" Icon={ChatIcon} />
        <HeaderOption title="Notification" Icon={NotificationsIcon} />
        <HeaderOption title="Me" avatar={"../images/profile.png"} />
      </div>
    </div>
  );
}

export default Header;
