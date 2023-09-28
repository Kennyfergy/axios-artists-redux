import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ArtistList from "../ArtistList/ArtistList";
import { useDispatch } from "react-redux";
import ArtistForm from "../ArtistForm/ArtistForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

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
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Famous Artists</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Typography variant="h4" style={{ marginTop: "2rem" }}>
            App Intro
          </Typography>

          <nav>
            <Link to="/">Home</Link> |<Link to="/addArtist">Add Artist</Link> |
            <Link to="/allArtists">All Artists</Link>
          </nav>

          <Route exact path="/">
            <p>Welcome to our collection of amazing artists!</p>
          </Route>

          <Route path="/addArtist">
            <ArtistForm addArtist={addArtist} />
          </Route>

          <Route path="/allArtists">
            <ArtistList />
          </Route>
        </Container>
      </div>
    </Router>
  );
}

export default App;
