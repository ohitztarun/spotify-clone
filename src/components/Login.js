import React from "react";
import "../Styles/login.css";
import { loginUrl } from "../spotify";
function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/559px-Spotify_logo_with_text.svg.png"
        alt=""
      />

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
