		var link = document.querySelector(".login-link");
		var close = document.querySelector(".modal-close");
		var popup = document.querySelector(".modal-login");
		var login = popup.querySelector("[name=login]");
		var password = popup.querySelector("[name=password]");
		var form = popup.querySelector("form");
		var overlay = document.querySelector(".modal-overlay");
		

		var isSorageSupprot = true;
		var storage = "";
		
		try{
			storage = localStorage.getItem("login");
		} catch (err) {
			isStorageSupport = false;
		}

		link.addEventListener("click", function(evt){
			evt.preventDefault();
			overlay.classList.add("modal-overlay-show");
			popup.classList.add("modal-show");
			if (storage) {
				login.value = storage;
				password.focus();
			}
			else {
				login.focus();
			}
			
			
			
		});

		close.addEventListener("click", function(evt){
			evt.preventDefault();

			if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error"); 
			overlay.classList.remove("modal-overlay-show");
			
			}
			
		});

		form.addEventListener("submit", function(evt){
			if (!login.value || !password.value){
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error"); 
			
			}
			else {
				if (isStorageSupport){
					localStorage.setItem("login", login.value);
				  }
			}
		});

		overlay.addEventListener("click", function(evt){
				if (popup.classList.contains("modal-show")) {
						evt.preventDefault();
						popup.classList.remove("modal-show");
						popup.classList.remove("modal-error"); 
						overlay.classList.remove("modal-overlay-show");
					}
		})

		window.addEventListener("keydown", function(evt) {
				if (evt.keyCode === 27) {
					if (popup.classList.contains("modal-show")) {
						evt.preventDefault();
						popup.classList.remove("modal-show");
						popup.classList.remove("modal-error"); 
						overlay.classList.remove("modal-overlay-show")
					}
				}
		})

		close.addEventListener("keydown", function(evt){
			
			if(evt.keyCode === 9){
				login.focus();
			}

		})