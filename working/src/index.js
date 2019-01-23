   /* bootstrap dropdown hover menu*/
     $('ul.nav li.dropdown').hover(function() 
       {
         $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
       }, function() 
       {
         $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
       });

var win = $(window),

    nav = $('nav'),

    pos = nav.offset().top,
    sticky = function(){ 
      win.scrollTop() > pos ?
        nav.addClass('sticky')
      : nav.removeClass('sticky') }

win.scroll(sticky)
 
