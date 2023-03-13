
const BASE_URL = "https://lyric-api-403c0.firebaseio.com/";
const songList = document.querySelector("#song-list");
const lyricsPanel = document.querySelector("#lyrics-panel");
const album = {
  artist: "Adele",
  album: "25",
  tracks: [
    "Hello",
    "Send My Love (To Your New Lover)",
    "I Miss You",
    "When We Were Young",
    "Remedy",
    "Water Under the Bridge",
    "River Lea",
    "Love in the Dark",
    "Million Years Ago",
    "All I Ask",
    "Sweetest Devotion",
  ],
};

//create song list （手刻CSS達到hover效果)
const albumArr = album.tracks
albumArr.forEach((item,index) => {
  songList.innerHTML += `<li data-id="${index}">${item}</li>`;
});

//add event listener to songList
songList.addEventListener("click", function onPanelClicked(event) {
  console.log(event.target);
  if (event.target.matches("li")) {
    addLyrics(event.target.dataset.id);
  }
});




