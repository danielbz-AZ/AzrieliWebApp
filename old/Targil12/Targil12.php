<!DOCTYPE php>

<html>

	<head>
		<title>Targil 12 - Wednesday</title>
		
		<meta charset="UTF-8">
		
		<style>
			body		{text-align:center}
			
			#phpframe	{margin:auto; max-width:520px; border:2px solid red}
			
			#formdiv	{margin:10px; padding:10px; max-width:200px;
						border:10px outset silver; background:linear-gradient(to bottom right, lightgray, gray);
						margin-left:50%; transform:translateX(-50%);
						vertical-align:center}
		</style>
		
		<script>
		</script>
	</head>

	<body>
		<a href="../" style="position:absolute; display:inline-block; left:0px"><img src="home.gif" height=50px title="home (index page)" alt="דף הבית"></a>
		
		<div id=phpframe>
			<?php
				print	("<div id=formdiv>"
						."<h3 style='margin:5px'>Form Data:</h3>"
						."Name:		".$_REQUEST['fname']."<br>"
						."Size:		".$_REQUEST['size']."<br>"
						."Country:	".$_REQUEST['countries']."<br>"
						."<a href='./Targil12_wednesday.html'>Back</a>"
						."</div>"
						);
			?>
		</div>
	</body>

</html>