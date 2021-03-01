function redirect() {
	window.location = "http://localhost:30244/password"
}

function passwordRedirect(){
	var password =  document.getElementById('password').value
	// if password is correct redirect to write blog
	if (password == "1234"){
		location = "http://localhost:30244/writeBlog"
	}
	// go back to blog
	else{
		location = "http://localhost:30244/blog"
	}
	return false
}

function gotoblogRedirect(){
	window.location = "http://localhost:30244/blog"
}