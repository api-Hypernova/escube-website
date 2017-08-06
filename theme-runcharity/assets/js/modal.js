// Sourced from: https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


addEventListener('click', function(e) {
     if(hasClass(e.target, 'member1')){
	 	modal.style.display = "block";
        member1.innerHTML = "Testing testing 123";
	 }
	  if(hasClass(e.target, 'member2')){
	 	modal.style.display = "block";
	 	member1.innerHTML = "2";
	 }
	  if(hasClass(e.target, 'member3')){
	 	modal.style.display = "block";
	 	member1.innerHTML = "3";
	 }
	  if(hasClass(e.target, 'member4')){
	 	modal.style.display = "block";
	 	member1.innerHTML = "4";
	 }
	  if(hasClass(e.target, 'member5')){
	 	modal.style.display = "block";
	 	member1.innerHTML = "5";
	 }
	  if(hasClass(e.target, 'member6')){
	 	modal.style.display = "block";
	 	member1.innerHTML = "6";
	 }
	  if(hasClass(e.target, 'member7')){
	 	modal.style.display = "block";
	 	member1.innerHTML = "7";
	 }
	  if(hasClass(e.target, 'member8')){
	 	modal.style.display = "block";
	 	member1.innerHTML = "8";
	 }
	  if(hasClass(e.target, 'member9')){
	 	modal.style.display = "block";
	 	member1.innerHTML = "9";
	 }
});
