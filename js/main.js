// Validating Empty Field
function check_empty() {

	if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
		alert("Please complete all fields.");
	} else {
		document.getElementById('form').submit();
		alert("Thanks for your message!");
	}
}

//Function To Display Popup
function div_show() {
	document.getElementById('contact-popup').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
	document.getElementById('contact-popup').style.display = "none";
}
