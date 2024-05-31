document.querySelectorAll('.image-container-image img').forEach(image =>{
    image.onclick = () =>{
      document.querySelector('.popup').style.display = 'block';
      document.querySelector('.popup img').src = image.getAttribute('src');
    }
  });
  document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () =>{
      document.querySelector('.popup').style.display = 'block';
      document.querySelector('.popup img').src = image.getAttribute('src');
    }
  });
  document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
  }

  function showBox() {
    document.querySelector('.myBox').style.display = "block";
    document.querySelector('.word-box').style.display = "block";

    // var paragraphs = document.querySelectorAll('.word-box p');
    // for (var i = 0; i < paragraphs.length; i++) {
    //   if (i === 0) {
    //     paragraphs[i].textContent = 'Currently Been Sealed';
    //     paragraphs[1].style.textAlign = 'center';
    //   } else {
    //     paragraphs[i].textContent = '';
    //   }
    // }
  }
  function hideBox(e) {
    if (!e.target.classList.contains('myBox')) {
      document.querySelector('.myBox').style.display = "none";
      document.querySelector('.word-box').style.display = "none";
    }
  }