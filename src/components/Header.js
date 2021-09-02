import React from "react";
import "../Styles/header.css";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";
function Header({ spotify }) {
  const [{ user }, dipatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header-left">
        <SearchTwoToneIcon />
        <input type="text" placeholder="Search for Artists, Songs, Podcasts" />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
