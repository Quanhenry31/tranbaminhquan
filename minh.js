 // phat nhac
 var song = document.getElementById("song")
 var icon = document.getElementById("icon")
 var abc = document.getElementById("abc")
 var payvideo = document.getElementById("back-video")
 
 icon.onclick = function () {
     if (song.paused) {
         song.play();
         icon.src = "./pause.png";
         document.getElementById("abc").style.display = "none";
         payvideo.play();

     } else {
         song.pause();
         icon.src = "./play.png";
         document.getElementById("abc").style.display = "block";
         payvideo.pause();
     }
 }

