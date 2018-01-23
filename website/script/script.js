

NProgress.configure({ showSpinner: false });




$(document).ready(function() {
    NProgress.inc();
});


$(document).ready(function() {
    setTimeout(function() {
        NProgress.set(1.0);

    $( ".splash" ).fadeTo( "slow", 1 );

    }, 500);
});




