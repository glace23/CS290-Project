function redirect() {
	var username = document.getElementById('username').value
	var comment = document.getElementById('comment').value
	// if username or comment is empty redirect to contact page
	if (username == "" || comment == ""){
        location = 'http://flip3.engr.oregonstate.edu:32044/contact';
	}
    else{
    	return true;
    }
    return false;
}