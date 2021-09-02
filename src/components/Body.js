import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "../Styles/body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import SongRow from "./SongRow";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body-info-text">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizTwoToneIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
}

export default Body;
