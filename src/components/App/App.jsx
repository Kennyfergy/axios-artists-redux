import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ArtistList from "../ArtistList/ArtistList";
import { useDispatch } from "react-redux";
import ArtistForm from "../ArtistForm/ArtistForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    refreshArtists();
  }, []);

  const refreshArtists = () => {
    axios({
      method: "GET",
      url: "/artist",
    })
      .then((response) => {
        dispatch({ type: "SET_ARTISTS", payload: response.data });
      })
      .catch((error) => {
        console.log("error on GET", error);
      });
  };

  const addArtist = () => {
    axios
      .post("/artist", { name: "artist" })
      .then((response) => refreshArtists())
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Artists</h1>
          <nav>
            <Link to="/">Home</Link> |<Link to="/addArtist">Add Artist</Link> |
            <Link to="/allArtists">All Artists</Link>
          </nav>
        </header>

        <Route exact path="/">
          <p>Welcome to our collection of amazing artists!</p>
        </Route>

        <Route path="/addArtist">
          <ArtistForm addArtist={addArtist} />
        </Route>

        <Route path="/allArtists">
          <ArtistList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
