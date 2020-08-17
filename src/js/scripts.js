// //изменеие количества товаров в корзине
// $(document).ready(function () {

//         $('.recommendations').on('click', '.quantity-arrow-minus', quantityMinus)
//         $('.recommendations').on('click', '.quantity-arrow-plus', quantityPlus)

//         $('.recommendations').on("keypress", ".quantity-num", function(event) {
//             event = event || window.event;

//             if (event.charCode && event.charCode!=0 && (event.charCode < 48 || event.charCode > 57) )
//                 return false;
//         });

//         // $('.recommendations').on("blur", ".quantity-num", function(event) {
//         //     console.log(888);
//         //     console.log($(this)[0].value);
//         //     if ($(this)[0].value == '') {
//         //         $(this)[0].value = 0;
//         //     }
//         // });
//         // $('.recommendations').on("focus", ".quantity-num", function(event) {
//         //     event = event || window.event;
//         //     console.log(777);
//         // });
//         $('body').on('blur', () => {
//             console.log(888);
//         })

//         // $('.recommendations').on({keypress: function(event) {
//         //     event = event || window.event;

//         //     if (event.charCode && event.charCode!=0 && (event.charCode < 48 || event.charCode > 57) )
//         //         return false;
//         // }, blur:  function(event) {

//         //     if ($(this)[0].value == '') {
//         //         $(this)[0].value = 0;
//         //     }
//         // }}, ".quantity-num");

//         function quantityMinus(event) {
//             const inputNumber = $(this).closest(".quantity").find(".quantity-num");
//             if (inputNumber.val() > 0) {
//                 inputNumber.val(+inputNumber.val() - 1);
//             }
//         }

//         function quantityPlus(event) {
//             const inputNumber = $(this).closest(".quantity").find(".quantity-num");
//             inputNumber.val(+inputNumber.val() + 1);
//         }
// });
// // данное решение обусловленно тем что, JQuery не работает с динамически созданными элементами, а здесь мы имеем как раз такой случай,
// // т.к. при инициализации slick slider он клонирует все элементы, при этом для события "blur" не работает распространение события,
// // поэтому и пришлось прибегнуть к данному решению - написать на чистом JS
// document.querySelectorAll('.recommendations .quantity-num').forEach(item => {
//         item.addEventListener('blur', function(event) {

//             if (this.value == '') {
//                 this.value = 0;
//             }
//     })
// })

// // слик слайдер на главной странице
// $(document).ready(function () {
//     $(".slider").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         arrows: false,
//         autoplay: true,
//     });
// });

// // слик слайдер на главной странице, секция "Популярные серии"
// $(document).ready(function () {
//     $(".slider-popular-series").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         arrows: false,
//         autoplay: true,
//         responsive: [
//             {
//                 breakpoint: 9999,
//                 settings: "unslick",
//             },
//             {
//                 breakpoint: 1199,
//                 settings: {
//                     slidesToShow: 5,
//                     slidesToScroll: 1,
//                     arrows: false,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: true,
//                     nextArrow: document.querySelector('.slider-popular-series__right-arrow'),
//                     prevArrow: document.querySelector('.slider-popular-series__left-arrow')
//                 },
//             },
//         ],
//     });
// });

// // слик слайдер на главной странице, секция "Популярные серии"
// $(document).ready(function () {
//     $(".interesting__slider").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         arrows: false,
//         autoplay: false,
//         responsive: [
//             {
//                 breakpoint: 9999,
//                 settings: "unslick",
//             },
//             {
//                 breakpoint: 2199,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     arrows: false,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: true,
//                     nextArrow: document.querySelector('.interesting__right-arrow'),
//                     prevArrow: document.querySelector('.interesting__left-arrow')
//                 },
//             },
//         ],
//     });
// });

// // слик слайдер на главной странице, секция "Популярные категории", "Новости",
// // "Для всех рекомендаций (Новинка, Распродажа, Хит продаж, Мы рекомендуем)"
// $(document).ready(function () {
//     let windowWidth = $(window).width();
//     const sizeWindowInitslider = 576;
//     const classSliderPopularCategory = ".slider-popular-categories";
//     // const classArrowSliderPopularCategory = ".slider-popular-categories__left-arrow";
//     const classSliderNews = ".slider-news";
//     const classRecommendationsNew = ".slider-recommendations-new";
//     const classRecommendationsStock = ".slider-recommendations-stock";
//    const classRecommendationsHit = ".slider-recommendations-hit";
//     const classRecommendationsAdvice = ".slider-recommendations-advice";

