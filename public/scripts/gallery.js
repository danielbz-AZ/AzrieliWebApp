import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var sframe = "<div id='slide' class='slider-for'>";
var slides = "<div id='gallery' class='slider-nav'>";
var media = "<section id='media'>";
var images;

function getimages(element) {
	images = element.innerHTML;
}

function insertimages() {
	sframe += images+"</div>";
	slides += images+"</div>";
	media += sframe+slides+"</section>";
}

function loadgallery(id) {
	var element = document.getElementById(id);
	
	getimages(element);
	insertimages();
	
	element.parentNode.removeChild(element);
}

$(document).ready(function() {
	$('.slider-for').slick({
		slidesToShow : 1,
		slidesToScroll : 1,
		fade : true,
		cssEase : 'linear',
		arrows : false,
		adaptiveHeight : false,
		asNavFor : '.slider-nav',
		rtl : true
	});
	
	$('.slider-nav').slick({
		slidesToShow : 3,
		slidesToScroll : 1,
		asNavFor : '.slider-for',
		autoplay : true,
		autoplaySpeed : 3000,
		pauseOnFocus : true,
		dots : true,
		centerMode : true,
		focusOnSelect : true,
		variableWidth : true,
		swipeToSlide : true,
		rtl : true,
		responsive : [ {
			breakpoint : 1024,
			settings : {
				slidesToShow : 3,
				slidesToScroll : 3,
				infinite : true,
				dots : true
			}
		}, {
			breakpoint : 600,
			settings : {
				slidesToShow : 2,
				slidesToScroll : 2
			}
		}, {
			breakpoint : 480,
			settings : {
				slidesToShow : 1,
				slidesToScroll : 1
			}
		} ]
	});
});