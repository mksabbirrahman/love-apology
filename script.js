function fillLove() {
  document.getElementById("fill").style.width = "100%";
  if (navigator.vibrate) navigator.vibrate(200);
}

function forgive() {
  document.getElementById("message").innerHTML =
    "তোমার একটুখানি হাসিই আমার সব রাগ ভুলিয়ে দেয়। আমি তোমাকে ভালোবাসি ❤️";
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}
