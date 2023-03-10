import React, { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const SpotifyGetPlaylists=() =>{
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  const d= [2,3,5]

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleGetPlaylists}>Get Playlists</button>
      {data?.items ? data.items.map((item) =>
      <p>{item.name}{console.log(item.name)}</p>) : null}
      {/* {d.map((item) => (
        <p>{item}</p>
      ))} */}





    </div>
  );
};

export default SpotifyGetPlaylists;