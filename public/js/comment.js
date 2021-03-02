function redirect() {
	var username = document.getElementById('username').value;
	var comment = document.getElementById('comment').value;
	console.log(username)
	if (username == "" || comment == ""){
		alert("You cannot leave name or comment blank!");
		location = "contact";	
	}
	else{
		return true
	}
	return false
}