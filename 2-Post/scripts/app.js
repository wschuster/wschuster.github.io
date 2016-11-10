$(document).ready(function(){

	var whatButtonWasPressed;

	 // Buttons functions 
	$("#btnKikko").click(function(e){ 
		 // Change the value of buttonValue 
		whatButtonWasPressed = "KIKKO";
		 // Run Ajax script 		
		sendData();
    });

	$("#btnShaq").click(function(e){ 
		whatButtonWasPressed = "SHAQ";
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

});