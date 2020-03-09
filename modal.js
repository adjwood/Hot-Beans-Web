// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var text = document.getElementsByClassName("acc-tag")[0];
var modalBdy = document.getElementsByClassName('modal-body')[0];
var info = document.getElementsByClassName("acc-info")[0];

	
// When the user clicks on the button, open the modal
function openModal() {
	info.innerHTML = this.dataset.info;
	text.innerHTML = this.dataset.heading;
var newImg = document.getElementsByClassName('acc-img')[0];
  newImg.src = this.dataset.img;
  newImg.classList.add('modalImg');
  modal.style.display = "block";


  
}


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

function loop() {
	for ( i=0; i< btn.length; i++) {
		btn[i].addEventListener('click', openModal);
	}
}

loop();