//     if (windowWidth <= sizeWindowInitslider) {
//         initSlider(classSliderPopularCategory);
//         initSlider(classSliderNews);
//         initSlider(classRecommendationsNew);
//         initSlider(classRecommendationsStock);
//         initSlider(classRecommendationsHit);
//         initSlider(classRecommendationsAdvice);
//     }

//     $(window).resize(() => {
//         windowWidth = $(window).width();

//         if (windowWidth <= sizeWindowInitslider) {
//             initSlider(classSliderPopularCategory);
//             initSlider(classSliderNews);
//             initSlider(classRecommendationsNew);
//             initSlider(classRecommendationsStock);
//             initSlider(classRecommendationsHit);
//             initSlider(classRecommendationsAdvice);
//         }
//     });

//     function initSlider(selector) {
//         $(selector)
//             .not(".slick-initialized")
//             .slick({
//                 dots: false,
//                 infinite: true,
//                 speed: 500,
//                 slidesToShow: 1,
//                 pauseOnHover: true,
//                 arrows: false,
//                 autoplay: false,
//                 responsive: [
//                     {
//                         breakpoint: 9999,
//                         settings: "unslick",
//                     },
//                     {
//                         breakpoint: sizeWindowInitslider,
//                         settings: {
//                             slidesToShow: 1,
//                             slidesToScroll: 1,
//                             arrows: true,
//                             nextArrow: $(`${selector}__right-arrow`),
//                             prevArrow: $(`${selector}__left-arrow`)
//                         },
//                     },
//                 ],
//             });
//     }
// });

// // слик слайдер в секции слайдер категория
// $(document).ready(function () {
//     $(".slider-category").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         arrows: false,
//         autoplay: false,
//     });
// });

// // Слайдер в секции sale
// $(document).ready(function () {
//     $(".slider-sale").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         arrows: false,
//         autoplay: true,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: true,
//                     nextArrow: $(`.slider-sale__right-arrow`),
//                     prevArrow: $(`.slider-sale__left-arrow`)
//                 },
//             },
//         ],
//     });
// });

// // Слайдер в секции instagram
// $(document).ready(function () {
//     $(".slider-instagram").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         arrows: true,
//         autoplay: true,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     });
// });

// $(".slider-about").slick({
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     arrows: true,
//     autoplay: true,
//     pauseOnHover: true,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//             },
//         },
//     ],
// });
// /*
// // Слайдер в секции "о компании"
// $(document).ready(function () {
//     $(".slider-about").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         arrows: true,
//         autoplay: true,
//         pauseOnHover: true,
//         // responsive: [
//         //     {
//         //         breakpoint: 1024,
//         //         settings: {
//         //             slidesToShow: 3,
//         //             slidesToScroll: 1,
//         //         },
//         //     },
//         //     {
//         //         breakpoint: 768,
//         //         settings: {
//         //             slidesToShow: 2,
//         //             slidesToScroll: 1,
//         //         },
//         //     },
//         //     {
//         //         breakpoint: 480,
//         //         settings: {
//         //             slidesToShow: 1,
//         //             slidesToScroll: 1,
//         //         },
//         //     },
//         // ],
//     });
// });
// */

// // Слайдер с брендами
// $(document).ready(function () {
//     $(".slider-brand").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 6,
//         arrows: true,
//         autoplay: true,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     });
// });

// // Слайдер с сериями
// $(document).ready(function () {
//     $(".slider-series").slick({
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         arrows: true,
//         autoplay: false,
//         pauseOnHover: true,
//     });
// });
// // открытие дополнительных вариантов выбора серий
// $(document).ready(function () {

//     $('.lists-change').each((index, item) => {

//         if ($(item).find('li').length >= 4) {
//             $(item).append('<li class="list-change-toggle"></li>');
//         }
//     });

//     $('.list-change-toggle').click(function(){
//         $(this).closest('.lists-change').toggleClass('show')
//     });

//     $('.card--slider').mouseleave(function(event) {
//         if ($(this).find('.lists-change').hasClass('show')) {
//             $(this).find('.lists-change').removeClass('show')
//         }

