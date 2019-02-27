/*$(document).ready( function(){
  $('#alternar').on('click', function(){
    //alert('cambia');
    $(this).toggleClass('cambiado');
  }
  );
});*/

   /*experimental code above this lilne*/

   var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
  $items.removeClass('show'); // remove .show from whichever element currently has it
  $items.eq(itemToShow).addClass('show');    
};

// add click events to prev & next buttons 
$('.next').on('click', function(){
    counter++;
    showCurrent(); 
});
$('.prev').on('click', function(){
    counter--;
    showCurrent(); 
});

// if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
if('ontouchstart' in window){
  $('.diy-slideshow').swipe({
    swipeLeft:function() {
      counter++;
      showCurrent(); 
    },
    swipeRight:function() {
      counter--;
      showCurrent(); 
    }
  });
}



/* bootstrap dropdown hover menu*/
  $('ul.nav li.dropdown').hover(function() 
    {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() 
    {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });


/* sticy menubar*/
var win = $(window),

    nav = $('nav'),

    pos = nav.offset().top,
        sticky = function(){ 
      win.scrollTop() > pos ?
        nav.addClass('sticky')
      : nav.removeClass('sticky') }

win.scroll(sticky)
 
/* Sidebar in and out function */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/*side menubar */

$(document).ready(function(){
    $('#sidebar-btn').click(function(){
      $('#sidebar').toggleClass('visible');
    });
  });
