/*============================Menu Table===================
- 1, init
- 2, scroll
- 3, Menu Aim Master
- 4, Lazy Loading Image
- 5, Message reply
- 6, Password show
- 7, Author Modal
- 8, quality Control
- 9, active Choine
- 10, checkout
- 11, Typical
- 12, checkout cart-mb
- 13, Owl Slider
- 14, Select 2 Filter Partner
- 15, checkout click order
- 16, Home Slider
- 17, Home Slider Mobile
- 18, checkout cart-mbv2
- 19, Checkout Modal
- 20, MegaMenu Modal
- 21, Fix Pagination 
- 23, Sweet Alert
- 24, FixScrollbarOpenCheckoutModal
*/
/* ============================= 1, init  ============================= */
$(document).ready(function() {
    scroll.init();
    menuComponent.init()
    homeSilder.init();
    homeSilderMobile.init();
    lazy_load.init();
});

/* ============================= 2, Scroll ============================= */
const scroll = {
    init: function() {
        this.goToTop();
    },
    goToTop: function() {
        var btn = $('.scroll__to-top');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 80) {
                btn.show();
            } else {
                btn.hide();
            }
        });
        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    },
}

/* ============================= 3, Menu Aim Master  ============================= */
const menuComponent = {
    init: function() {
        this.setupMenu()
        this.toggleCategory()
        this.mainMenuMobile()
        this.subMenuMobile()
        this.subMenuMobileLv2()
    },
    setupMenu: function() {
        var $menu = $(".dropdown-menu");
        $menu.menuAim({
            activate: activateSubmenu,
            deactivate: deactivateSubmenu
        });

        function activateSubmenu(row) {
            var $row = $(row),
                submenuId = $row.data("submenuId"),
                $submenu = $("#" + submenuId),
                height = $menu.outerHeight(),
                width = $menu.outerWidth();

            $submenu.css({
                display: "block",
                top: -1,
                left: width - 3,
                height: height - 4
            });

            $row.find("a").addClass("maintainHover");
        }

        function deactivateSubmenu(row) {
            var $row = $(row),
                submenuId = $row.data("submenuId"),
                $submenu = $("#" + submenuId);

            $submenu.css("display", "none");
            $row.find("a").removeClass("maintainHover");
        }
        $(".dropdown-menu li").click(function(e) {
            e.stopPropagation();
        });

        $('.menu__category .dropdown-menu').mouseleave(function() {
            $(".popover").css("display", "none");
            $("a.maintainHover").removeClass("maintainHover");
        })

        // $('.menu__category .dropdown-menu > li').mouseenter(function(e) {
        //     activateSubmenu(e.currentTarget)
        // })

        $(document).click(function() {
            $(".popover").css("display", "none");
            $("a.maintainHover").removeClass("maintainHover");
        });
    },
    toggleCategory: function() {
        const categoryBtn = $('.menu__category');
        if(categoryBtn.hasClass('menu__index')) {
            categoryBtn.addClass('active');
        }
        else {
            categoryBtn.hover(() => {
                categoryBtn.toggleClass('active');
            })
        }
    },
    mainMenuMobile: function() {
        const body = document.querySelector('body')
        const menuBtn = document.querySelector('.header__button.menu')
        const menuWrap = document.querySelector('.menu__list-mobile')
        const menuOverlay = document.querySelector('.menu__list__overlay')
        if (menuBtn && menuOverlay) {
            menuBtn.addEventListener('click', () => {
                menuWrap.classList.add('active')
                body.classList.add('modal-open')
            })
            menuOverlay.addEventListener('click', () => {
                menuWrap.classList.remove('active')
                body.classList.remove('modal-open')
            })
        }
    },
    subMenuMobile: function() {
        const categoryLink = $(".menu__list-mobile .menu__list__wrap > li a")
        categoryLink.bind("click", function (e) {
            const isExistSubmenu = $(this).parent().find(".popover__submenu")
            if (isExistSubmenu.length !=0) {
                e.preventDefault();
                $(this).parent().toggleClass('active');
                isExistSubmenu.slideToggle("fast");
            }
        })
    },
    subMenuMobileLv2: function() {
        const categoryLink = $(".menu__list-mobile .popover__submenu li > .category__link")
        categoryLink.bind("click", function (e) {
            const isExistSubmenu = $(this).parent().find(".submenu__item")
            if (isExistSubmenu.length !=0) {
                e.preventDefault();
                isExistSubmenu.slideToggle("fast", function () {
                    if (isExistSubmenu.css('display') == 'none') {
                        $(this).parent().removeClass('active');
                    } else {
                        $(this).parent().addClass('active');
                    }
                })
            }
        })
    },
}

/* ============================= 16, Home Slider ============================= */
const homeSilder = {
    init: function() {
        this.homeSlider();
    },
    homeSlider: function() {
        var $owl = $(".home-slider__inner .owl-carousel").owlCarousel({
            items: 1,
            responsive: {
                1024: {
                    item: 1
                },
                991: {
                    items: 1
                },
                768: {
                    items: 1
                },
                320: {
                    items: 1
                },
                0: {
                    items: 1
                }
            },
            loop: true,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            nav: true,
            navText: ["<img src='./assets/images/home-slider/back.svg'>", "<img src='./assets/images/home-slider/next.svg'>"],
            autoWidth: false,
            margin: 10,
        });
        $owl.trigger('refresh.owl.carousel');
    }
}

/* ============================= 17, Home Slider Mobile ============================= */
const homeSilderMobile = {
    init: function() {
        this.homeSliderMb();
    },
    homeSliderMb: function() {
        var $owl = $(".home-sliderMb__inner .owl-carousel").owlCarousel({
            items: 1,
            responsive: {
                1024: {
                    item: 1
                },
                991: {
                    items: 1
                },
                768: {
                    items: 1
                },
                320: {
                    items: 1
                },
                0: {
                    items: 1
                }
            },
            loop: true,
            lazyLoad: true,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 500,
            mouseDrag: true,
            nav: false,
            autoWidth: false,
            margin: 0,
        });
        $owl.trigger('refresh.owl.carousel');
    }
}
/* ============================= 18, Lazy Load ============================= */
const lazy_load = {
    init: function() {
        this.lazy_loading();
    },
    lazy_loading: function() {
        $(document).ready(function() {
            const myLazyLoad = new LazyLoad({
                elements_selector: ".lazy",
                threshold: 0
            });
            myLazyLoad.update();
        })
    }
}
