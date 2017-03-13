var exp = document.getElementById("amount").value;
var back = document.getElementById("vh_wrapper");
var rocket = document.getElementById("rocket");


function mainClick() {

if (exp == 100) {
	back.style.cssText="background-position-y:100%;"; 
	rocket.style.cssText="top:30%;"; 
} else if (exp == 200) {
	back.style.cssText="background-position-y:75%;";
	rocket.style.cssText="top:18%;"; 
} else if (exp == 300) {
	back.style.cssText="background-position-y:55%;";
	rocket.style.cssText="top:6%;"; 
} else if (exp == 400) {
	back.style.cssText="background-position-y:30%;";
	rocket.style.cssText="top:-6%;"; 
} else {
	back.style.cssText="background-position-y:0%;";
	rocket.style.cssText="top:-18%;"; 
} return;

}


mainClick();