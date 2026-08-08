console.log("Home frontend javascript loaded");

// Anime.js yordamida logotipga yengil kattalashib-kichrayish (puls) effekti
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".custom-logo");

  if (logo) {
    anime({
      targets: logo,
      scale: [0.95, 1.05],
      duration: 2500,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true
    });
  }
});