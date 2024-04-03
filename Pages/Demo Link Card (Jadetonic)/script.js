//***delay open link... so see animation lol***
function delay(URLtwitter) {
  setTimeout(function () {
    window.location = "https://twitter.com/Jadetonic";
  }, 500);
}
function delay(URLtwitch) {
  setTimeout(function () {
    window.location = "https://www.twitch.tv/jadetonic";
  }, 500);
}
function delay(URLyoutube) {
  setTimeout(function () {
    window.location = "https://www.youtube.com/c/jadetonic";
  }, 500);
}

//***blur background on card hover***

// const card = document.querySelector(".card");
// const filter = document.querySelector(".filter");
// card.onmouseover = function(){
// 	filter.style.backdropFilter = "blur(2px)";  };
// card.onmouseout = function(){
// 	filter.style.backdropFilter = "blur(0px)";  }

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.classList.add("loader-hidden");

    loader.addEventListner("transitionend", () => {
        document.body.removeChild("loader");
     });
  }, 250);
});
