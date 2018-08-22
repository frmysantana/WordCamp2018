/*
  Author: Fremy Santana
  Last Modified: August 20, 2018
  
  Purpose: 
        This script adjusts all font sizes on the page based on the window width so that the content most closely
    matches the original design, which was created for windows of 1235px in width.
    Works for all screens of at least 768px in width (any lower and a media query completely changes the layout).
*/

var responsive_window = function() {
    var base_rem = parseInt($("html").css('font-size').substr(0, 2), 10); // get user-agent's default rem size;
    var base_width = 1235; // original design was fitted for 1235px
    
	$(window).resize(function() {
        responsive_font();
	})

	function responsive_font() {
		var rem_perc, new_rem;
		var window_width = $(".site_contain").width();
        
		rem_perc = window_width/base_width;
        new_rem = rem_perc * base_rem;

		$("html").css('font-size', new_rem + "px")
    }
    
	responsive_font();
} ();