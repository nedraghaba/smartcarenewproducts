
/* change language */
$(document).ready(function() {
    $('.btn.btn-lg.btn-danger').hover(function() {
      $(this).html('Smart Care !');
    }, function() {
      $(this).html('About Us');
    });
   
  });
  // optional
 
$('#blogCarousel').carousel({
  interval: 5000,
  
})
$('.jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 900) {
            width = width / 4;
        } else if (width > 600) {
            width = width / 2;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
    .jcarousel({
        // Your configurations options
    });
  