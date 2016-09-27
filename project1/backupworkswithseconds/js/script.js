setInterval(function() {
    $("#timer").html(days[timer.day] + ' ' + hours[timer.hour] + ':' +
        checkNumber(timer.minutes) + ':' + checkNumber(timer.seconds) +
        timer.meridiem);
}, 1000);
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday'
];
//days[0] = Sunday, days[1] = Monday.. 
var hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
    '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'
];

function checkNumber(numberTime) {
        if (numberTime < 10) {
            return "0" + numberTime;
        } else {
            return numberTime;
        }
    }
    /*
Hours: 
Tuesday	9AM–4PM
Wednesday	9AM–4PM
Thursday	9AM–4PM
Friday	9AM–10PM
Saturday	10AM–5PM
Sunday	10AM–5PM
Monday	Closed
*/
$(document).ready(function() {
setInterval(function() {
                if (timer.seconds >= 10 && timer.seconds <= 30) {
                    $("#timer").append(" now opening...");
                } else {}
            }, 1000);
            setInterval(function() {
                if (timer.seconds > 40 && timer.seconds <= 60) {
                    $("#timer").append(" closing soon...");
                } else {}
            }, 1000);
});

$(document).ready(function() {
    setInterval(function() {
        if (timer.day == 2) {
            setInterval(function() {
                if (timer.seconds >= 10 && timer.seconds <= 20) {
                    $('#box').animate({
                        width: "100%"
                    }, {
                        duration: 10000,
                        queue: false,
                        easing: 'linear'
                    });
                } else if (timer.seconds > 20 && timer.seconds <= 40) {
                    $('#box').css({
                        width: "100%",
                    });
                } else if (timer.seconds > 40 && timer.seconds <= 50) {
                    $('#box').animate({
                        width: "0%"
                    }, {
                        duration: 10000,
                        queue: false,
                        easing: 'linear'
                    });
                } else if (timer.seconds > 50 && timer.seconds <= 9) {} else {
                    $('#box').css({
                        width: 0,
                    });
                }
            }, 1000);         
        } else{
            $('body').css({
                opacity: 0,
            })
        }
    }, 1000);

});
var ww = $(window).width();
$(document).ready(function() {
    $('#images').css({
        width: ww
    });
    $('#images2').css({
        width: ww
    });
    $('#images3').css({
        width: ww
    });
});
$(window).resize(function() {
    var ww = $(window).width();
    $('#images').css({
        width: ww
    });
    $('#images2').css({
        width: ww
    });
    $('#images3').css({
        width: ww
    });
});
$(document).ready(function() {
    $('#images').css({
        "animation": "my-animation 15s linear infinite"
    });
});
setTimeout(function() {
    $('#images2').css({
        "animation": "my-animation 15s linear infinite"
    });
}, 5000);
setTimeout(function() {
    $('#images3').css({
        "animation": "my-animation 15s linear infinite"
    });
}, 10000);