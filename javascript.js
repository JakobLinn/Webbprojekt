$(document).ready(function() {
    setTimeout(() => {$("#fadein").fadeOut("slow");}, 300);

    var color = $('header').css('background-color');
    inView('#inview').on('enter', function(){
        $('nav').css('background-color', '#00a19b');
    });
    inView('#outview').on('enter', function(){
        $('nav').css('background-color', color);
    });
});


function menuToggle()
{
    if ($("#menu").css("display") == "none"){
        $("body").css("overflow", "hidden");
        $("#menu").fadeIn("slow");
        $("#menuToggle").html("✕");
    }
    else{
        $("body").css("overflow", "auto");
        $("#menu").fadeOut("slow");
        $("#menuToggle").html("☰");
    }
}

function dropdownToggle()
{
    if($("#dropdown").css("display") == "none"){
        $("#dropdown").slideDown("slow");
        $("#dropdownToggle").html("WE DO ▴");
    }
    else{
        $("#dropdown").slideUp("slow");
        $("#dropdownToggle").html("WE DO ▾");
    }
}