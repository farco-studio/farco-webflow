// STICKY NAVBAR
let exists = $(".sticky-navbar").length ? true : false;
let prevScrollpos = $(window).scrollTop();

$(window).on("scroll", function () {
  if (exists && $(window).scrollTop() > 200) {
    $(".sticky-navbar").removeClass("is-on-top");
  } else if (exists) {
    $(".sticky-navbar").addClass("is-on-top");
  }
});

$(window).scroll(function () {
  var currentScrollPos = $(window).scrollTop();

  if (prevScrollpos > currentScrollPos) {
    if (currentScrollPos < 200) {
      return;
    }
    $(".sticky-navbar").addClass("scrolled-up");
    $(".sticky-navbar").removeClass("scrolled-down");
  } else {
    if (currentScrollPos < 200) {
      return;
    }
    $(".sticky-navbar").addClass("scrolled-down");
    $(".sticky-navbar").removeClass("scrolled-up");
  }

  prevScrollpos = currentScrollPos;
});
