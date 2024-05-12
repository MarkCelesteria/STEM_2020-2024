let isPlaying = false;
const audio = new Audio();
audio.src = "Muisc.mp3";
audio.loop = true;
var video = document.getElementById("myVideo");
var closeButton = document.getElementById("closeButton");

document.getElementById('btn').addEventListener('click', function() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    }
})

document.querySelectorAll('.image-container-image img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}

video.ondblclick = function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
      closeButton.style.display = "block";
    } else if (video.mozRequestFullScreen) { 
      video.mozRequestFullScreen();
      closeButton.style.display = "block";
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
      closeButton.style.display = "block";
    } else if (video.msRequestFullscreen) { 
      video.msRequestFullscreen();
      closeButton.style.display = "block";
    }
};

  closeButton.onclick = function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
    closeButton.style.display = "none";
};