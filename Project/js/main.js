$(document).ready(function(){
$('.header').height($(window).height());
})

function generator (){
	let a,b,rand;
	a = Number(document.getElementById('minNumber').value);
	b = Number(document.getElementById('maxNumber').value);
	rand = Math.floor(a + Math.random() * (b - a + 1));
	document.getElementById('result').innerText = rand;
}

$(".navbar a").click(function(){
$("body,html").animate({
scrollTop:$("#" + $(this).data('value')).offset().top
},1000)

})