//     })
// });

// // Слайдер "С этим товаром покупают"
// $(document).ready(function () {
//     $(".slider-card").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         arrows: true,
//         autoplay: false,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     });
// });

// // Слайдер с ранее просмотренными товарами
// $(document).ready(function () {
//     $(".slider-viewed").slick({
//         dots: false,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 5,
//         arrows: false,
//         autoplay: true,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     });
// });

// // Слайдер с конфигуратором 1
// $(document).ready(function () {
//     $(".slider-configurator-1").slick({
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         arrows: true,
//         autoplay: false,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     });
// });
// // Слайдер с конфигуратором 2
// $(document).ready(function () {
//     $(".slider-configurator-2").slick({
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         arrows: true,
//         autoplay: false,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     });

//     $('#framework-tab').on('click', () => {
//         $('.slider-configurator-2').slick("reinit")
//     })
// });

// // Слайдер в секции сравнение
// $(document).ready(function () {
//     $(".slider-compare").slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         arrows: true,
//         autoplay: false,
//         pauseOnHover: true,
//     });
// });

// // Добавление фирмы в фильтр
// $(document).ready(function () {
//     function createElement(html, id) {
//         return `<span class="filtered-company d-inline-block border rounded-lg bg-white
//     p-7 pr-30 mr-08 mb-08 bg-gray-fe" data-company="${id}">${html}</span>`;
//     }

//     // let filterByParameters = $("#filter-by-parameters");

//     $(".checkbox__company").on("click", function () {
//         console.log(888);
//         let parent = $(this).closest('.filters-category');
//         let filterByParameters = $(parent).find('.filter-by-parameters');

//         if ($(this).prop("checked")) {

//             let idCheckbox = $(this).attr("id");
//             let result = $("label[for='" + idCheckbox + "']").text();
//             filterByParameters.append(createElement(result, idCheckbox));

//         } else {

//             let idCheckbox = $(this).attr("id");
//             $(`*[data-company="${idCheckbox}"]`).remove();
//         }
//     });

//     $(".filter-by-parameters").on("click", function (e) {
//         let idTargetElement = e.toElement.dataset.company;
//         let parent = $(this).closest('.filters-category');

//         if (e.toElement !== $(".filter-by-parameters")[0]) {
//             e.toElement.remove();
//             $(parent).find(`#${idTargetElement}`).prop("checked", false);
//         }
//     });
// });

// // добавим для карточек с табами индивидуальный id
// $(document).ready(function () {
//     tieIdAndHref(".popular-series__img-wrap");
//     tieIdAndHref(".collapse");
// });

// function tieIdAndHref(selector) {
//     $(selector).each(function (index) {
//         // получаем текущий id элемент
//         var id = $(this).prop("id");
//         // установим этому элементу id равный текущему id + индекс
//         $(this).prop("id", id + index);
//         // найдём элемент в родительском, который ссылается на id и добавим к его href индекс
//         // так как родитель находится на разных уровнях относительно элемента с id, я
//         // родителю добавляю класс ".parent"

//         $(this)
//             .parents(".parent")
//             .find('[href="#' + id + '"]')
//             .attr("href", "#" + id + index);

//         // Для элементов с "data-target"
//         $(this)
//             .parents(".parent")
//             .find('[data-target="#' + id + '"]')
//             .attr("data-target", "#" + id + index);
//     });
// }

// // инициализация скрипта для popover
// $(document).ready(function () {
//     $(".popover-certificate").popover({
//         template:
//             '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body px-12 py-3 text-center"></div></div>',
//         content:
//             '<div class="h5">Все товары имеют</div><a class="text-orange h5 border-bottom-dashed border-orange text-decoration-none" href="#">Сертификаты</a>',
//         html: true,
//         placement: "top",
//     });

//     $(".popover-certificate").on("mouseenter", function () {
//         if (!$(this).attr("aria-describedby")) {
//             $(this).popover("show");
//         }
//     });

//     $(".popover-certificate").on("click", function () {
//         if ($(this).attr("aria-describedby")) {
//             $(this).popover("hide");
//         }
//     });

