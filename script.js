console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {
        songName: "Warriyo - Mortals [NCS Release]", filepath: "./songs/1.mp3", coverPath: "./covers/1.jpg"
    },
    {
        songName: "Cielo - Huma-Huma", filepath: "./songs/2.mp3", coverPath: "./covers/2.jpg"
    },
    {
        songName: "DEAF KEV", filepath: "./songs/3.mp3", coverPath: "./covers/3.jpg"
    },
    {
        songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filepath: "./songs/4.mp3", coverPath: "./covers/4.jpg"
    },
    {
        songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filepath: "./songs/5.mp3", coverPath: "./covers/5.jpg"
    },
    {
        songName: "Rabba - Salam-e-Ishq", filepath: "./songs/6.mp3", coverPath: "./covers/6.jpg"
    },
    {
        songName: "Sakhiyaan - Salam-e-Ishq", filepath: "./songs/7.mp3", coverPath: "./covers/7.jpg"
    },
    {
        songName: "Bhula Dena - Salam-e-Ishq", filepath: "./songs/8.mp3", coverPath: "./covers/8.jpg"
    },
    {
        songName: "Tumhari Kasam - Salam-e-Ishq", filepath: "./songs/9.mp3", coverPath: "./covers/9.jpg"
    },
    {
        songName: "Na Jaana - Salam-e-Ishq", filePath: "./songs/4.mp3", coverPath: "./covers/10.jpg"
    },
]

songIndex.forEach((element)=>{
    element.getElementsBytagName("img")[0].src = songs[i].filePath;
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;


})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// document.addEventListener('time')
