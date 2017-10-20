var menu_trigger = document.getElementById('modal-icon')
var menu_popup = document.getElementById('main-menu')
var menu_close = document.getElementById("main-menu-close")

menu_trigger.onclick = function () {
	menu_popup.style.display = 'block'
}

menu_close.onclick = function () {
	menu_popup.style.display = 'none'
}