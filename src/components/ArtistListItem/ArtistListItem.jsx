import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function ArtistListItem({ refreshArtists, artist }) {
  const dispatch = useDispatch();
  const deleteArtist = () => {
    axios({
      method: "DELETE",
      url: `/artist/${artist.id}`,
    })
      .then((response) => {
        console.log("deleteArtist", response);
        dispatch({ type: "DELETE_ARTIST", payload: artist.id });
        // refreshArtists();
      })
      .catch((error) => {
        console.log("error on delete: ", error);
      });
  };

  return (
    <tr>
      <td>{artist.name}</td>
      <td>
        <button onClick={deleteArtist}>DELETE</button>
      </td>
    </tr>
  );
}

export default ArtistListItem;
