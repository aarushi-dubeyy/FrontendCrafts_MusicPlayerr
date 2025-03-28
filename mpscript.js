// Selecting elements
let songName = document.querySelector("#song-name");
let songSinger = document.querySelector("#song-singer");
let songImage = document.querySelector(".song-image");
let playPauseImg = document.querySelector("#play-pause");
let volumeRange = document.querySelector("#volume-range");
let songRange = document.querySelector("#song-duration");
let volPng = document.querySelector("#vol-png");
let prevBtn = document.querySelector("#prev-img");
let nextBtn = document.querySelector("#next-img");
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let index = 0;
let track = new Audio(); // Create an audio object
let isPlaying = false;  // Track playing state

// Song list
let songs = [
    { name: "Bhool Bhulaiya", path: "BhoolBhulaiyaa3.mp3", image: "image4.jpg", singer: "Pitbull, Diljit Dosanjh" },
    { name: "Gori Hai Kalaiyan", path: "GoriHaiKalaiyan.mp3", image: "image2.jpg", singer: "Kanika Kapoor, Badshah" },
    { name: "Tauba Tauba", path: "TaubaTauba.mp3", image: "image1.jpg", singer: "Karan Aujla" },
    { name: "Mere Mehboob Mere Sanam", path: "MereMehboob.mp3", image: "image2.jpg", singer: "Udit Narayan, Alka Yagnik" },
    { name: "Jaane Tu", path: "JaaneTu.mp3", image: "image1.jpg", singer: "Arijit Singh" }
];

// Load track function
function loadTrack(index, playImmediately = false) {
    track.src = songs[index].path;
    track.load(); // Load the audio file
    songName.innerHTML = songs[index].name;
    songSinger.innerHTML = songs[index].singer;
    songImage.style.backgroundImage = `url("${songs[index].image}")`;
    
    track.currentTime = 0; // Ensure song starts from beginning
    songRange.value = 0; // Reset slider to 0
    
    volume();
    duration();
    setInterval(()=>{
        songRange.max=track.duration
        songRange.value=track.currentTime
    },1000)
    
    // Reset play button and state
    isPlaying = false;
    playPauseImg.src = "play.png";

    // Remove any existing event listeners and add them again
    track.onplay = () => {
        isPlaying = true;
        playPauseImg.src = "pause.png";
    };
    track.onpause = () => {
        isPlaying = false;
        playPauseImg.src = "play.png";
    };

    // Play the song immediately if true
    if (playImmediately) {
        playSong();
    }
}



// Initial load
loadTrack(index);

// Play/Pause function
function playPause() {
    if (!isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
}

// Play function
function playSong() {
    track.play()
        .catch(error => {
            console.error("Error playing audio:", error);
        });
}

// Pause function
function pauseSong() {
    track.pause();
}

// Next song function
function nextSong() {
    index = (index + 1) % songs.length;
    loadTrack(index, true); // Load and play immediately
}

// Previous song function
function previousSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadTrack(index, true); // Load and play immediately
}

// Attach event listeners to buttons
playPauseImg.addEventListener("click", playPause);
prevBtn.addEventListener("click", previousSong);
nextBtn.addEventListener("click", nextSong);

// Auto-play next song when current one ends
track.addEventListener("ended", nextSong);

function volume(){
    track.volume=volumeRange.value/100;
    if(volumeRange.value==0){
        volPng.src="mute.png"
    }
      else{
        volPng.src="volumee.png"
      }  

}
function duration() {
    songRange.addEventListener("input", () => {
        track.currentTime = songRange.value; // Update song position based on slider
    });
}
