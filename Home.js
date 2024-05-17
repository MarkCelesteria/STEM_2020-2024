let isPlaying = false;
const audio = new Audio();
audio.loop = true;
var video = document.getElementById("myVideo");
var closeButton = document.getElementById("closeButton");

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
      audio.src = this.getAttribute('data-src');
      if (!isPlaying) {
          audio.play();
          isPlaying = true;
      } else {
          audio.pause();
          audio.currentTime = 0;
          isPlaying = false;
      }
  });
});

document.querySelectorAll('.image-container-image img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}
document.querySelector('.popup').onclick = (event) => {
    if(event.target === document.querySelector('.popup')){
        document.querySelector('.popup').style.display = 'none';
    }
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

function showBox() {
  document.querySelector('.myBox').style.display = "block";
  document.querySelector('.word-box').style.display = "block";
};

function hideBox(e) {
  if (!e.target.classList.contains('myBox')) {
    document.querySelector('.myBox').style.display = "none";
    document.querySelector('.word-box').style.display = "none";
  }
};

var vids = document.getElementsByClassName("myVideo");

for (let i = 0; i < vids.length; i++) {
  vids[i].isLoaded = false;
  vids[i].addEventListener("play", function() {
    if (!this.isLoaded) {
      this.load();
      this.isLoaded = true;
    }
  });
}

for (let i = 0; i < vids.length; i++) {
  vids[i].addEventListener("mouseover", function() {
    this.controls = true;
  });

  vids[i].addEventListener("mouseout", function() {
    this.controls = false;
  });
}