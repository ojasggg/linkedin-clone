import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="" alt="linkedin logo" />
        {/* Search Icon */}
        <SearchIcon />
        <input type="text" />
      </div>
      <div className="header__left"></div>
    </div>
  );
}

export default Header;
