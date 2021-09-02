import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenUrl } from "./spotify";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
    console.log(token);
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
