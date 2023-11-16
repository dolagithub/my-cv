function opentab(name) {
	const links = document.getElementsByClassName("link");
	for (const link of links) {
		link.classList.remove("active-link");
	}
	const tabs = document.getElementsByClassName("tab-container");
	for (const tab of tabs) {
		tab.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");

	document.getElementById(name).classList.add("active-tab");
}
const menu = document.getElementById("sidemenu");
function showmenu() {
	menu.style.right = "0";
}
function closemenu() {
	menu.style.right = "-150px";
}
