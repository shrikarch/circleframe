<?php

if(isset($_POST) && !empty($_POST))
{
	$to = "shrikarz@gmail.com";



	//$name = $_POST['name'];
	$name = 'macho';
	$subject = "Mail from sharpenerinc.com";

	//$body = "Email : ".$_POST['email'];
	$body = "Email : ";
	//$body .= "<br><br>Message : ".$_POST['message'];


	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	if(mail($to,$subject,$body,$headers))
	{
		echo 'ok';
	}
	else
	{
		echo 'not-ok';
	}
}

?>
