<!DOCTYPE html>
<html lang="he-IL" dir="rtl">
<head>
	<meta charset="UTF-8">
	<title>Form Sent</title>
	
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Oswald">
	
	<link rel="stylesheet" type="text/css" href="./stylesheets/theme.css">
	<link rel="stylesheet" type="text/css" href="./stylesheets/contact.css">
	
	<style>
	* {
		color: black;
		margin: auto;
	}
	
	body {
		background: white;
		margin: auto;
	}
	
	#thanks {
		position: fixed;
		width: 100%;
		height: 100%;
		
		background: url("./visualstorage/photos/sent.png") no-repeat center fixed;
		background-size: contain;
	}
	</style>
	
</head>
<body>

<?php
	$to = "danielbz@post.jce.ac.il";
	$subject = $_POST['subject'];
	$msg = wordwrap($_POST['message'],70);
	$headers = "From: " . $_POST['email'] . "(" . $_POST['name'] . ")\r\n";
	
	mail($to,$subject,$msg,$headers);
?>
	
	<a href="./contactform.html"><img id="thanks" alt="טופס נשלח" src="./visualstorage/photos/pixel.gif"></a>
</body>
</html>