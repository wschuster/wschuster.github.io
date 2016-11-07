$(document).ready(function() {

    $(".one").fadeIn(2000, function() {
        $(".two").fadeIn(2500, function() {
            $(".three").fadeIn(2000, function() {
                $(".four").fadeIn(2000, function() {
                    $(".five").fadeIn(3000, function() {
                        $(".six").fadeIn(3000, function() {
                            $('body').removeClass("stop-scrolling")
                        });
                    });
                });
            });
        });
    });

    $('body').addClass("stop-scrolling")

    $(".arrow").click(function() {
        $("#splash").animate({
            height: "0%",
            opacity: 0
        }, 3500);
    });

    $.ajax({
        type: 'GET',
        //insert your the url of your JSON file hosted by github

        url: 'https://raw.githubusercontent.com/wschuster/wschuster.github.io/master/project2/final/scripts/data.json',
        dataType: 'json',

        success: function(data) {



            $.each(data, function(i, memories) {
                //$("body").append('<div class="orb" id="orb-'+i+'">' + '</div>' + '<div class="container">' + '<div class="memory">');
                $("body").append('<div class="container">' + '<div class="orb" id="orb-' + i + '">' + '<div class="memory">' + memories.firstmemory + '</div>' + "</div>" + "</div>");

                if (memories.happiness == "yes") {
                    $("#orb-" + i).css("background-color", "#ffff00");
                } else if (memories.sadness == "yes") {
                    $("#orb-" + i).css("background-color", "#4000ff");
                } else if (memories.excitement == "yes") {
                    $("#orb-" + i).css("background-color", "#ff8000");
                } else if (memories.anger == "yes") {
                    $("#orb-" + i).css("background-color", "#ff0000");
                } else if (memories.anxiety == "yes") {
                    $("#orb-" + i).css("background-color", "#8CC63F");
                } else if (memories.calm == "yes") {
                    $("#orb-" + i).css("background-color", "#00ffff");
                } else {
                    $("#orb-" + i).css("background-color", "#ff00bf");
                };


            });


            $(".container").click(function() {


                $(".container").not(this).removeClass("oneclick");
                $(".container").not(this).children(".orb").removeClass("bigger");
                $(".container").not(this).children(".orb").children(".memory").fadeOut(1000);

                if ($(this).hasClass("noblur")) {
                    $(this).addClass("smollagain");
                    $(this).children(".orb").children(".memory").fadeOut("slow");
                    $(this).children(".orb").removeClass("bigger");
                };
                if ($(this).hasClass("oneclick")) {
                    $(this).children(".orb").children(".memory").clone().addClass("new-full").appendTo('body');
                    $(".container").children(".orb").children(".memory").fadeOut(1000);
                    $('body').addClass("stop-scrolling");
                    $(".new-full").append('<img class="X" src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/385/010_x-512.png" width="100%">')

                } else if ($(this).hasClass("smollagain")) {} else {
                    $(this).children(".orb").children(".memory").fadeIn(1000);
                    $(this).children(".orb").addClass("bigger");
                    $(this).addClass("oneclick");
                }
                $(this).removeClass("smollagain");

                $(".x").click(function() {
                    $('body').children(".memory").fadeOut();
                    $("body").removeClass("stop-scrolling");
                    $(".container").removeClass("oneclick");
                    $(".container").children(".orb").removeClass("bigger");
                    $(this).fadeOut();

                });

            });

        }

    });

});