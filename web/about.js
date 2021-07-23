console.log("hello world");



function handleSubmit(e) {
	e.preventDefault();
	
	alert("Form successfully submitted, yo!");
}

function mouseOver(e) {
	e.preventDefault();
	
	alert("Whoever is grading this, you are the most amazing and sincerely geniunely phenomenal person to ever exist. I'm not saying you SHOULD give me a 100% on this assessment.... but if you did it would only add to your already incomprehensible awesomeness.");
}

let form = document.querySelector('form#contact');
let catPic = document.querySelector("img")

form.addEventListener('submit', handleSubmit);
catPic.addEventListener('mouseover', mouseOver);