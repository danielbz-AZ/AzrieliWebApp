import $ from "jquery";
import "slick-carousel";

var contactform = "<iframe id='conframe' class='wrap' src='./contactform.html'></iframe>";

var contact = "<div id='contact' class='modal'>"
+"					<div class='modal-dialog'>"
+"						<div class='modal-content'>"
+"							<header id='contact_header' class='container'>" 
+"    							<a href='#' class='closebtn' onClick='resetconframe()'>×</a>"
+"    							<h2>צור קשר</h2>"
+"							</header>"
+"							<div id='innerdiv' class='container'>"
+"    							<script>document.write(contactform)</script>"
+"							</div>"
+"							<footer id='contact_footer' class='container'>"
+"    							<p>מייל: example@example.com<span class='tab'>טל: 012-3456789</span></p>"
+"							</footer>"
+"						</div>"
+"					</div>"
+"			    </div>";

function resetconframe() {
	var element = document.getElementById("conframe");
	
	element.src="./contactform.html";
}

/*
function setfocus() {	//	TODO	not working!
	var element = document.getElementById("conframe");
	element.src = element.src;
	alert("hi");
}
*/