console.log("Welcome to Spotify");

//variables
let songIndex = 0;
let audioEle = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgessBar');
let songs = [
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "NCS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    }
]


//Listen to events

masterPlay.addEventListener('click', () => {
    if(audioEle.paused || audioEle.currentTime <= 0){
        audioEle.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioEle.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

progressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
})
