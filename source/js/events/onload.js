var $ = require('jquery');
var about = require('../pages/about.js');
var article = require('../pages/article.js');
var Waypoint = require('waypoints');

// animations
var blackBox = require('../animations/black-box');
var define = require('../animations/define');
var empathize = require('../animations/empathize');
var fastFeedback = require('../animations/fast-feedback');
var guessLess = require('../animations/guess-less');
var ideate = require('../animations/ideate');
var lateralDesign = require('../animations/lateral-design');
var pencils = require('../animations/pencils');
var prototype = require('../animations/prototype');
var showAndTell = require('../animations/show-and-tell');
var storyFirst = require('../animations/story-first');
var test = require('../animations/test');
var why = require('../animations/why');

module.exports = function () {
  blackBox.init();
  define.init();
  empathize.init();
  fastFeedback.init();
  guessLess.init();
  ideate.init();
  lateralDesign.init();
  pencils.init();
  prototype.init();
  showAndTell.init();
  storyFirst.init();
  test.init();
  why.init();

  var state =  {
    modalTarget: null,
    isModalOpen: false
  };

  // Fade the content in when the page is ready
  setTimeout( function() {
    $('body').addClass('loaded');
  }, 50);

  // smooth page transitions
  // - listen for link clicks and maybe fade out before navigation
  $('body').on('click', 'a', function(e) {
    // console.log("checking internal link");
    if ($(this).attr('target') !== '_blank'
        && $(this).attr('href') !== 'undefined'
        && $(this).attr('href') !== '#'
        && $(this).attr('href') !== '') {
      var link = $(this);
      e.preventDefault();
      $('body').removeClass('loaded');
      setTimeout(function() {
        window.location = link.attr('href');
      }, 200);
    }
  });

  // Footer scroll effect
  // listen for footer to scroll into view
  var $footerScrollNav = $('#footer-scroll-nav .js-footer-waypoint');
  if ($footerScrollNav[0]) {

    var footerWaypoint = new Waypoint({
      element: $footerScrollNav,
      offset: '100%',
      handler: function(direction) {
        // console.log("triggered", direction);
        if (direction === 'down') {
          $('#footer-scroll-pad').removeClass('hidden');
          $('#top-scroll').addClass('no-scroll');
        } else {
          $('#footer-scroll-pad').addClass('hidden');
          $('#top-scroll').removeClass('no-scroll');
        }
      }
    });


    $('#footer-scroll-pad').height($('#top-scroll').height());
    setInterval(function() {
      $('#footer-scroll-pad').height($('#top-scroll').height());
    }, 200);
  }

  $('.wow').waypoint(function(direction) {
    //check the direction
    if(direction == 'down') {
      //add the class to start the animation
      $(this.element).addClass('wow-show');
      //then destroy this waypoint, we don't need it anymore
      this.destroy();
    }
  }, {
    //Set the offset
    offset: '98%'
  });

  // listen to rocket button click
  $('.js-to-the-top').click(function() {

    if($('.full-nav').hasClass('modal-open')) {
      // full nav is open so animate it's scrollTop
      $('.full-nav').animate({ scrollTop: 0 }, 400);
    } else {
      // Footer link so animate body scrollTop
      $('html, body').animate({ scrollTop: 0 }, 800);
    }

  });

  // Open Modal
  $('.js-modal-toggle').click(function(e) {
    // console.log("in modal toggle");
    e.preventDefault();
    $('.top-bar').removeClass('nav-up').addClass('nav-down');
    $('.nav-toggle').removeClass('hidden');

    if (state.isModalOpen === true) {
      state.isModalOpen = false;

      // set the modal target from the data attribute on the link
      $('#' + state.modalTarget).removeClass('modal-open');

      // show the top bar by adding removing class
      $('#page-top-bar').removeClass('modal-open');

      // Turn the x into a hamburger
      $('.nav-toggle').removeClass('open');
      $('.nav-toggle').removeClass('nav-toggle--black');

      // allow body to scroll again
      $('body').removeClass('no-scroll');

      // reset modal target
      state.modalTarget = null;
    } else {
      state.isModalOpen = true;

      // set the modal target from the data attribute on the link
      state.modalTarget = $(this).data('modal-target');
      var invert = $(this).data('invert-toggle');

      $('#' + state.modalTarget).scrollTop(0).addClass('modal-open');

      // hide the top bar by adding this class
      $('#page-top-bar').addClass('modal-open');

      // change the hamburger icon to an x
      $('.nav-toggle').addClass('open');
      if (invert === true) {
        $('.nav-toggle').addClass('nav-toggle--black');
      }

      // prevent body from scrolling in backgroud
      $('body').addClass('no-scroll');
    }
  });

  // // Close Modal With Key
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      // hide modal
      $('#' + state.modalTarget).removeClass('modal-open');

      // show the top bar by adding removing class
      $('#page-top-bar').removeClass('modal-open');

      // change x icon back to hamburger
      $('.nav-toggle').removeClass('open');

      // allow body to scroll again
      $('body').removeClass('no-scroll');

      // reset modal target
      state.modalTarget = null;
      state.isModalOpen = false;
    }
  });

  // prevent page from flashing alternative header background color after load
  setTimeout( function() {
    var $altHeaderColorChangeEl = $('#alt-header-color-change');
    if ($altHeaderColorChangeEl[0]) {
      var waypoint = new Waypoint({
        element: $altHeaderColorChangeEl,
        offset: '50%',
        handler: function(direction) {
          if (direction === 'down') {
            $('.top-bar').addClass('top-bar--alt');
            $('#nav-text').html('Design Thinking');
          } else {
            $('.top-bar').removeClass('top-bar--alt');
            $('#nav-text').html('Principles of Product Design');
          }
        }
      });
    }
  }, 500);

  // check if user has scroll and hide/show nav
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.top-bar').outerHeight();

    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function(event) {
      didScroll = true;
    });

    // run hasScrolled() and reset didScroll status
    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      var currentPosition = $(this).scrollTop();
      if (Math.abs(lastScrollTop - currentPosition) <= delta)
        // not sure what's happening here
        return;
        // if current position > last position && scroll past navbar
        if (currentPosition > lastScrollTop && currentPosition > navbarHeight) {
          // scroll down
          $('.top-bar').removeClass('nav-down').addClass('nav-up');
          $('.nav-toggle').removeClass('colored').addClass('hidden');
        } else {
          // scroll up
          // if did not scroll past the document
          if (currentPosition + $(window).height() < $(document).height()) {
            $('.top-bar').removeClass('nav-up').addClass('nav-down');
            $('.nav-toggle').removeClass('hidden');
          }
        }

        lastScrollTop = currentPosition;
    };

  about.onload();
  article.onload();
}
