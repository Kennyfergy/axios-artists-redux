import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ArtistForm() {
  const [newArtist, setNewArtist] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log("handleSubmit", event);
    event.preventDefault();
    // const artist = { newArtist };
    dispatch({
      type: "ADD_ARTISTS",
      payload: { name: newArtist },
    });
    setNewArtist("");
  };
  console.log("newArtist", newArtist);
  return (
    <div>
      <h1>Artist Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="Artist name"
          value={newArtist}
          onChange={(event) => setNewArtist(event.target.value)}
        ></input>
        <button type="submit">Add Artist</button>
      </form>
    </div>
  );
}
