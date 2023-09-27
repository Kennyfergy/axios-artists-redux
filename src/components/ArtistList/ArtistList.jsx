import React from "react";
import ArtistListItem from "../ArtistListItem/ArtistListItem";
import { useSelector } from "react-redux";

function ArtistList() {
  const artList = useSelector((store) => store.artistReducer);

  return (
    <div>
      <table>
        <tbody>
          {artList.map((artist, i) => {
            return <ArtistListItem key={i} artist={artist} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ArtistList;
