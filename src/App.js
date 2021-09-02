import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenUrl } from "./spotify";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlist,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcT3VAU71CtUM").then((res) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        });
      });
    }
  }, []);
  console.log(user);
  console.log(token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
