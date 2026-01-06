function fillLove() {
  document.getElementById("fill").style.width = "100%";

  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
}

function forgive() {
  document.getElementById("message").innerHTML =
    "তবুও আমাকে বেছে নেওয়ার জন্য ধন্যবাদ। আমি তোমাকে সীমাহীন ভালোবাসি ❤️";
}
