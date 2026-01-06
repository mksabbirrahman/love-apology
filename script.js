function fillLove() {
  document.getElementById("fill").style.width = "100%";

  // Mobile vibration (works on Android)
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
}

function forgive() {
  document.getElementById("message").innerHTML =
    "Thank you for still choosing me. I love you endlessly ❤️";
}
