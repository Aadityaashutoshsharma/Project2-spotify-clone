console.log("Welcome to Spotify");

//variables
let songIndex = 0;
let audioEle = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("ProgressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "NCS-Intro", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "NCS-2nd", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "NCS-3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "NCS-4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heros-1", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Janji-Heros-2", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Janji-heros-3", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "NCS-Alive", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "NCS-Dawn", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "NCS-The End", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//Listen to events

//play pause
masterPlay.addEventListener('click', () => {
    if(audioEle.paused || audioEle.currentTime <= 0){
        audioEle.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.5;
    }
    else {
        audioEle.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioEle.addEventListener('timeupdate', () => {
    //updating seekbar
    progress = parseInt((audioEle.currentTime/audioEle.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
    console.log(myProgressBar)
})
myProgressBar.addEventListener('change', () => {
    audioEle.currentTime = myProgressBar.value * audioEle.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    });
});