//     $(document).on("click", ":not(.popover)", function (e) {
//         if (e.target.closest(".popover") || $(e.target).attr("data-toggle") === "popover") {
//             return;
//         }
//         $(".popover-certificate").each(function () {
//             $(this).popover("hide");
//         });
//     });
// });

// // автоизменение высоты <textarea>
// autosize($(".auto-resize-textarea"));

// // скрипт появления модального окна из модального окна (в bootstrap 4.4 не доступно по дефолту)
// $(document).on("hidden.bs.modal", ".modal", function () {
//     $(".modal:visible").length ? $(document.body).addClass("modal-open") : $(document.body).css({ paddingRight: 0 });
// });

// // Переключение рейтинга в карточке товара
// $(document).ready(function () {
//     const output = $(".about-product__output");
//     const label = $(".about-product__star");
//     const input = $(".about-product__input");

//     input.on("click", function () {
//         if ($(".about-product__input:checked")) {
//             const inputId = $(this).attr("id");
//             output.text($(`label[for="${inputId}"]`).data("message"));
//         }
//     });

//     label.hover(
//         function () {
//             output.text($(this).data("message"));
//         },
//         function () {
//             for (let i = 0; i < input.length; i++) {
//                 if ($(input[i]).prop("checked")) {
//                     const inputId = $(input[i]).attr("id");
//                     output.text($(`label[for="${inputId}"]`).data("message"));
//                     return;
//                 } else {
//                     output.text("Нет оценки");
//                 }
//             }
//         }
//     );
// });

// // Подключаем fancybox к странице сертификатов
// $(document).ready(function () {
//     $(".certificates")
//         .find(".instagram__link")
//         .each(function (elem) {
//             const imgSrc = $(this).find(".instagram__img").attr("src");
//             $(this).attr("href", imgSrc).attr("data-fancybox", "true");
//             // console.log($(elem).find('.instagram__img').attr("src"));
//             console.log(elem, $(this), imgSrc);
//         });
// });

// // скрипт отображения меню товаров в секции свет навигации header
// (function () {
//     "use strict";
//     let dropBTN = document.querySelectorAll(".dropbtn-lamp");
//     let dropContent = document.querySelectorAll(".dropdown-content-lamp");

//     if (!!dropBTN[0] && !!dropContent[0]) {
//         defaultLoadItem();

//         dropBTN.forEach((elem) => {
//             elem.addEventListener("mouseover", setClassBTN);
//         });
//     }

//     function setClassBTN(event) {
//         for (let key of dropBTN) {
//             key.classList.remove("active");
//         }
//         event.target.classList.add("active");

//         let idContent = event.target.dataset.item;

//         for (let key of dropContent) {
//             key.classList.remove("active");
//         }
//         document.querySelector(`.dropdown-content-lamp#${idContent}`).classList.add("active");
//     }

//     function defaultLoadItem() {
//         dropBTN[0].classList.add("active");
//         dropContent[0].classList.add("active");
//     }
// })();

// // Изменение классов анимации при воспроизведении анимации
// (function () {
//     "use strict";

//     const parentNode = document.querySelector(".recommendations");
//     const nodeCard = document.querySelectorAll(".recommendations .card");
//     const nodeStatus = document.querySelectorAll(".recommendations .animate__animated");
//     const nodeHide = document.querySelectorAll(".recommendations .hide");
//     let heightAnimateBlock = null;

//     if (getViewWidth(576)) {
//         nodeHide.forEach((elem) => {
//             elem.classList.remove("hide");
//         });
//     }

//     if (parentNode) {
//         heightAnimateBlock = getCoords(parentNode);
//         window.addEventListener("scroll", handleAnimationStart);
//     }

//     function handleAnimationEnd() {
//         this.classList.remove(`animate__animated`, `animate__fadeInLeft`);
//         this.removeEventListener("animationend", handleAnimationEnd);
//     }

//     function handleAnimationStart() {
//         if (window.pageYOffset >= heightAnimateBlock.top - percentHeightAnimateBlock(parentNode, 50) && !getViewWidth(576)) {

//             nodeCard.forEach((elem) => {
//                 elem.classList.add("animate__animated", "animate__fadeInLeft");
//             });

//             nodeStatus.forEach((elem) => {
//                 elem.classList.add("animate__animated", "animate__fadeInLeft");
//             });

//             window.removeEventListener("scroll", handleAnimationStart);

