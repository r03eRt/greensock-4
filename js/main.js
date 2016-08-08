
'use strict'

$(function(){

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();

	// Get all Triggers of all headers
	var headers = [".slide1 header", ".slide2 header", ".slide3 header", ".slide4 header"];

	// Creates scene for each slide
	// SCENE 1
    headers.forEach(function (header, index) {

        var num = index+1;

		// Make scene
        var headerScene = new ScrollMagic.Scene({
			// Quien lo lanza
            triggerElement: header,
			// Diferencia con el top
            offset: -95
		})

		// Ponemos que classes se añaden o se quitan cuando pasamos junto con el selector
		.setClassToggle('.slide'+num+' header', 'is-active')

		// Añado la escena al controllador
		.addTo(controller);

	});



}());