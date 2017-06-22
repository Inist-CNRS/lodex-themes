$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
      // pour ancre sur la meme page
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname) {
      var target = $(this.hash);
      var speed = 1000;
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top - 126}, speed);
        return false;
      }
    }
  });
  //Pour url contenant une ancre (autre page)
  if($(location.href.split("#")[1])) {
      var target = $('#'+location.href.split("#")[1]);
      var speed = 1000;
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top - 126}, speed);
        return false;
      }
    }
});
