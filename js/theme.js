(function($){
  var width = $(window).width(),
  breakpoints = {
    xs: 768,
    sm: 992,
    md: 1200
  },
  slideNavTimer = setSlideNavTimer();
  //stuff to do on resize
  $(window).resize(function(){
    width = $(window).width();
  });
  //stuff to do on scroll
  $(window).scroll(function(){
    var scrollY = $(window).scrollTop();
    /*
     * show 'get started' button in the header when past the 'get started' 
     * button in the main carousel
     */
     if(width > breakpoints.sm){
       var gsY = $(".get-started-lg").offset().top;
       if(scrollY > gsY){
         $(".get-started-sm").addClass("on");
       } else {
         $(".get-started-sm").removeClass("on");
       }
     }
  });
  //slide nav listeners
  $(".slide-nav li").on("click", function(){
    var idx = $(this).index();
    $(".slide-nav li.active, .slide.active").removeClass("active");
    $(".slide-nav li:eq("+idx+"), .slide:eq("+idx+")").addClass("active");
    window.clearInterval(slideNavTimer);
    //reset the timer after 30 secs
    setTimeout(function(){
      slideNavTimer = setSlideNavTimer();
    },30000)
  });
  //slide nav auto scroll
  function setSlideNavTimer(){
    window.clearInterval(slideNavTimer);
    var timer = window.setInterval(function(){
      var next = $(".slide-nav li.active").next().length ? $(".slide-nav li.active").next() : $(".slide-nav li:first");
      next.click();
    },5000)
    return timer;
  }
  //scroll arrow listener
  $(".scroll-arrow").click(function(){
    $("html,body").animate({scrollTop:$(".main-content").offset().top - $(".page-top").outerHeight()},500);
  })
})(jQuery)
