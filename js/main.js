(function ($) {

    var controller = new ScrollMagic.Controller();

    // get all slides
    var slides = ["#slide01", "#slide02", "#slide03"];

    // get all headers in slides that trigger animation
        var headers = ["#slide01 header", "#slide02 header", "#slide03 header"];

    // get all break up sections
        var breakSections = ["#cb01", "#cb02", "#cb03"];


    // Enable ScrollMagic only for desktop, disable on touch and mobile devices
    if (!Modernizr.touch) {



        // SCENE 1
        headers.forEach(function(header, index){
            var num = index +1;

            var headerScene = new ScrollMagic.Scene({
                triggerElement: header,
                offset: -95
            })
                .setClassToggle('#slide0'+num, 'is-active')
                .addTo(controller);

        });



        // SCENE 2

        breakSections.forEach(function(breakSection){

            var breakID = $(breakSection).attr('id');

            var breakScene = new ScrollMagic.Scene({
                triggerElement: breakSection,
                triggerHook: 0.75
            })
                .setClassToggle('#'+breakID, 'is-active')

                .on("enter", function (event) {
                    $('nav').attr('class', 'is-light');

                })
                .addTo(controller);
        });


        // SCENE 3

        slides.forEach(function (slide, index) {

            var slideScene = new ScrollMagic.Scene({
                triggerElement: slide // trigger CSS animation when header is in the middle of the viewport
            })
                .on("enter", function (event) {
                    $('nav').removeAttr('class');
                })
                .addTo(controller);
        });
        
        
        // SCENE 4
        
        slides.forEach(function (slide, index) {
            var $bcg = $(slide).find('.bcg');

            // move bcg container when intro gets out of the the view
            /** FADE INTRO

            var introTl = new TimelineMax();

            introTl
                .to($('#intro header, .scroll-hint'), 0.2, {autoAlpha: 0, ease:Power0.easeNone})
                .to($('#intro .bcg'), 1.4, {y: '40%', ease:Power1.easeOut}, '-=0.2')
                .to($('#intro'), 0.7, {autoAlpha: 0.5, ease:Power0.easeNone}, '-=1.4');

            var introScene = new ScrollMagic.Scene({
                triggerElement: '#intro',
                triggerHook: 0,
                duration: "100%"
            })
                .setTween(introTl)
                .addTo(controller);
**/


            var slideParrallaxScene = new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 1,
                duration: '100%'
            }).setTween(
                TweenMax.from($bcg, 1, {y: '-40%', autoAlpha: 0.3, ease:Power0.easeNone})
            )
            .addTo(controller);

        });

    }

}(jQuery));