//             nodeCard.forEach(function (elem) {
//                 elem.addEventListener("animationend", handleAnimationEnd);
//             });
//             nodeStatus.forEach(function (elem) {
//                 elem.addEventListener("animationend", handleAnimationEnd);
//             });
//             nodeHide.forEach((elem) => {
//                 elem.classList.remove("hide");
//             });
//         }
//     }

//     function getCoords(elem) {
//         var box = elem.getBoundingClientRect();

//         return {
//             top: box.top + pageYOffset,
//             bottom: box.bottom + pageYOffset,
//             right: box.right + pageXOffset,
//             left: box.left + pageXOffset,
//             height: box.height,
//             width: box.width,
//         };
//     }

//     function percentHeightAnimateBlock(elem, percent = 33) {
//         return (getCoords(elem).height / 100) * percent;
//     }

//     function getViewWidth(num) {
//         return window.innerWidth <= num
//     }
// })();

// // Проявление background секции "О компании"
// (function () {
//     "use strict";

//     const node = document.querySelector(".about__bg-layout");

//     if (node && window.innerWidth >= 576) {
//         window.addEventListener("scroll", () => {
//             setOpacity(node);
//         });
//     }

//     function getCoords(elem) {
//         var box = elem.getBoundingClientRect();

//         return {
//             top: box.top + pageYOffset,
//             bottom: box.bottom + pageYOffset,
//             right: box.right + pageXOffset,
//             left: box.left + pageXOffset,
//             height: box.height,
//             width: box.width,
//         };
//     }

//     function setOpacity(elem, percent = 66) {
//         let heightSetOpacity = getCoords(elem).top - percentHeightAnimateBlock(elem, percent);

//         if (window.pageYOffset >= heightSetOpacity) {
//             elem.style.cssText = "background: rgba(255,255,254, 0);";
//         }
//     }

//     function percentHeightAnimateBlock(elem, percent = 33) {
//         return (getCoords(elem).height / 100) * percent;
//     }
// })();

// // Раскрытие секции о компании на главном экране
// ;(function (){
//     "use strict";

//     if (document.getElementById('about__toggle')) {
//         const parentNode = document.getElementById('about');

//         document.getElementById('about__toggle').addEventListener('click', (e) => {
//             e.preventDefault();
//             parentNode.classList.toggle('show');
//         })
//     }
// })();

// // Открытие меню в footer на больших экранах
// ;(function (){
//     "use strict";

//     const collapseContentFooter = document.querySelectorAll('.accordion__content');

//     if (window.innerWidth >= 576) {
//         collapseContentFooter.forEach(elem => {
//             elem.removeAttribute('id');
//             elem.classList.remove('collapse');
//         })
//     }
// })();

// // Переключение активных элементов header menu
// ;(function () {
//     'use strict';

//     const menu = document.querySelector('.header__main-menu');
//     const menuSection = document.querySelectorAll('.header__main-menu-item');

//     menuSection.forEach(elem => {
//         elem.addEventListener('click', (event) => {
//             menuSection.forEach(element => {
//                 element.classList.remove('active');
//             });

//             event.currentTarget.classList.add('active');
//         })
//     })
// })();

// // Всплывающее окно с количеством товаров в корзине
// ;(function () {
//     'use strict';

//     const alertCountProduct = document.querySelector('#alert-count')
//     const body = document.querySelector('#body')
//     let targetElement = document.querySelectorAll('.btn-add-basket');
//     let conutProductInBasket = 0;

//     targetElement.forEach(elem => {
//         elem.addEventListener('click', (event) => {
//             ++conutProductInBasket;

//             alertCountProduct.innerText = conutProductInBasket;
//             body.classList.add('alert-in-basket-open');

//             window.setTimeout(() => {
//                 body.classList.remove('alert-in-basket-open');
//             }, 2000)
//         })
//     })

// })();

// //Скрипт для очищения предыдущего элемента от border-bottom в секции конструктор
// ;(function () {
//     'use strict';

//     let sideBarItems = document.querySelectorAll('.other-list');
//     let sideBarItemsCategory = document.querySelectorAll('.list-group--category .other-list');
//     let sideBarItemsSeries = document.querySelectorAll('.list-group--series .other-list');
//     let sideBarItemsBrands = document.querySelectorAll('.list-group--brands .other-list');
//     let comparisonOtherSections = document.querySelectorAll('.list-group--comparison .other-list');
//     // let comparisonOtherSections = document.querySelectorAll('.comparison-other-sections .other-list');

