let video = document.getElementById("videoVs");
let Pause = document.getElementById("pauseBtn");
let play = document.getElementById("playBtn");

Pause.addEventListener("click", ()=>{
    video.pause();
    Pause.style.display="none";
    play.style.display = "block";
})
play.addEventListener("click", ()=>{
    video.play();
    Pause.style.display="block";
    play.style.display = "none";
})

