(function () {
    "use strict";

    if (window.innerWidth <= 576) {
        
        // скользящий по странице заголовок
        document.addEventListener("DOMContentLoaded", () => {
            new Mhead("#mheader");
        });

        const header = document.getElementById("mheader");

        document.addEventListener("scroll", () => {
            if (window.pageYOffset >= 20) {
                header.classList.add("m-header-shadow");
            } else {
                header.classList.remove("m-header-shadow");
            }
        });
        // боковое меню mmenu
        const page = document.querySelector("#page");
        const mobileMenuClose = document.querySelector(".mobile-menu__close");
        const mobileMenuToggle = document.querySelector(".mobile-menu__toggle");

        toggleMobileMenu(mobileMenuClose);
        toggleMobileMenu(mobileMenuToggle);

        function toggleMobileMenu(elem) {
            elem.addEventListener("click", (event) => {
                event.stopPropagation();
                document.querySelector("#body").classList.toggle("open-mobile-menu");
            });
        }

        const slinky = $("#swipe-menu").slinky({
            title: true,
        });
        const mobilSlinky = $("#mobile-swipe-menu").slinky({
            title: true,
        });

        // затемнение экрана при открытии поиска на мобильном устройстве

        const searchInput = document.querySelector(".mobile-menu__search");
        const body = document.querySelector("#body");

        searchInput.addEventListener("focus", () => {
            body.classList.add("search-input-show");
        });
        searchInput.addEventListener("blur", () => {
            body.classList.remove("search-input-show");
        });
    }
})();

// сортировка и фильтр товаров на мобильных устройствах
(function () {
    "use strict";

    const mobileSort = document.querySelector('.m-sort');
    const body = document.querySelector('#body');
    const mobileSortClose = document.querySelector('#m-sort-modal__close');
    const mobileFiterClose = document.querySelector('#m-filter-modal__close');

    if (mobileSort) {
        mobileSort.addEventListener('click', function(event) {
            event.preventDefault();
    
            let targetBtn = event.target
    
            switch (targetBtn.id) {
                case "m-sort-filter":
                    body.classList.add("m-sort-filter-open");
                    break;
                case "m-sort-sort":
                    body.classList.add("m-sort-sort-open");
                    break;
                default:
                    return false;
                    break;
            }
    
            mobileSortClose.addEventListener('click', function(event) {
                event.preventDefault();
    
                body.classList.remove('m-sort-sort-open');
            })
            mobileFiterClose.addEventListener('click', function(event) {
                event.preventDefault();
    
                body.classList.remove('m-sort-filter-open');
            })
        });
    }


})();
