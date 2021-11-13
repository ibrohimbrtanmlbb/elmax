const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items:4,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true
	});
});
