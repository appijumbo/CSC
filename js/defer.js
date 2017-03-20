/*global window: false, document: false */
/*jshint jquery: true, es5: true, quotmark: double, strict: true*/
/* defering Images */
(function(){
    "use strict";
    var imgDefer = document.getElementsByTagName("img"); for (var i=0; i<imgDefer.length; i++) { if(imgDefer[i].getAttribute("data-src")) { imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src")); } }
})();



/* to defer the video downloading from youtube etc use data-src and this js */
/* https://varvy.com/pagespeed/defer-videos.html */
(function (){
    "use strict";
    var vidDefer = document.getElementsByTagName("iframe");
    for (var i=0; i<vidDefer.length; i++) {
        if(vidDefer[i].getAttribute("data-src")) {
            vidDefer[i].setAttribute("src",vidDefer[i].getAttribute("data-src"));
        }}
})();



/* defering Meetup Button */
(function(){
    
})();

/* defering Twitter Button */
(function(){
    
})();

/* defering Facebook Button */
(function(){
    
})();

 
// Google Analytics Code
(function(i,s,o,g,r,a,m){"use strict";i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");

  ga("create", "{{ site.google_analytics }}", "auto");
  ga("send", "pageview");


