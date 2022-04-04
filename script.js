var slideIndex = 0;

showSlides();

function showSlides() {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
       }

       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,2000);
}

var nav = responsiveNav(".menu", { // Selector
       animate: true, // Boolean: Use CSS3 transitions, true or false
       transition: 250, // Integer: Speed of the transition, in milliseconds
       label: "Menu", // String: Label for the navigation toggle
       insert: "after", // String: Insert the toggle before or after the navigation
       customToggle: "menuresponsive", // Selector: Specify the ID of a custom toggle
       openPos: "relative", // String: Position of the opened nav, relative or static
       jsClass: "js", // String: 'JS enabled' class which is added to <html> el
       init: function(){}, // Function: Init callback
       open: function(){}, // Function: Open callback
       close: function(){} // Function: Close callback
   });
  

