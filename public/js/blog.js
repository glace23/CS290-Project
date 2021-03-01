function redirect() {
	window.location = "http://flip3.engr.oregonstate.edu:32044/password"
}

function passwordRedirect(){
	var password =  document.getElementById('password').value
	// if password is correct redirect to write blog
	if (password == "1234"){
		location = "http://flip3.engr.oregonstate.edu:32044/writeBlog"
	}
	// go back to blog
	else{
		location = "http://flip3.engr.oregonstate.edu:32044/blog"
	}
	return false
}

function gotoblogRedirect(){
	window.location = "http://flip3.engr.oregonstate.edu:32044/blog"
}