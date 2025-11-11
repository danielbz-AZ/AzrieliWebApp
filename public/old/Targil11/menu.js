var menu = "<ul id=menu>"
+"<!------------------------------------------------------------------------------>"
+"				<li><a href='.'>Home</a>"
+"<!------------------------------------------------------------------------------>"
+"				<li><a href='frog.html'>Frog page</a>"
+"					<ul>"
+"						<li><a href='frog.html'>Green Frog</a>"
+"						<li><a href='pfrog.html'>Purple Frog</a>"
+"					</ul>"
+"<!------------------------------------------------------------------------------>"
+"				<li><a href='croc.html'>Croc page</a>"
+"					<ul>"
+"						<li><a href='croc.html'>Swamp croc</a>"
+"						<li><a href='acroc.html'>Amazon croc</a>"
+"						<li><a href='scroc.html'>Savanah croc</a>"
+"					</ul>"
+"<!------------------------------------------------------------------------------>"
+"				<li><a href='kang.html'>Kang page</a>"
+"<!------------------------------------------------------------------------------>"
+"				</ul>";

var page = window.location.href;
	
	function verify() {
		var tafrit = document.getElementById("menu");
		var elements = tafrit.getElementsByTagName("a");
		var upper_element = null;
		
		for (i=elements.length-1; i>=0; --i) {
			if (page.indexOf(elements[i].href)>=0) {
				elements[i].className="active";
				if (upper_element==null) {
					upper_element=elements[i].parentNode.parentNode;
				}
			}
		}
		
		if (upper_element.id==tafrit.id) {
			upper_element.parentNode.firstChild.className="active";
			return;
		}
		else {
			upper_element.parentNode.firstChild.className="active";
			document.getElementById("sidebar").innerHTML="<ul id=sidemenu>"+upper_element.innerHTML+"</ul>";
		}
	}