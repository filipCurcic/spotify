import React from 'react';
import SpotifyWebPlayer from 'react-spotify-web-playback';
import SpotifyPlayer from 'react-spotify-web-playback';
const Player = ({ accessToken, trackUri }) => {
  if (!accessToken) return null;
  return (
    <SpotifyWebPlayer
      token={accessToken}
      showSaveIcon
      uris={trackUri ? [trackUri] : []}
    />
  );
};

export default Player;
