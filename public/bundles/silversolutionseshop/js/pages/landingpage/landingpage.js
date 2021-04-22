/**
 Document        : landingpage.js
 Author          : mkr, azh
 Dependencies    : jQuery library
 Description:
 We are using this JS to handle all functionalites for our landing page
 feature.
 */


$(document).ready(function () {

setTimeout(function(){

  function slickTabsInit() {
    // slider inside tabs

    // destroy if exists
    $('.tabs-content .active .slick_tabs_homepage_slider.slick-initialized').slick('unslick');
    var slider = $('.tabs-content .active .slick_tabs_homepage_slider:not(".slick-initialized")');

    slider.on('reinit', function() {
      $(document).foundation();
    });

    slider.on('init', function() {
      $(document).foundation();
    });

    slider.slick({
      slidesToShow: 4,
      infinite: false,
      accessibility: false,
      responsive: [
        {
          breakpoint: 768,
          accessibility: false,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  }

  // main slider
  $('.js-slick-main-homepage-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  // todo: move to an other file
  // catalog slider
  $('.js-slick-bestseller-slider-catalog').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 3,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  // todo: move to an other file
  // catalog slider
  $('.js-slick-bestseller-slider-landingpage-50').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 2,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  // on page load
  slickTabsInit();

  // on tab click
  $('.tabs a').on("click", function () {
    // using this trick we make sure that we have content to work on
    setTimeout(slickTabsInit, 0);
  });


  // Landingpage on start

  setTimeout(function () {
    $('.js-slick-bestseller-slider-landingpage').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 4,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  }) }, 100);


  setTimeout(function () { $('.ez-slider').slick({
    ots: true,
    infinite: true,
    accessibility: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  }) }, 100);


  // Landingpage after update/create

  window.document.body.addEventListener('postUpdateBlocksPreview',sliderPreview );

  function sliderPreview() {

    $('.js-slick-bestseller-slider-landingpage').slick('destroy');
    setTimeout(function () { $('.js-slick-bestseller-slider-landingpage').slick({
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      slidesToShow: 4,
      accessibility: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    }) }, 100);

    $('.tabs-content .active .slick_tabs_homepage_slider.slick-initialized').slick('unslick');
    setTimeout(function () { $('.slick_tabs_homepage_slider').slick({
      slidesToShow: 4,
      infinite: false,
      accessibility: false,
      responsive: [
        {
          breakpoint: 768,
          accessibility: false,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    }) }, 100);

    $('.ez-slider').slick('destroy');
    setTimeout(function () { $('.ez-slider').slick({
      ots: true,
      infinite: true,
      accessibility: false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    }) }, 100);


  }

},100);
});
