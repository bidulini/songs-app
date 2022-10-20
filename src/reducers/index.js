import { combineReducers, conbineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "3:40",
    },
    {
      title: "I want it That Way",
      duration: "2:45",
    },
    {
      title: "All Star",
      duration: "5:00",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
