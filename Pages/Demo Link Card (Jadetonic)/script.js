//***delay open link... so see animation lol***
function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 500);
};

var icon = document.querySelector(".icon");
// icon.onmouseover = function(){
// 	this.style.animation = "button-hover 0.5s ease 0.01s";
// }
// icon.onmouseout = function(){
// 	this.style.animation = "button-hover 0.5s ease 0.01s 1 reverse";
// }
icon.onclick = function(){
	this.style.animation = "button-push 2s ease 0.01s";
}

//loading screen remove
//window.addEventListener("load", 
window.addEventListener("load", () => {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
	    loader.remove();
		});
  }, 500); 	
});

//***blur background on card hover***

// const card = document.querySelector(".card");
// const filter = document.querySelector(".filter");
// card.onmouseover = function(){
// 	filter.style.backdropFilter = "blur(2px)";  };
// card.onmouseout = function(){
	// 	filter.style.backdropFilter = "blur(0px)";  }