const audio = document.querySelector('audio');
const prev = document.querySelector('play-prev');
const next = document.querySelector('play-next');
const mediaplayer = document.querySelector('.mediaplayer');
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const songs = ["assets/sounds/Aqua Caelestis.mp3",
               "assets/sounds/Ennio Morricone.mp3",
               "assets/sounds/River Flows In You.mp3",
               "assets/sounds/Summer Wind.mp3"]


const songsTitles = ['Aqua Caelestis',
                     'Ennio Morricone',
                     'River Flows In You',
                     'Summer Wind'
                     ];
                 


let songIndex = 0;




loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = songsTitles[songIndex];
  audio.src = songs[songIndex];
}


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  
function playSong() {
    musicContainer.classList.add('play');
  
    audio.play();
  }
  

  function pauseSong() {
    musicContainer.classList.remove('play');
  
    audio.pause();
  }

  
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function setIndex(n) {
    songIndex = n;
    loadSong(songs[songIndex]);
    playSong();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}


function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
  
  audio.addEventListener('timeupdate', updateProgress);

  
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
  progressContainer.addEventListener('click', setProgress);

  

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }


  audio.addEventListener('ended', nextSong);
  