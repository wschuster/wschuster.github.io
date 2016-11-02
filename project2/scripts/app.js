$(document).ready(function(){

	$.ajax({
		type: 'GET',
		//insert your the url of your JSON file hosted by github

		url: 'data.json',
		dataType: 'json',

		success: function(data) {

			

			$.each(data, function(i,memories){
				//$("body").append('<div class="orb" id="orb-'+i+'">' + '</div>' + '<div class="container">' + '<div class="memory">');
				 $("body").append('<div class="container">' + '<div class="memory">' + memories.firstmemory + '</div>' + '<div class="orb" id="orb-' + i + '">' + "</div>" + "</div>");
				

		


				if (memories.happiness == "yes"){
					$("#orb-"+i).css("background-color", "#ffff00");
				} else if (memories.sadness == "yes"){
					$("#orb-"+i).css("background-color", "#4000ff");}
					else if (memories.excitement == "yes"){
					$("#orb-"+i).css("background-color", "#ff8000");}
				else if (memories.anger == "yes"){
					$("#orb-"+i).css("background-color", "#ff0000");}
				else if (memories.anxiety == "yes"){
					$("#orb-"+i).css("background-color", "#8CC63F");}
				else if (memories.calm == "yes"){
					$("#orb-"+i).css("background-color", "#00ffff");}
				else {
					$("#orb-"+i).css("background-color", "#ff00bf");	
				};

				
			});


		 $(".container").click(function() {
        if ($(this).hasClass("noblur")) {
         $(this).addClass("smollagain");      	 
         $(this).removeClass("noblur");
				 $(this).removeClass("oneclick");
         $(this).children(".memory").removeClass("full");
				 $(this).children(".memory").fadeOut("slow");
         $(this).children(".orb").removeClass("bigger");
					};
          
        if ($(this).hasClass("oneclick")) {
          $(this).children(".memory").addClass("full");
          $(this).addClass("noblur");


        } else if ($(this).hasClass("smollagain")){
         	} else{
          $(this).children(".memory").fadeIn("slow");
          $(this).children(".orb").addClass("bigger");
          $(this).addClass("oneclick");
          }
          
       $(this).removeClass("smollagain");

      });
}

	});
});
