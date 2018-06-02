/*$(document).ready(function(){

	$(".dropmenu").on("click", function(){

		$("nav ul").toggleClass("open");

	});

});*/
var drop = document.querySelector(".dropmenu");
var navy = document.querySelector("nav ul");
var h1 = document.querySelector("#top h1");
h1.classList.add("red");
drop.addEventListener("click", function(){
	navy.classList.toggle("openUp");
	h1.classList.toggle("gren");
	h1.classList.toggle("red;")
});
