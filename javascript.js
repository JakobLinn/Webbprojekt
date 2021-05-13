$(document).ready(function() {
    //Logo fade-in
    setTimeout(() => {$("#fadein").children().fadeOut("slow");}, 200);
    setTimeout(() => {$("#fadein").fadeOut("slow");}, 600);

    //navbar färgändring
    var color = $('header').css('background-color');
    inView('#inview').on('enter', function(){
        $('nav').css('background-color', '#00a19b');
    });
    inView('#outview').on('enter', function(){
        $('nav').css('background-color', color);
    });
});

// animationer till phone-elementet
function startPhoneHover(){
    // Service 1
    document.getElementsByClassName('service')[0].addEventListener('mouseenter', function(){
        $('.screen').eq(1).fadeIn("fast");
        $('.service').eq(1).css('opacity', '0.5');
        $('.service').eq(2).css('opacity', '0.5');
    });
    document.getElementsByClassName('service')[0].addEventListener('mouseleave', function(){
        $('.screen').eq(1).fadeOut("fast");
        $('.service').eq(1).css('opacity', 'initial');
        $('.service').eq(2).css('opacity', 'initial');
    });
    // Service 2
    document.getElementsByClassName('service')[1].addEventListener('mouseenter', function(){
        $('.screen').eq(2).fadeIn("fast");
        $('.service').eq(0).css('opacity', '0.5');
        $('.service').eq(2).css('opacity', '0.5');
    });
    document.getElementsByClassName('service')[1].addEventListener('mouseleave', function(){
        $('.screen').eq(2).fadeOut("fast");
        $('.service').eq(0).css('opacity', 'initial');
        $('.service').eq(2).css('opacity', 'initial');
    });
    // Service 3
    document.getElementsByClassName('service')[2].addEventListener('mouseenter', function(){
        $('.screen').eq(3).fadeIn("fast");
        $('.service').eq(0).css('opacity', '0.5');
        $('.service').eq(1).css('opacity', '0.5');
    });
    document.getElementsByClassName('service')[2].addEventListener('mouseleave', function(){
        $('.screen').eq(3).fadeOut("fast");
        $('.service').eq(0).css('opacity', 'initial');
        $('.service').eq(1).css('opacity', 'initial');
    });
}

function startTimeline(){
    console.log("test");

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        centeredSlides: true,
        speed: 1000,
        grabCursor: true,
        navigation: {
            prevEl: ".timeline-prev",
            nextEl: ".timeline-next",
        },
      });
}

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

function validation(){
    var element = document.getElementById('development');
    if ($('input[type=checkbox]:checked').length == 0) {
        element.setCustomValidity('At least one checkbox must be selected.');
    }
    else {
        element.setCustomValidity('');
    }
    element.reportValidity();
}