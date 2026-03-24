const { source } = require("framer-motion/client");
const { title } = require("process");

const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const nextButton = document.querySelector(".controls button.forward");
const prevButton = document.querySelector(".controls button.backwards");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "",
    name: "",
    source: "songs/first.mp3",
  },
  {
    title: "",
    name: "",
    source: "songs/second.mp3",
  },
  {
    title: "",
    name: "",
    source: "songs/third.mp3",
  },
  {
    title: "",
    name: "",
    source: "songs/fourth.mp3",
  },
  {
    title: "",
    name: "",
    source: "songs/fifth.mp3",
  },
  {
    title: "",
    name: "",
    source: "songs/sixth.mp3",
  },
  {
    title: "",
    name: "",
    source: "songs/seventh.mp3",
  },
];
let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;
  song.addEventListener("loadeddata", () => {});
}
song.addEventListener("timeupdate", () => {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});
