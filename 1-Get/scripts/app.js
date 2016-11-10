$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'scripts/data.txt',
		success: function(data) {
			$("body").html(data);
		},
	});
});