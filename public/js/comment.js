function redirect() {
	var username = document.getElementById('username').value;
	var comment = document.getElementById('comment').value;
	console.log(username)
	if (username == "" || comment == ""){
		location = "contact";
		alert("You cannot leave name or comment blank!");
	}
	return false
}