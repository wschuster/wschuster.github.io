$(document).ready(function(){     

	if (annyang) {

	  // Let's define a command.
	  var command = {
	    'hello': function() { 
			// Do something when you say "Hello"
		    $("#box").animate({
			    left: '50%'
		    }, 1000);
		    $("#output").fadeIn(2000);
		}, 
	  };

	  // Add our commands to annyang
	  annyang.addCommands(command);
	
	  // Start listening.
	  annyang.start();

	}
	
	
/*
	if (annyang) {
	    var commands = {
	        'one': function() {
				alert("1");
	        },
	        'two': function() {
				alert("2");
	        }
	    };
	    annyang.addCommands(commands);
	    annyang.start();
	}
*/
	


});


