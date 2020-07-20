/* global $ */
$(document).ready(function() {
  $("html, body, *").mousewheel(function(e, delta) {
    this.scrollLeft -= delta;
    //e.preventDefault();
  });

  $(".lazy").Lazy({
    scrollDirection: "horizontal",
    effect: "fadeIn"
  });

  $(".modal").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
