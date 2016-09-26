setInterval(function() {
    $("#timer").html(days[timer.day] + ' ' + hours[timer.hour] + ':' + checkNumber(timer.minutes) + ':' + checkNumber(timer.seconds) + timer.meridiem);
  }, 1000);
  
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//days[0] = Sunday, days[1] = Monday.. 

var hours = [
    '12','1','2','3','4','5','6','7','8','9','10','11','12','1', '2','3','4','5','6','7','8','9','10','11'];

function checkNumber(numberTime) {
  if (numberTime < 10) {
		return "0" + numberTime;
  } else {
		return numberTime;
  }
}

$(document).ready(function() {
  //alert("hi");
	slideThis();
  function slideThis() {
    $('#images').animate({
      marginLeft: "200%"
    }, 10000, "linear", function() {
      $('#images').animate({
        marginLeft: "-200%"
      }, 0, slideThis);
    });
  }
});

$(document).ready(function() {
  //alert("hi");
	slideThis2();
  function slideThis2() {
    $('#images2').animate({
      marginLeft: "200%"
    }, 15000, "linear", function() {
      $('#images2').animate({
        marginLeft: "-200%"
      }, 0, slideThis3);
    });
  }
});

function slideThis3() {
    $('#images2').animate({
      marginLeft: "200%"
    }, 10000, "linear", function() {
      $('#images2').animate({
        marginLeft: "-200%"
      }, 0, slideThis3);
    });
  };

$(document).ready(function() {

  setInterval(function() {
    if (timer.seconds > 10 && timer.seconds < 20) {
      $('#images').animate({
        opacity: 1
      }, {duration: 10000, queue: false, easing: 'linear'});
      $('#box').animate({
        width: "50%"
      }, {duration: 10000, queue: false, easing: 'linear'});
    } else {
    }
  }, 1000);

  setInterval(function() {
    if (timer.seconds > 40 && timer.seconds < 50) {
      $('#images').animate({
        opacity: 0
      }, {duration: 10000, queue: false, easing: 'linear'});
      $('#box').animate({
        width: "0%"
      },  {duration: 10000, queue: false, easing: 'linear'});
    } else {
    }
  }, 1000);
  
  setInterval(function() {
    if (timer.seconds > 19 && timer.seconds < 41) {
      $('#images').css("opacity", 1);
      $('#box').css("width", "50%");
    }
  }, 1000);
  
  setInterval(function() {
    if (timer.seconds > 51 && timer.seconds < 9) {
      $('#images').css("opacity", 0);
      $('#box').css("width", "0%");
    }
  }, 1000);

  setInterval(function() {
    if (timer.seconds > 10 && timer.seconds < 20) {
      $("#timer").append(" in transition...");
    } else {}
  }, 1000);

  setInterval(function() {
    if (timer.seconds > 40 && timer.seconds < 50) {
      $("#timer").append(" in transition...");
    } else {}
  }, 1000);
  
});