var $ = require('jquery');

module.exports = {
  onload: function () {
    var audio = $('.audio')[0];
    // console.log(audio);
    if (audio) {
      // console.log("there is audio");
    // Audio time remaining
      // define the needed variables
        audio.addEventListener("timeupdate", function() {
        var timeleft = $('#timeleft');
        var duration = parseInt( audio.duration );
        var currentTime = parseInt( audio.currentTime );
        var timeLeft = duration - currentTime;
        var s;
        var m;

        // animate the audio range div according to the duration
        $('.audio-range').stop(true,true).animate({
          'width': (currentTime + .25) / duration * 100 + '%'
        }, 250, 'linear');

        // calculate the time left
        s = timeLeft % 60;
        m = Math.floor( timeLeft / 60 ) % 60;

        s = s < 10 ? "0"+ s : s;
        m = m < 10 ? "0"+ m : m;

        // print the time left on the audio bar
        timeleft.innerHTML = "(" + m + ":" + s + ")";

    }, false);


    // Reset the audio player after it's ended
    audio.addEventListener("ended", function() {
      audio.currentTime = 0;
      console.log("audio has ended!");
      $(".audio-container").removeClass("playing");
    })

    // Play and pause behavior for audio bar
    $(".play-audio").click( function() {
      var audio = $(this).next('.audio');
      $(this).closest($(".audio-container ")).toggleClass("playing");
      if ( audio[0].paused === true) {
        audio[0].play();
      } else {
        audio[0].pause();
      }
    });

}
    // Play video function
    function playVideo(options) {
      var $container = $(options.videoContainer);

      $container.append('<iframe style="background-color:#000;" class="wistia_embed" width="700px" height="464px" src="' + options.videoSource + '" frameborder="0" allowfullscreen></iframe>')
        .addClass('video--show');
    }

    $(".video-block").on('click', function() {
      var $this = $(this);
      var options = {
        videoSource: $this.data('src'),
        videoContainer: $this.find('.video')
      }

      $this.find('.play').hide();
      $this.removeClass('video-block--placeholder');
      playVideo(options);
    });

    // window._wq = window._wq || [];
    // _wq.push({ id: "_all", onReady: function(video) {
    //   console.log("This will run for every video on the page. Right now I'm on this one:", video);
    // }});

    // Citation Anchor Scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
      if ( $(this).hasClass('js-no-scroll-link') ) {
        return true;
      }
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    var $window = $(window);
    function checkWidth() {
      var windowsize = $window.width();
      return(windowsize);
    }

    $('.subscribe-wrapper').click(function() {
      var windowsize = checkWidth();
      console.log(windowsize);
      if (windowsize < 1024 ) {
        $('.show-on-hover--mobile').toggleClass('show');
      }
    });
  }
};
