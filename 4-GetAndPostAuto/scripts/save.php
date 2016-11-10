<?php 

//Grab the data we passed using Ajax
$remoteData = $_POST['tellSeverTheButtonValue'];

//Opens the omg.txt file, w = Write only. Opens and clears the contents of file; or creates a new file if it doesn't exist 
$file = fopen("data.txt","w");

//Writes our variable into the txt file
echo fwrite($file,$remoteData);

//Closes the file we opened
fclose($file);

?>