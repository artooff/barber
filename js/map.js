var mapLink = document.querySelector(".js-button-map");
var map = document.querySelector(".modal-map");
var mapClose = map.querySelector(".modal-close");
var mapOverlay = document.querySelector(".modal-overlay");

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapOverlay.classList.add("modal-overlay-show");
	map.classList.add("modal-show");
});

mapClose.addEventListener ("click", function(evt) {
	map.classList.remove("modal-show");
	mapOverlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27 ){
		if (map.classList.contains("modal-show")){
			evt.preventDefault();
			map.classList.remove("modal-show");
			mapOverlay.classList.remove("modal-overlay-show");
		}
	}
});

mapOverlay.addEventListener("click", function(evt){
				if (map.classList.contains("modal-show")) {
						evt.preventDefault();
						map.classList.remove("modal-show");
						mapOverlay.classList.remove("modal-overlay-show");
						
					}		
		})