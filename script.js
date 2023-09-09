
let songIndex =0;
let audioElement  = new Audio("songs/1.mp3");
let play = document.getElementById("play");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songIteam"));
let masterSongName = document.getElementById('masterSongName');








let songs =[
    {songName: "Humnava mere", filePath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "Barsat ki dhun", filePath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName: "chup Mahi chup ranjha", filePath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "Ek tarfa", filePath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "Ishq Sufiyana", filePath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName: "Kyon", filePath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName: "Lo safar", filePath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName: "Mann Bhareya", filePath: "songs/8.mp3", coverpath: "covers/8.jpg"}
]

console.log("hello");

songItem.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})




//audioElement.play();

play.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        play.classList.remove("fa-play-circle");
        play.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        play.classList.remove("fa-pause-circle");
        play.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    })
})



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})

