setInterval(function() {
    $("#timer").html(days[timer.day] + ' ' + hours[timer.hour] + ':' +
        checkNumber(timer.minutes) + timer.meridiem);
}, 1000);
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday'
];
//days[0] = Sunday, days[1] = Monday.. 
var hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
    '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'
];
//hours[0] = 12am, hours[1] = 1am, hours[2] = 2am, hours[3] = 3am, hours[4] = 4am, hours[5] = 5am, hours[6] = 6am, hours[7] = 7am, hours[8] = 8am, hours[9] = 9am, hours[10] = 10am, hours[11] = 11am, hours[12] = 12pm, hours[13] = 1pm, hours[14] = 2pm, hours[15] = 3pm, hours[16] = 4pm, hours[17] = 5pm, hours[18] = 6pm, hours[19] = 7pm, hours[20] = 8pm, hours[21] = 9pm, hours[22] = 10pm, hours[23] = 11pm
function checkNumber(numberTime) {
    if (numberTime < 10) {
        return "0" + numberTime;
    } else {
        return numberTime;
    }
};

function tueWedThu() {
    if (timer.hour == 9) {
        timerOpen();
        $('#box').animate({
            width: "100%"
        }, {
            duration: 100000,
            easing: 'linear'
        });
    } else if (timer.hour >= 10 && timer.hour <= 14) {
        $('#box').css({
            width: "100%"
        });
    } else if (timer.hour == 15) {
        timerClose();
        $('#box').animate({
            width: "0%"
        }, {
            duration: 100000,
            easing: 'linear'
        });
    } else {
        sorryClosed();
        $('#box').css({
            width: "0%"
        });
    }
};

function fri() {
    if (timer.hour == 9) {
        timerOpen();
        $('#box').animate({
            width: "100%"
        }, {
            duration: 100000,
            easing: 'linear'
        });
    } else if (timer.hour >= 10 && timer.hour <= 20) {
        $('#box').css({
            width: "100%"
        });
    } else if (timer.hour == 21) {
        timerClose();
        $('#box').animate({
            width: "0%"
        }, {
            duration: 100000,
            easing: 'linear'
        });
    } else {
        sorryClosed();
        $('#box').css({
            width: "0%"
        });
    }
};

function satSun() {
    if (timer.hour == 10) {
        timerOpen();
        $('#box').animate({
            width: "100%"
        }, {
            duration: 100000,
            easing: 'linear'
        });
    } else if (timer.hour >= 11 && timer.hour <= 16) {
        $('#box').css({
            width: "100%"
        });
    } else if (timer.hour == 17) {
        timerClose();
        $('#box').animate({
            width: "0%"
        }, {
            duration: 100000,
            easing: 'linear'
        });
    } else {
        sorryClosed();
        $('#box').css({
            width: "0%"
        });
    }
};

function mon() {
    sorryClosed();
    $('#box').css({
        width: "0%"
    });
};

function timerOpen() {
    $("#timer").append("<br>now opening...");
};

function timerClose() {
    $("#timer").append("<br>closing soon...");
};

function sorryClosed() {
    $("#timer").append("<br>sorry, we're closed.");
};
setInterval(function() {
    if (timer.day == 1) {
        mon();
    } else if (timer.day >= 2 && timer.day <= 4) {
        tueWedThu();
    } else if (timer.day == 5) {
        fri();
    } else if (timer.day == 6) {
        satSun();
    } else if (timer.day == 0) {
        satSun();
    }
}, 1000);
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