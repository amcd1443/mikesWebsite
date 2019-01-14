console.log("beginning of JS page");

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
	console.log("modal click working")
};

span.onclick = function() {
	modal.style.display = "none";
};

window.onclick = function() {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
