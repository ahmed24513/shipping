///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
  $(window).scroll(function(){
     if ($(this).scrollTop() > 600) {
        $('#navbar_top').addClass("fixed-top nav-top");
        // add padding top to show content behind navbar
        // $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top nav-top");
         // remove padding top from body
        // $('body').css('padding-top', '0');
      }
  });
} // end if
