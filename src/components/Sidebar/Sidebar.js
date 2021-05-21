import React from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import { Home, Search, LibraryMusic } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";
// eslint-disable-next-line
import { getTokenFromResponse } from "../../spotify";

function Sidebar() {
  // eslint-disable-next-line
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={Home} title="Ana Sayfa" />
      <SidebarOption Icon={Search} title="Ara" />
      <SidebarOption Icon={LibraryMusic} title="Kitaplığın" />
      <br />
      <strong className="sidebar__title">LİSTELER</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
