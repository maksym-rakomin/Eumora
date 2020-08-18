// окно мобильного меню
(function () {
  let toggle = document.querySelector(".header__toggle");
  let body = document.querySelector("#body");
  let overlay = document.querySelector(".header__overlay");
  let mobileClose = document.querySelector(".header__mobile-close");

  toggle.addEventListener("click", function (event) {
    event.preventDefault();
    body.classList.add("mobile-menu-show");
  });

  overlay.addEventListener("click", function (event) {
    event.preventDefault();
    body.classList.remove("mobile-menu-show");
  });

  mobileClose.addEventListener("click", function (event) {
    event.preventDefault();
    body.classList.remove("mobile-menu-show");
  });
})();

// поиск на десктопе
(function () {
  let body = document.querySelector("#body");
  let form = document.querySelector(".header__form");

  form.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      event.target.classList.contains("open-search") ||
      event.target.classList.contains("header__input-search")
    ) {
      body.classList.add("search-show");
    } else {
      body.classList.remove("search-show");
    }
  });
})();

// прилипающий header
$(document).ready(function () {
  if ($(window).width() < 992) {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 32) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    });
  }
});

// слик слайдер на главной странице
$(document).ready(function () {
  $(".main-slider").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

// слик слайдер advantages
// также используется в карточке товара
$(document).ready(function () {
  $("#advantages-slider").slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// слик слайдер review
$(document).ready(function () {
  $("#review__slider").slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $(`.review__next`),
    prevArrow: $(`.review__prev`),
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: "unslick",
      },
    ],
  });

  $("#review__slider").on("setPosition", function () {
    let marginBottomCard = 20; //
    $(this).find(".review__card").height("auto");
    let slickTrack = $(this).find(".slick-track");
    let slickTrackHeight = $(slickTrack).height() - marginBottomCard;
    $(this)
      .find(".review__card")
      .css("height", slickTrackHeight + "px");
  });
});
// слик слайдеры в карточке товара
$(document).ready(function () {
  $(".product__showing-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product__slider",
    dots: false,
    infinite: false,
    autoplay: false,

    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });

  $(".product__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product__showing-slider",
    dots: false,
    focusOnSelect: true,
    infinite: false,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: null,
        },
      },
    ],
  });

  $(".product__showing-slider .product__showing-slide-wrap").zoom({
    magnify: 4,
  });
});

//изменеие количества товаров
$(document).ready(function () {
  $(".product").on("click", ".quantity__minus", quantityMinus);
  $(".product").on("click", ".quantity__plus", quantityPlus);

  $(".product").on("keypress", ".quantity__input", function (event) {
    event = event || window.event;

    if (
      event.charCode &&
      event.charCode != 0 &&
      (event.charCode < 48 || event.charCode > 57)
    )
      return false;
  });

  $(".product").on("blur", ".quantity__input", function (event) {
    if ($(this)[0].value == "") {
      $(this)[0].value = 0;
    }
  });

  function quantityMinus(event) {
    event.preventDefault();
    const inputNumber = $(this).closest(".quantity").find(".quantity__input");
    if (inputNumber.val() > 1) {
      inputNumber.val(+inputNumber.val() - 1);
    }
  }

  function quantityPlus(event) {
    event.preventDefault();
    const inputNumber = $(this).closest(".quantity").find(".quantity__input");
    inputNumber.val(+inputNumber.val() + 1);
  }
});

//изменеие ссылок для перехода по страницам
$(document).ready(function () {
  let input = $('[name="page"]').val();
  let link = $('a');

  $(link).each((index, item) => {
    $(item).attr('href', input);
  })
});
