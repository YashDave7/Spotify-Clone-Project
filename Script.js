// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Pasoori....mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItemPlay = document.querySelectorAll('.songItemPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songInfo = document.getElementsByClassName('songInfo');

let songs = [
    { songName: "Pasoori - Shae Gill, Ali Sethi", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Kesariya (From Brahmastra)", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Kho gaye Hum Kahan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Wo Ladki", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tera Ban Jaunga", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Naina Da Kya Kasoor", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Mere Liye Tum...", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Excuses - AP Dhillon", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Zingaat", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Bol Do Na Zara", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle Play/Pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// forEach((element,i) => {
//     element.getElementsByClassName('songItemPlay')[i].addEventListener('click', () => {
//         if (audioElement.paused || audioElement.currentTime <= 0) {
//             audioElement[i].play();
//             songItemPlay[i].classList.remove('fa-circle-play');
//             songItemPlay[i].classList.add('fa-circle-pause');
//             gif.style.opacity = 1;
//         }
//         else {
//             audioElement[i].pause();
//             songItemPlay[i].classList.remove('fa-circle-pause');
//             songItemPlay[i].classList.add('fa-circle-play');
//             gif.style.opacity = 0;
//         }
//     })
// })

// Listen to Events 
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

        // if (audioElement.paused || audioElement.currentTime <= 0) {
        //     audioElement.play();
        //     element.classList.remove('fa-circle-play');
        //     element.classList.add('fa-circle-pause');
        //     gif.style.opacity = 1;
        // }
        // else {
        //     audioElement.pause();
        //     element.classList.remove('fa-circle-pause');
        //     element.classList.add('fa-circle-play');
        //     gif.style.opacity = 0;
        // }
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        // songInfo.innerText = songs[songIndex].songName;
    })
})

// Next Button.
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    // songInfo.innerText = songs[songIndex].songName;

})


// Previous Button.
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');

})