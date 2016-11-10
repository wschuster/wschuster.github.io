$(document).ready(function(){

	var whatButtonWasPressed;

	 // Buttons functions 
	$("#btnKikko").click(function(e){ 
		 // Change the value of buttonValue 
		whatButtonWasPressed = "YOU PRESSED KIKKO!";
		 // Run Ajax script 		
		sendData();
    });

	$("#btnShaq").click(function(e){ 
		whatButtonWasPressed = "YOU CHOSE SHAQ!";
		sendData();
    });

	 // Function to send buttonValue to the PHP file 
	function sendData() {
		$.ajax({
			type: 'POST',
			url: 'scripts/save.php',
			data: {
				'tellSeverTheButtonValue': whatButtonWasPressed
			},
			success: function() {
				window.console.log("success");
			}
		});
	}

	// Function to get our textfile data 
	function getData() {
		$.ajax({
			type: 'GET',
			url: 'scripts/data.txt',
			success: function(data) {
				$("#messageBox").html(data);
			},
			complete: function() {
				// Runs the function every .5 seconds
				setTimeout(function() {
					getData();
				}, 500);
			}		
		});
	}

	// Initilize the function above
	getData();

});