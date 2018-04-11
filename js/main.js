$('.menu-icon').click(function() {
  $('header').toggleClass('menu-opened');
}
);

$('.animation-group').waypoint(function() {
  $(this.element).find('.animate-fade, .animate-fade-up').addClass('animated');
}, {offset: '90%' });

$('.animate-fade, .animate-fade-up').waypoint(function() {
  $(this.element).addClass('animated');
}, {offset: '90%' });

$('.home-sections').waypoint(function (direction) {
    if (direction == 'down') {
        $('.desktop-images').addClass('stick');
    } else {
        $('.desktop-images').removeClass('stick');
    }
}, {offset: '155px' });

$('.home-sections').waypoint(function (direction) {
    if (direction == 'down') {
        $('.home-sections').addClass('stick');
    } else {
        $('.home-sections').removeClass('stick');
    }
}, {offset: '50%' });

$('.home-sections').waypoint(function (direction) {
    if (direction == 'down') {
        $('.desktop-images, .down-arrow').addClass('bottom');
    } else {
        $('.desktop-images, .down-arrow').removeClass('bottom');
    }
}, {offset: 'bottom-in-view' });

$('.community').waypoint(function (direction) {
    if (direction == 'down') {
        $('.about-image').addClass('fade');
    } else {
        $('.about-image').removeClass('fade');
    }
}, {offset: '30%' });

$('.family').waypoint(function (direction) {
    if (direction == 'down') {
        $('.community-image').addClass('fade');
    } else {
        $('.community-image').removeClass('fade');
    }
}, {offset: '30%' });

$('.events').waypoint(function (direction) {
    if (direction == 'down') {
        $('.family-image').addClass('fade');
    } else {
        $('.family-image').removeClass('fade');
    }
}, {offset: '30%' });

// $('.page-title').waypoint(function (direction) {
//     if (direction == 'down') {
//         $('.about-nav, .about-sections, .overlay').addClass('stick');
//     } else {
//         $('.about-nav, .about-sections, .overlay').removeClass('stick');
//     }
// }, {offset: '-16px' });

if( $(window).width() < 900 ) {
  $('.page-title').waypoint(function (direction) {
      if (direction == 'down') {
          $('.about-nav, .about-sections, .overlay').addClass('stick');
      } else {
          $('.about-nav, .about-sections, .overlay').removeClass('stick');
      }
  }, {offset: '-16px' });
}

if( $(window).width() >= 900 ) {
  $('.page-title').waypoint(function (direction) {
      if (direction == 'down') {
          $('.about-nav, .about-sections, .overlay').addClass('stick');
      } else {
          $('.about-nav, .about-sections, .overlay').removeClass('stick');
      }
  }, {offset: '-22px' });
}

// $('.about-sections').waypoint(function (direction) {
//     if (direction == 'down') {
//         $('.about-nav').addClass('fade');
//     } else {
//         $('.about-nav').removeClass('fade');
//     }
// }, {offset: 'bottom-in-view' });