let musics = [
  {
    name: "Girl On Fire BY Alicia Keys",
    cover: "Images/aliciakeys2013.jpg",
    audio: new Audio("Musics/girl_on_fire_-_alicia_keys.mp3"),
  },
  {
    name: "Googoosh",
    cover: "Images/Googoosh.jfif",
    audio: new Audio("Musics/Googoosh - Man Aamadeh-am (IranTune).mp3"),
  },
  {
    name: "Hayedeh",
    cover: "Images/Hydeh.jfif",
    audio: new Audio("Musics/Hayedeh - Gol Vaajeh (IranTune).mp3"),
  },
];

let bar = document.querySelector("#seekBar");
let musicName = document.querySelector("#music-name");
let musicImage = document.querySelector("#music-image");
let preBtn = document.querySelector("#pre-Btn");
let playBtn = document.querySelector("#play-Btn");
let nextBtn = document.querySelector("#next-BTN");

let currentMusic = 0;
musicName.innerText = musics[currentMusic].name;
musicImage.src = musics[currentMusic].cover;
let track = musics[currentMusic].audio;

track.addEventListener("canplay", () => {
  bar.min = 0;
  bar.value = 0;
  bar.max = track.duration;
});

playBtn.addEventListener("click", () => {
  if (track.duration > 0 && !track.paused) {
    playBtn.className = "fa fa-play ctrlbtn";
    track.pause();
  } else {
    track.play();
    playBtn.className = "fa fa-pause ctrlbtn";
  }
});

bar.addEventListener("change", (e) => {
  track.currentTime = bar.value;
});

track.addEventListener("timeupdate", (e) => {
  bar.value = track.currentTime;
});

nextBtn.addEventListener("click", (e) => {
  if (currentMusic == 2) {
    currentMusic = 0;
    change(currentMusic);
  } else {
    currentMusic += 1;
    change(currentMusic);
  }
});

preBtn.addEventListener("click", (e) => {
  if (currentMusic == 0) {
    currentMusic = 2;
    change(currentMusic);
  } else {
    currentMusic -= 1;
    change(currentMusic);
  }
});

function change(currentMusic) {
  playBtn.className = "fa fa-play ctrlbtn";
  track.pause();
  track.currentTime = 0;
  bar.value = 0;
  musicImage.src = musics[currentMusic].cover;
  musicName.innerText = musics[currentMusic].name;
  track = musics[currentMusic].audio;
}
