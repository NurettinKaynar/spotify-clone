// eslint-disable-next-line
import React, { useEffect } from "react";
import "./header.css";
import { useStateValue } from "../../../StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// eslint-disable-next-line
function Header({ spotify }) {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Sanatçı, Şarkı veya Podcast ara " type="text" />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
