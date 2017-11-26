//login popup//

var link_log = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var closer = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var user_login = popup.querySelector("[name=login]");
var user_password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("user_login");

link_log.addEventListener("click", function (event) {
	event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
        user_login.value = storage;
        user_password.focus();
    } else {
        user_login.focus();
    }
});

closer.addEventListener("click", function (event) {
	event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
    if (!user_login.value || !user_password.value) {
		event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("user_login", user_login.value);
    }
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27 && popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        document.login - form.reset();
    }
});

//map popup & overlay popup//
var link_map = document.querySelector(".link_map");
var popup_map = document.querySelector(".modal-content-map");
var closer = popup_map.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");

link_map.addEventListener("click", function (event) {
	event.preventDefault();
    popup_map.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27 && popup_map.classList.contains("modal-content-map-show")) {
        popup_map.classList.remove("modal-content-map-show");
        overlay.classList.remove("modal-overlay-show");
    }
});

closer.addEventListener("click", function (event) {
	popup_map.classList.remove("modal-content-map-show");
    overlay.classList.remove("modal-overlay-show");
});
    