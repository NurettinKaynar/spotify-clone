import React from "react";
import "./songRow.css";

function SongRow({ track, playSong }) {
  console.log(track);
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img
        className="songRow__album"
        src="https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a"
        alt=""
      />
      <div className="songRow__info">
        <h1>Linkin Park</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