//     sideBarItems.forEach(element => {
//         element.addEventListener('mouseover', (e) => {
//             if (e.currentTarget.previousElementSibling && e.currentTarget.previousElementSibling.classList.contains('other-list')) {
//                 e.currentTarget.previousElementSibling.classList.add('non-border-bottom');
//             }
//         });

//         element.addEventListener('mouseout', (e) => {
//             if (e.currentTarget.previousElementSibling && e.currentTarget.previousElementSibling.classList.contains('other-list')) {
//                 e.currentTarget.previousElementSibling.classList.remove('non-border-bottom');
//             }
//         });
//     });

//     addClassActive(sideBarItemsCategory);
//     addClassActive(sideBarItemsSeries);
//     addClassActive(sideBarItemsBrands);
//     addClassActive(comparisonOtherSections);
//     // addClassActive(comparisonOtherSections);

//     strartAddClassActive(sideBarItemsCategory);
//     strartAddClassActive(sideBarItemsSeries);
//     strartAddClassActive(sideBarItemsBrands);
//     strartAddClassActive(comparisonOtherSections);
//     // strartAddClassActive(comparisonOtherSections);

//     function addClassActive(selector) {

//         selector.forEach(element => {

//             element.addEventListener('click', e => {
//                 e.preventDefault();

//                 selector.forEach(elem => {
//                     elem.classList.remove('non-border-bottom--click');

//                     elem.classList.remove('list-group-item--active');
//                     e.currentTarget.classList.add('list-group-item--active');
//                 });

//                 if (e.currentTarget.previousElementSibling && e.currentTarget.previousElementSibling.classList.contains('other-list')) {
//                     e.currentTarget.previousElementSibling.classList.add('non-border-bottom--click');
//                 }
//             })
//         })
//     }

//     function strartAddClassActive(selector) {

//         selector.forEach(element => {

//             if (element.classList.contains('list-group-item--active') && element.previousElementSibling.classList.contains('other-list')) {
//                 element.previousElementSibling.classList.add('non-border-bottom--click');
//             }
//         })
//     }

// })();

// // Фиксация навигации при скроле страницы
// (function () {
//     "use strict";

//     const nav = document.querySelector("#fixed-nav");
//     const navPosition = getCoords(nav);

//     if (nav && window.innerWidth >= 576) {
//         window.addEventListener("scroll", () => {
//             setFixed(nav, navPosition);
//         });
//     }

//     function getCoords(elem) {
//         var box = elem.getBoundingClientRect();

//         return {
//             top: box.top + pageYOffset,
//             bottom: box.bottom + pageYOffset,
//             right: box.right + pageXOffset,
//             left: box.left + pageXOffset,
//             height: box.height,
//             width: box.width,
//         };
//     }

//     function setFixed(elem, position) {
//         if (window.pageYOffset >= position.top) {
//             elem.classList.add("nav-fix");
//         } else {
//             elem.classList.remove("nav-fix");
//         }
//     }
// })();

// // кастомный селект в header
// $('.header__select').select2();

// // трансформация слайдера с сертификатами
// $('.slider-img-product').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav-product'
// });
// $('.slider-nav-product').slick({
// slidesToShow: 5,
// slidesToScroll: 1,
// asNavFor: '.slider-img-product',
// dots: false,
// centerMode: false,
// focusOnSelect: true,
// infinite: false
// });

// $('.slider-img-product .slide').zoom({
// // target: $('.result'),
// magnify: 2,
// });

// // всплывающий попап при покупке серии
// (function () {
//     "use strict";
//     const btn = document.querySelectorAll('.in-basket');

//     btn.forEach((item) => {
//             item.addEventListener("click", function (event) {
//             const parent = findAncestor(event.currentTarget, "card")
//             let btnBuy = parent.querySelector(".buy");
//             btnBuy.classList.add("show");
//             setTimeout(() => {
//                 btnBuy.classList.remove("show");
//             }, 3000)
//         });
//     });

//     function findAncestor (el, cls) {
//         while ((el = el.parentElement) && !el.classList.contains(cls));
//         return el;
//     }

// })();

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
