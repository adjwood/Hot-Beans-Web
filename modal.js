document.addEventListener("DOMContentLoaded", function(event) {
var modal = document.getElementById("myModal");


var btn = document.getElementsByClassName("myBtn");


var span = document.getElementsByClassName("close")[0];

var text = document.getElementsByClassName("acc-tag")[0];
var modalBdy = document.getElementsByClassName('modal-body')[0];
var info = document.getElementsByClassName("acc-info")[0];

	

function openModal() {
	info.innerHTML = this.dataset.info;
	text.innerHTML = this.dataset.heading;
var newImg = document.getElementsByClassName('acc-img')[0];
  newImg.src = this.dataset.img;
  newImg.classList.add('modalImg');
  modal.style.display = "block";


  
}


span.onclick = function() {
  modal.style.display = "none";
}


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
});