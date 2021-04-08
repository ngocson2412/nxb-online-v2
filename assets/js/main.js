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
- 25, FiX Input Control Mobile
- 26, Maintain Scroll Postion Partner
- 27, home dextop parner-author
-29, active chonbook-MB
- 31,cate-filter-mb
- 32, tab wrapper
*/

/* ============================= 1, init  ============================= */
$(document).ready(function () {
    scroll.init();
    menuComponent.init();
    lazy_load.init();
    select_2.init();
    reply_comment.init();
    password_show.init();
    modalAuthor.init();
    qualityControl.init();
    optionsDetail.init();
    checkout.init();
    typicalSilder.init();
    cartmobile.init();
    owl.init();
    orderProduct.init();
    homeSilder.init();
    homeSilderMobile.init();
    cartmobilev2.init();
    checkoutModal.init();
    megaMenuOverlay.init();
    readMorePayment.init();
    sweetAlert.init();
    fixScrollBarCheckout.init();
    fixInputControlMobile.init();
    audioPlayer.init();
    collectionSlider.init();
    partnerAuthor.init();
    nxb_plyr.init();
    viewmore.init();
    subMenuChild.init();
    videoViewerPage.init();
    list_video.init();
    cate_filter.init();
    tabWrapper.init();
    topicMobile.init();
    borderColor.init();
});

/* ============================= 2, Scroll ============================= */
const scroll = {
    init: function () {
        this.goToTop();
    },
    goToTop: function () {
        var btn = $(".scroll__to-top");
        $(window).scroll(function () {
            if ($(window).scrollTop() > 80) {
                btn.show();
            } else {
                btn.hide();
            }
        });
        btn.on("click", function (e) {
            e.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                "300"
            );
        });
    },
};

/* ============================= 3, Menu Aim Master  ============================= */
const menuComponent = {
    init: function () {
        this.setupMenu();
        this.toggleCategory();
        this.mainMenuMobile();
        this.subMenuMobile();
        this.subMenuMobileLv2();
    },
    setupMenu: function () {
        var $menu = $(".dropdown-menu");
        $menu.menuAim({
            activate: activateSubmenu,
            deactivate: deactivateSubmenu,
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
                height: height - 4,
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
        $(".dropdown-menu li").click(function (e) {
            e.stopPropagation();
        });

        $(".menu__category .dropdown-menu").mouseleave(function () {
            $(".popover").css("display", "none");
            $("a.maintainHover").removeClass("maintainHover");
        });

        // $('.menu__category .dropdown-menu > li').mouseenter(function(e) {
        //     activateSubmenu(e.currentTarget)
        // })

        $(document).click(function () {
            $(".popover").css("display", "none");
            $("a.maintainHover").removeClass("maintainHover");
        });
    },
    toggleCategory: function () {
        const categoryBtn = $(".menu__category");
        if (categoryBtn.hasClass("menu__index")) {
            categoryBtn.addClass("active");
        } else {
            categoryBtn.hover(() => {
                categoryBtn.toggleClass("active");
            });
        }
    },
    mainMenuMobile: function () {
        const body = document.querySelector("body");
        const menuBtn = document.querySelector(".header__button.menu");
        const menuWrap = document.querySelector(".menu__list-mobile");
        const menuOverlay = document.querySelector(".menu__list__overlay");
        if (menuBtn && menuOverlay) {
            menuBtn.addEventListener("click", () => {
                menuWrap.classList.add("active");
                body.classList.add("modal-open");
            });
            menuOverlay.addEventListener("click", () => {
                menuWrap.classList.remove("active");
                body.classList.remove("modal-open");
            });
        }
    },
    subMenuMobile: function () {
        const categoryLink = $(".menu__list-mobile .menu__list__wrap > li a");
        categoryLink.bind("click", function (e) {
            const isExistSubmenu = $(this).parent().find(".popover__submenu");
            if (isExistSubmenu.length != 0) {
                e.preventDefault();
                $(this).parent().toggleClass("active");
                isExistSubmenu.slideToggle("fast");
            }
        });
    },
    subMenuMobileLv2: function () {
        const categoryLink = $(
            ".menu__list-mobile .popover__submenu li > .category__link"
        );
        categoryLink.bind("click", function (e) {
            const isExistSubmenu = $(this).parent().find(".submenu__item");
            if (isExistSubmenu.length != 0) {
                e.preventDefault();
                isExistSubmenu.slideToggle("fast", function () {
                    if (isExistSubmenu.css("display") == "none") {
                        $(this).parent().removeClass("active");
                    } else {
                        $(this).parent().addClass("active");
                    }
                });
            }
        });
    },
};

/* ============================= 4, Lazy Loading Image ============================= */
const lazy_load = {
    init: function () {
        this.lazy_loading();
    },
    lazy_loading: function () {
        const myLazyLoad = new LazyLoad({
            elements_selector: ".lazy",
            // threshold: 0,
        });
        myLazyLoad.update();
    },
};

/* ============================= 5, Message reply ============================= */
const reply_comment = {
    init: function () {
        this.reply_comment();
    },
    reply_comment: function () {
        const click_reply = document.querySelectorAll(
            ".comment-box .content__reply-name"
        );
        const show_reply = document.querySelector(
            ".comment-box .comment__reply"
        );
        if (click_reply && show_reply) {
            click_reply.forEach((item, index) =>
                item.addEventListener("click", () => {
                    show_reply.classList.toggle("active");
                })
            );
        }
    },
};

/* ============================= 6, Password show ============================= */
const password_show = {
    init: function () {
        this.show();
    },
    show: function () {
        $(".icon__small").bind("click", function () {
            let input = $(this).parent().find("input.nxb__pw");
            if (input.attr("type") === "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    },
};

/* ============================= 7, Author Modal ============================= */
const modalAuthor = {
    init: function () {
        this.showModal();
    },
    showModal: function () {
        const btnShow = $(".author-list__more-list span");
        const modalOverlay = $(".list__overlay");
        const listContent = $(".list__content");
        const btnClose = $(".list__content-btn");
        btnShow.click(function () {
            modalOverlay.addClass("list__overlay--show");
            listContent.addClass("list__content--show");
            $("body").addClass("modal-open");
        });
        btnClose.add(modalOverlay).on("click", function (e) {
            modalOverlay.removeClass("list__overlay--show");
            listContent.removeClass("list__content--show");
            e.stopPropagation();
            $("body").removeClass("modal-open");
        });
    },
};

/* ============================= 8, quality Control ============================= */
const qualityControl = {
    init: function () {
        this.setupQuanlity(
            ".js-qty-increase-2",
            ".js-qty-decrease-2",
            ".js-product-qty-2"
        );
    },
    setupQuanlity: function (increase, decrease, quality) {
        var minVal = 1,
            maxVal = 12;
        $(increase).on("click", function () {
            var $parentElm = $(this).parents(".option-wrap");

            var value = $parentElm.find(quality).val();
            if (value < maxVal) {
                value++;
            }
            $parentElm.find(quality).val(value);
        });
        // Decrease product quantity on cart page
        $(decrease).on("click", function () {
            var $parentElm = $(this).parents(".option-wrap");

            var value = $parentElm.find(quality).val();
            if (value > 1) {
                value--;
            }
            $parentElm.find(quality).val(value);
        });
    },
};

/* ============================= 9, active Choine  ============================= */
const optionsDetail = {
    init: function () {
        this.setupDetail(
            ".list-cart .category-li",
            ".list-cart .category-li__item"
        );
        this.setupDetail(
            ".list-cart-mb .category-li",
            ".list-cart-mb  .category-li__item"
        );
    },
    setupDetail: function (main, options) {
        const wrap = document.querySelector(main);
        if (wrap) {
            const optionsBtn = wrap.querySelectorAll(options);
            optionsBtn.forEach((item, index) =>
                item.addEventListener("click", () => {
                    item.classList.toggle("active");
                    if (item.parentNode.className.includes("sach-giay")) {
                        item.parentNode.classList.toggle("active");
                        const sachGiayOptions = document.querySelector(
                            ".sach-giay__options__wrapper"
                        );
                        if (sachGiayOptions)
                            sachGiayOptions.classList.toggle("active");
                    }
                })
            );
        }
        $(".sach-giay-btn").click(function () {
            $(".sach-giay__options__wrapper").addClass("active");
            $(".sach-giay").addClass("active");
            $(".sach-giay .category-li__item").addClass("active");
        });
    },
};

/* ============================= 10, checkout ============================= */
const checkout = {
    init: function () {
        this.count();
        this.tabPayment();
        this.clickSettime();
        this.removeProduct();
        this.onchange();
    },
    count: function () {
        $(".num-in .plus").click(function () {
            let number = $(this).closest(".num-in").attr("number-product");
            if (number == 0) {
                $(this).off("click");
            } else {
                let th = $(this).closest(".num-in").find(".in-num");
                th.val(+th.val() + 1);
            }
        });
        $(".num-in .minus").click(function () {
            let number = $(this).closest(".num-in").attr("number-product");
            if (number == 0) {
                $(this).off("click");
            } else {
                let th = $(this).closest(".num-in").find(".in-num");
                if (th.val() > 1) {
                    th.val(+th.val() - 1);
                }
            }
        });
    },
    tabPayment: function () {
        $(".payment-group .paymentMethod .method").click(function () {
            $(".payment-group .paymentMethod .method").removeClass("active");
            $(this).addClass("active");
        });
    },
    clickSettime: function () {
        $(".click-show-dropdow").click(function () {
            $(this).find(".dropdow").toggleClass("active");
        });
        $(".click-show-dropdow .dropdow li").click(function () {
            let valuatext = $(this).find(".get-valua-text").text();
            let valuaNumber = $(this).find(".get-valua-number").attr("value");
            $(this)
                .parent()
                .parent()
                .find(".valua-time")
                .attr("value", $.trim(valuaNumber));
            $(this)
                .parent()
                .parent()
                .find(".time-text")
                .text($.trim(valuatext));
            if ($(this).parent().parent().find(".adress")) {
                $(this).parent().parent().find(".adress").addClass("active");
            }
        });
    },
    removeProduct: function () {
        $(".section-checkout__left-item .left-item__delete").click(function () {
            $($(this).closest(".section-checkout__left-item")[0]).fadeOut(
                "slow",
                function () {
                    $(this).remove();
                }
            );
            $(this).fadeOut("slow", function () {
                $(this).remove();
            });
        });
    },
    onchange: function () {
        $(".select-option").change(function () {
            $(this).css({
                color: "#02010E",
                "font-size": "16px",
                "font-weight": "500",
            });
        });
    },
};

/* ============================= 11, Typical Slider============================= */
const typicalSilder = {
    init: function () {
        this.typicalSilder();
        this.typicalBookSliderMb();
    },
    typicalSilder: function () {
        var $owl = $(".typical__slider").owlCarousel({
            loop: true,
            margin: 16,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 2.5,
                    nav: false,
                },
                600: {
                    items: 2,
                },
                768: {
                    items: 3.5,
                },
                769: {
                    items: 4,
                },
                1000: {
                    items: 6,
                },
                1024: {
                    items: 5,
                },
                1200: {
                    items: 6,
                },
            },
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 300,
            nav: true,
            dots: false,
            autoWidth: false,
            navText: [
                "<img src='./assets/images/collection/prev.png'>",
                "<img src='./assets/images/collection/next.png'>",
            ],
        });
        $owl.trigger("refresh.owl.carousel");
    },
    typicalBookSliderMb: function () {
        $(".typical__book__carousel").owlCarousel({
            lazyLoad: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 300,
            margin: 20,
            responsive: {
                0: {
                    items: 2,
                },
                425: {
                    items: 3,
                },
            },
            nav: false,
            dots: false,
        });
    },
};

/* ============================= 12, checkout cart-mb ============================= */
const cartmobile = {
    init: function () {
        this.clickbtn();
    },
    clickbtn: function () {
        $(".time-cart-mb").click(function (e) {
            $(this).find(".choose-time ").toggleClass("active");
            e.stopPropagation();
        });
        $(".time-cart-mb .choose-time li").click(function () {
            let valueChoose = $(this).find("input[type='radio']").attr("value");
            let valuetext = $(this).find("h6").html();
            $($(this).closest(".time-cart-mb")[0])
                .find("input[type='text']")
                .attr("value", valueChoose);
            $($(this).closest(".time-cart-mb")[0])
                .find(".time-text")
                .html(valuetext);
        });
    },
};

/* ============================= 13, Owl Slider============================= */
const owl = {
    init: function () {
        this.latestNewsSlider();
    },
    latestNewsSlider: function () {
        $(".latest-news__body-box").owlCarousel({
            items: 1,
            responsive: {
                1200: {
                    item: 1,
                },
                992: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                0: {
                    items: 1,
                },
            },
            loop: true,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 300,
            dots: false,
            dotsEach: false,
            nav: true,
            navText: [
                '<img src="assets/images/latest-news/left.svg">',
                '<img src="assets/images/latest-news/right.svg">',
            ],
            autoWidth: false,
            margin: 20,
        });
    },
};

/* ============================= 14, Select 2 Filter Partner ============================= */
const select_2 = {
    init: function () {
        this.select2();
        this.select2Mobile();
    },
    select2: function () {
        $(document).ready(function () {
            var data = [];
            $(".mySelect").select2({
                data: data,
                dropdownParent: $(".box-select"),
                placeholder: "Tìm đối tác theo tên",
                dropdownPosition: "below",
                closeOnSelect: false,
                tags: true,
            });
            $("#single").one("select2:open", function (e) {
                $("input.select2-search__field").prop(
                    "placeholder",
                    "Tìm tác giả theo tên"
                );
            });
            $(".author-select").select2({
                dropdownParent: $(".author-type"),
                placeholder: "Tìm tác giả theo tên",
                dropdownPosition: "below",
                closeOnSelect: false,
                tags: true,
            });
        });
    },
    select2Mobile: function () {
        const body = $("body");
        const filterBtn = $("#btn-filter");
        const filterBox = $(".filter__menu");
        const filterOverlay = $(".box-overlay");
        const cancleBtn = $(".filter__menu-icon");
        const closeBtn = $(".mobile__close");

        if (filterBtn && filterOverlay && cancleBtn && closeBtn) {
            filterBtn.click(() => {
                $(".cate-filter__dropdow").removeClass("active");
                setTimeout(function () {
                    filterBox.addClass("active");
                    body.addClass("modal-open");
                }, 300);
            });
            filterOverlay.click(() => {
                filterBox.removeClass("active");
                body.removeClass("modal-open");
            });
            cancleBtn.click(() => {
                filterBox.removeClass("active");
                body.removeClass("modal-open");
            });
            closeBtn.click(() => {
                filterBox.removeClass("active");
                body.removeClass("modal-open");
            });
        }
    },
};

/* ============================= 15, checkout click order ============================= */
const orderProduct = {
    init: function () {
        this.clickOrder();
    },
    clickOrder: function () {
        $(".btn-order").click(function (e) {
            // e.preventDefault();
            // $('#snackbar').addClass('show')
            // setTimeout(function() { $('#snackbar').removeClass('show') }, 3000);
        });
    },
};

/* ============================= 16, Home Slider ============================= */
const homeSilder = {
    init: function () {
        this.homeSlider();
    },
    homeSlider: function () {
        var $owl = $(".home-slider__inner .owl-carousel").owlCarousel({
            items: 1,
            responsive: {
                1024: {
                    item: 1,
                },
                991: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                320: {
                    items: 1,
                },
                0: {
                    items: 1,
                },
            },
            loop: true,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            nav: true,
            navText: [
                "<img src='./assets/images/home-slider/back.svg'>",
                "<img src='./assets/images/home-slider/next.svg'>",
            ],
            autoWidth: false,
            margin: 10,
        });
        $owl.trigger("refresh.owl.carousel");
    },
};

/* ============================= 17, Home Slider Mobile ============================= */
const homeSilderMobile = {
    init: function () {
        this.homeSliderMb();
    },
    homeSliderMb: function () {
        var $owl = $(".home-sliderMb__inner .owl-carousel").owlCarousel({
            items: 1,
            responsive: {
                1024: {
                    item: 1,
                },
                991: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                320: {
                    items: 1,
                },
                0: {
                    items: 1,
                },
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
        $owl.trigger("refresh.owl.carousel");
    },
};
/* ============================= 18, checkout cart-mbv2 ============================= */
const cartmobilev2 = {
    init: function () {
        this.countmb();
    },
    countmb: function () {
        var endProduct = $(".section-checkout__left-item").hasClass(
            "--product-end"
        );
        if (endProduct) {
            $(".section-checkout__left-item.--product-end")
                .find(".num-in .minus,.num-in .plus")
                .off("click");
            $(".section-checkout__left-item.--product-end")
                .find(".in-num")
                .attr("disabled", true);
        }
    },
};
/* ============================= 19, Checkout Modal  ============================= */
const checkoutModal = {
    init: function () {
        this.setupModal();
    },
    setupModal: function () {
        const modal = $(".checkout__modal__wrapper");
        const openModal = $(".js-checkout-modal-open");
        const overlay = $(
            ".checkout__modal__wrapper .checkout__modal__overlay"
        );
        const closeModal = $(
            ".checkout__modal__wrapper .checkout__modal__close"
        );

        openModal.click(() => {
            modal.addClass("active");
        });
        overlay.click(() => {
            modal.removeClass("active");
        });
        closeModal.click(() => {
            modal.removeClass("active");
        });
    },
};
/* ============================= 20, MegaMenu Overlay  ============================= */
const megaMenuOverlay = {
    init: function () {
        this.overlayMega();
    },
    overlayMega: function () {
        const wrap = $(".wrapper");
        const menu = $(".dropdown-menu");
        const overlay = $(".menu__component-overlay");
        const menuBtn = $(".menu__category");
        overlay.css("height", wrap.height());
        if (menuBtn.hasClass("menu__category-index")) {
            return;
        }
        menu.mouseover(function () {
            overlay.show();
        });
        menu.mouseout(function () {
            overlay.hide();
        });
        menuBtn.mouseover(function () {
            overlay.show();
        });
        menuBtn.mouseout(function () {
            overlay.hide();
        });
    },
};
/* ============================= 21, Read More Payment  ============================= */
const readMorePayment = {
    init: function () {
        this.readMorePayment();
    },
    readMorePayment: function () {
        const moreRead = document.querySelector(".content-more");
        const clickBtn = document.querySelector(".load-more-btn");
        const opt = document.querySelector(".btn_readmore");
        const detailBtn = $(".btn-readmore__detail");
        if (moreRead && clickBtn && opt) {
            clickBtn.addEventListener("click", () => {
                moreRead.classList.toggle("load-more-active");
                var hClass = $(moreRead).hasClass("load-more-active");
                console.log(hClass);
                if (!hClass) {
                    clickBtn.innerHTML =
                        'Thu Gọn <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3541 11.3541C14.3076 11.4006 14.2525 11.4376 14.1917 11.4628C14.131 11.488 14.0659 11.501 14.0001 11.501C13.9343 11.501 13.8692 11.488 13.8084 11.4628C13.7477 11.4376 13.6925 11.4006 13.6461 11.3541L8.00008 5.70708L2.35408 11.3541C2.3076 11.4006 2.25241 11.4374 2.19167 11.4626C2.13093 11.4878 2.06583 11.5007 2.00008 11.5007C1.93434 11.5007 1.86924 11.4878 1.8085 11.4626C1.74776 11.4374 1.69257 11.4006 1.64608 11.3541C1.5996 11.3076 1.56272 11.2524 1.53756 11.1917C1.5124 11.1309 1.49945 11.0658 1.49945 11.0001C1.49945 10.9343 1.5124 10.8692 1.53756 10.8085C1.56272 10.7478 1.5996 10.6926 1.64608 10.6461L7.64608 4.64608C7.69253 4.59952 7.74771 4.56258 7.80845 4.53737C7.8692 4.51216 7.93432 4.49919 8.00008 4.49919C8.06585 4.49919 8.13097 4.51216 8.19172 4.53737C8.25246 4.56258 8.30764 4.59952 8.35408 4.64608L14.3541 10.6461C14.4006 10.6925 14.4376 10.7477 14.4628 10.8084C14.488 10.8692 14.501 10.9343 14.501 11.0001C14.501 11.0659 14.488 11.131 14.4628 11.1917C14.4376 11.2525 14.4006 11.3076 14.3541 11.3541Z" fill="white"/></svg>';
                    opt.classList.remove("active");
                } else {
                    $(clickBtn).html(
                        `Xem đầy đủ <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 4.64592C1.69236 4.59935 1.74754 4.56241 1.80828 4.5372C1.86903 4.512 1.93415 4.49902 1.99992 4.49902C2.06568 4.49902 2.13081 4.512 2.19155 4.5372C2.2523 4.56241 2.30747 4.59935 2.35392 4.64592L7.99992 10.2929L13.6459 4.64592C13.6924 4.59943 13.7476 4.56255 13.8083 4.53739C13.8691 4.51223 13.9342 4.49929 13.9999 4.49929C14.0657 4.49929 14.1308 4.51223 14.1915 4.53739C14.2522 4.56255 14.3074 4.59943 14.3539 4.64592C14.4004 4.6924 14.4373 4.74759 14.4624 4.80833C14.4876 4.86907 14.5005 4.93417 14.5005 4.99992C14.5005 5.06566 14.4876 5.13076 14.4624 5.1915C14.4373 5.25224 14.4004 5.30743 14.3539 5.35392L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.1308 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539L1.64592 5.35392C1.59935 5.30747 1.56241 5.2523 1.5372 5.19155C1.512 5.13081 1.49902 5.06568 1.49902 4.99992C1.49902 4.93415 1.512 4.86903 1.5372 4.80828C1.56241 4.74754 1.59935 4.69236 1.64592 4.64592Z" fill="white"/></svg>`
                    );
                    opt.classList.add("active");
                }
            });
        }
        detailBtn.click(function () {
            if (!$(this).hasClass("active")) {
                $(this).css("top", "-44px");
            }
            if ($(this).hasClass("active")) {
                $(this).css("top", "-75px");
            }
        });
    },
};

/* ============================= 23, sweet Alert  ============================= */
const sweetAlert = {
    init: function () {
        this.alertPopUp();
        this.toastMessage();
    },
    alertPopUp: function () {
        $(".btn-alert").click(function () {
            var data = $(this).data("class");
            $(data).closest(".alert-modal-content").addClass("active");
            $("html").css({ overflow: "hidden" });
        });
        $(".close-modal").click(function (e) {
            e.preventDefault();
            $(".alert-modal-content").removeClass("active");
            $("html").css({ overflow: "unset" });
            e.stopPropagation();
        });
        $(".alert-modal-content").click(function () {
            $("html").css({ overflow: "unset" });
            $(this).removeClass("active");
        });
        $(".alert-modal").click(function (e) {
            e.stopPropagation();
        });
    },
    toastMessage: function () {
        $(".btn-toast-mess").click(function () {
            var data = $(this).data("class");
            $(data).closest(".toast-mess__wrap").addClass("active");
            setTimeout(function () {
                $(data).closest(".toast-mess__wrap").removeClass("active");
            }, 3000);
        });
    },
};
/* ============================= 24, FixScrollbarOpenCheckoutModal ============================= */
const fixScrollBarCheckout = {
    init: function () {
        this.fixScrollBar();
    },
    fixScrollBar: function () {
        var checkoutModal = $(".checkout__modal__wrapper");
        if (checkoutModal.hasClass("active")) {
            $("body").addClass("modal-open");
        }
        checkoutModal.click(function (e) {
            if (!$(this).hasClass("active")) {
                $("body").removeClass("modal-open");
            }
        });
    },
};

/* ============================= 25, Audio Player ============================= */
const audioPlayer = {
    init: function () {
        this.audioPlayerFunction();

    },
    audioPlayerFunction: function () {
        const songSlider = document.querySelector("#songSlider");
        const audio = document.querySelector("#main-audio");
        const currentTime = document.querySelector("#current-time");
        const durationTime = document.querySelector("#duration-time");
        const playBtn = document.querySelector(".audio-play-btn");
        const backSongBtn = document.querySelector("#backSongBtn");
        const next15sBtn = document.querySelector("#next15sBtn");
        const back15sBtn = document.querySelector("#back15sBtn");
        const nextSongBtn = document.querySelector("#nextSongBtn");
        const volumeBtn = document.querySelector(".volumeBtn");
        const changeSpeeds = document.querySelector("#change--speeds");
        const changeVolume = document.querySelector("#volumeslider");
        const srcSongs = $(".chaper__list .chapter__list-item");
        let isPlaying = 0;
        let musicIndex = 0;
        
        function currentMusic(index){
            if (srcSongs.length == 0) {
                return;
            }
            if (index >= srcSongs.length) {
                index = index % srcSongs.length;
            }
            if (index < 0) {
                index = srcSongs.length + (index % srcSongs.length);
            }
            musicIndex = index;
            if (Hls.isSupported()) {
                var hls = new Hls();
                audio.src = hls.loadSource(srcSongs[index].getAttribute("data-src"));
                hls.attachMedia(audio);
            }

            $(".chaper__list .chapter__list-item.active").removeClass("active");
            srcSongs[index].classList.add("active");
        }

        currentMusic(musicIndex);

        function playMusic() {
            isPlaying = true;
            audio.play();
            playBtn.classList.replace("fa-play", "fa-pause");
        }

        function pauseMusic() {
            isPlaying = false;
            audio.pause();
            playBtn.classList.replace("fa-pause", "fa-play");
        }

        if (playBtn) {
            playBtn.addEventListener("click", function () {
                isPlaying ? pauseMusic() : playMusic();
            });
        }

        $(".chaper__list .chapter__list-item").click(function (){
            if (Hls.isSupported()) {
                var hls = new Hls();
                audio.src = hls.loadSource(this.getAttribute('data-src'));
                hls.attachMedia(audio);
            }

            var x = $(this).find(".item-order");
            $(".chaper__list .chapter__list-item.active").removeClass("active");
            $(this).addClass("active");
            
            audio.load();
            playMusic();
        });

        if (audio) {
            audio.addEventListener("loadedmetadata", () => {
                let endTime = audio.duration;
                secs = Math.floor(endTime % 60);
                mins = Math.floor(endTime / 60);
                if (secs < 10) {
                    durationTime.innerText = "0" + mins + ":0" + secs;
                } else if (mins >= 0 && secs >= 0) {
                    durationTime.innerText = "0" + mins + ":" + secs;
                } else {
                    durationTime.innerText = "00:00";
                }
            });

            audio.addEventListener("timeupdate", () => {
                progressTiembar.style.width =
                    (audio.currentTime / audio.duration) * 100 + "%";
                let time = Math.round(audio.currentTime);
                let secs = Math.floor(time % 60);
                let mins = Math.floor(time / 60);
                if (secs < 10) {
                    currentTime.innerText = "0" + mins + ":0" + secs;
                } else if (mins >= 0 && secs >= 0) {
                    currentTime.innerText = "0" + mins + ":" + secs;
                } else {
                    currentTime.innerText = "0" + mins + ":0" + secs;
                }
                songSlider.setAttribute("max", Math.floor(audio.duration));
                songSlider.value = Math.round(audio.currentTime);

                let endTime = audio.duration;
                secs = Math.floor(endTime % 60);
                mins = Math.floor(endTime / 60);
                if (secs < 10) {
                    durationTime.innerText = "0" + mins + ":0" + secs;
                } else if (mins >= 0 && secs >= 0) {
                    durationTime.innerText = "0" + mins + ":" + secs;
                } else {
                    durationTime.innerText = "00:00";
                }
                if (audio.currentTime == audio.duration) {
                    musicIndex = musicIndex + 1;
                    currentMusic(musicIndex);
                    playMusic();
                }
            });
        }

        if (nextSongBtn) {
            nextSongBtn.addEventListener("click", function () {
                musicIndex ++;
                if(musicIndex < srcSongs.length){
                    currentMusic(musicIndex);
                    playMusic();
                }
            });
        }

        if (backSongBtn) {
            backSongBtn.addEventListener("click", function () {
                musicIndex --;
                if(musicIndex >= 0){
                    currentMusic(musicIndex);
                    playMusic();
                }
            });
        }
        if (changeSpeeds) {
            changeSpeeds.addEventListener("change", function (e) {
                audio.playbackRate = e.target.value;
            });
        }
        if (changeVolume) {
            changeVolume.addEventListener("mousemove", function () {
                audio.volume = changeVolume.value / 100;
            });
        }

        var progressBar = document.querySelector("#range-progressBar");
        if (changeVolume) {
            changeVolume.oninput = function () {
                progressBar.style.width = this.value + "%";
            };
        }
        var progressTiembar = document.querySelector("#range-timeBar");
        if (songSlider) {
            songSlider.oninput = function () {
                progressTiembar.style.width = this.value + "%";
                playMusic();
            };
        }
        var mutedText = document.querySelector("#muted-volume");
        if (volumeBtn) {
            volumeBtn.addEventListener("click", function () {
                if (audio.muted) {
                    audio.muted = false;
                    volumeBtn.classList.replace(
                        "fa-volume-mute",
                        "fa-volume-up"
                    );
                    changeVolume.value = 100;
                    progressBar.style.width = changeVolume.value + "%";
                    mutedText.textContent = "Tắt tiếng";
                } else {
                    audio.muted = true;
                    volumeBtn.classList.replace(
                        "fa-volume-up",
                        "fa-volume-mute"
                    );
                    changeVolume.value = 0;
                    progressBar.style.width = changeVolume.value + "%";
                    mutedText.textContent = "Bật tiếng";
                }
            });
        }
        
        if (back15sBtn) {
            back15sBtn.addEventListener("click", function () {
                if (audio.currentTime <= 15) {
                    audio.currentTime = 0;
                } else {
                    audio.currentTime -= 15;
                }
            });
        }
        if (next15sBtn) {
            next15sBtn.addEventListener("click", function () {
                audio.currentTime += 15;
                if (audio.currentTime >= audio.duration) {
                    audio.currentTime == audio.duration;
                }
            });
        }

        const musicTimebar = document.querySelector(".audio-timebars");
        if (musicTimebar) {
            musicTimebar.addEventListener("click", (e) => {
                let a = e.offsetX;
                const b = e.srcElement.clientWidth;
                audio.currentTime = (a / b) * audio.duration;
            });
        }

        const btnChapter = document.querySelector("#btnChapter");
        const chapterList = document.querySelector(".chapter__list-change");
        if (btnChapter) {
            btnChapter.addEventListener("click", function () {
                chapterList.classList.toggle("open");
            });
        }
    },
};

/* ============================= 26, viewmore ============================= */
const viewmore = {
    init: function () {
        this.toggleviewmore();
    },
    toggleviewmore: function () {
        var partnerAuthor = $(".partner__author-resume");
        var partnerWraper = $(".partner__author-wrapper");
        if ($(".partner__author-wrapper").position()) {
            var desPos = $(".partner__author-wrapper").position().top + 30;
        }
        var btn = $('.partner__author-viewmore button[data-toggle="collapse"]');
        btn.click(function () {
            $(this).toggleClass("active");
            if ($(this).hasClass("active")) {
                partnerAuthor.toggleClass("show");
                partnerWraper.toggleClass("active");
                $(this).html(
                    'Thu Gọn <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3541 11.3541C14.3076 11.4006 14.2525 11.4376 14.1917 11.4628C14.131 11.488 14.0659 11.501 14.0001 11.501C13.9343 11.501 13.8692 11.488 13.8084 11.4628C13.7477 11.4376 13.6925 11.4006 13.6461 11.3541L8.00008 5.70708L2.35408 11.3541C2.3076 11.4006 2.25241 11.4374 2.19167 11.4626C2.13093 11.4878 2.06583 11.5007 2.00008 11.5007C1.93434 11.5007 1.86924 11.4878 1.8085 11.4626C1.74776 11.4374 1.69257 11.4006 1.64608 11.3541C1.5996 11.3076 1.56272 11.2524 1.53756 11.1917C1.5124 11.1309 1.49945 11.0658 1.49945 11.0001C1.49945 10.9343 1.5124 10.8692 1.53756 10.8085C1.56272 10.7478 1.5996 10.6926 1.64608 10.6461L7.64608 4.64608C7.69253 4.59952 7.74771 4.56258 7.80845 4.53737C7.8692 4.51216 7.93432 4.49919 8.00008 4.49919C8.06585 4.49919 8.13097 4.51216 8.19172 4.53737C8.25246 4.56258 8.30764 4.59952 8.35408 4.64608L14.3541 10.6461C14.4006 10.6925 14.4376 10.7477 14.4628 10.8084C14.488 10.8692 14.501 10.9343 14.501 11.0001C14.501 11.0659 14.488 11.131 14.4628 11.1917C14.4376 11.2525 14.4006 11.3076 14.3541 11.3541Z" fill="white"/></svg>'
                );
            } else {
                $(window).scrollTop(desPos);
                setTimeout(function () {
                    partnerAuthor.toggleClass("show");
                    partnerWraper.toggleClass("active");
                    btn.html(
                        'Xem đầy đủ <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 4.64592C1.69236 4.59935 1.74754 4.56241 1.80828 4.5372C1.86903 4.512 1.93415 4.49902 1.99992 4.49902C2.06568 4.49902 2.13081 4.512 2.19155 4.5372C2.2523 4.56241 2.30747 4.59935 2.35392 4.64592L7.99992 10.2929L13.6459 4.64592C13.6924 4.59943 13.7476 4.56255 13.8083 4.53739C13.8691 4.51223 13.9342 4.49929 13.9999 4.49929C14.0657 4.49929 14.1308 4.51223 14.1915 4.53739C14.2522 4.56255 14.3074 4.59943 14.3539 4.64592C14.4004 4.6924 14.4373 4.74759 14.4624 4.80833C14.4876 4.86907 14.5005 4.93417 14.5005 4.99992C14.5005 5.06566 14.4876 5.13076 14.4624 5.1915C14.4373 5.25224 14.4004 5.30743 14.3539 5.35392L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.1308 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539L1.64592 5.35392C1.59935 5.30747 1.56241 5.2523 1.5372 5.19155C1.512 5.13081 1.49902 5.06568 1.49902 4.99992C1.49902 4.93415 1.512 4.86903 1.5372 4.80828C1.56241 4.74754 1.59935 4.69236 1.64592 4.64592Z" fill="white"/></svg>'
                    );
                }, 700);
            }
        });
    },
};
/* ============================= 27, Fix Input Control Mobile ============================= */
const fixInputControlMobile = {
    init: function () {
        this.fixInputControlMobile();
    },
    fixInputControlMobile: function () {
        const input = $(
            ".filter__menu-box .box-price__form .form-item .input-control"
        );
        input.focus(function () {
            $(".box__cancle-mobile").hide();
        });
        input.blur(function () {
            $(".box__cancle-mobile").show();
        });
    },
};

/* ============================= 27, home dextop parner-author============================= */
const partnerAuthor = {
    init: function () {
        this.partnerAuthorSlider();
    },
    partnerAuthorSlider: function () {
        $(".partner-author.--partner .partner-author__slider").owlCarousel({
            loop: true,
            lazyLoad: true,
            margin: 28,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2.3,
                    margin: 22,
                    nav: true,
                },
                600: {
                    items: 3,
                    margin: 24,
                },
                1000: {
                    items: 5,
                },
            },
        });
        $(".partner-author.--author .partner-author__slider").owlCarousel({
            loop: true,
            lazyLoad: true,
            margin: 28,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2.6,
                    margin: 15,
                    nav: true,
                },
                600: {
                    items: 3,
                    margin: 24,
                },
                1000: {
                    items: 5,
                },
            },
        });
        $(".partner-author .partner-author__slider .owl-nav .owl-prev").html(
            '<img src="assets/images/prevsl.svg" alt="">'
        );
        $(".partner-author .partner-author__slider .owl-nav .owl-next").html(
            '<img src="assets/images/nextsl.svg" alt="">'
        );
        $(window).on("resize load", function () {
            wightScreen = screen.width;
            if (wightScreen < 767) {
                $(
                    ".partner-author .partner-author__slider .owl-nav .owl-next"
                ).html('<img src="assets/images/arrowrmb.svg" alt="">');
            } else {
                $(
                    ".partner-author .partner-author__slider .owl-nav .owl-next"
                ).html('<img src="assets/images/nextsl.svg" alt="">');
            }
        });
    },
};

/* ============================= 28, home dextop parner-author============================= */
const collectionSlider = {
    init: function () {
        this.collectionSlider();
    },
    collectionSlider: function () {
        var $owl = $(".collection-slider .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    item: 1.5,
                },
                320: {
                    items: 1.5,
                },
                425: {
                    items: 1.5,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
            },
            loop: true,
            rewind: false,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            lazyLoad: true,
            nav: true,
            dots: false,
            navText: [
                "<img src='./assets/images/collection/prev.png'>",
                "<img src='./assets/images/collection/next.png'>",
            ],
            autoWidth: false,
            margin: 30,
        });
        $owl.trigger("refresh.owl.carousel");
    },
};
/* ============================= 28, plyr============================= */
const nxb_plyr = {
    init: function () {
        this.nxb_plyr_play();
    },
    nxb_plyr_play: function () {
        const video = document.querySelectorAll("video");
        const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';


        for (var i = 0; i < video.length; i++) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(videoSrc);
                hls.attachMedia(video[i]);
                hls.on(Hls.Events.MANIFEST_PARSED, function(){
                    video[i].play();
                });
                window.hls = hls;
            }
            const player = new Plyr(video[i], {
                captions: { active: true, update: true, language: "en" },
            });
            player.on('languagechange', () => {
                setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
            });
            window.player = player;
        }
    },
};

/* ============================= 29, submenu child============================= */
const subMenuChild = {
    init: function () {
        this.subMenuChild();
    },
    subMenuChild: function () {
        $(".submenu__list .list__item .list__link").click(function () {
            var target = $(this).parent().children(".submenu-child");
            $(target).slideToggle();
        });
    },
};

/* ============================= 30, Video viewer Display ============================= */
const videoViewerPage = {
    init: function () {
        this.showAccordion();
    },
    showAccordion: function () {
        $(".learning-content").click(function () {
            $(".roate-icon").toggleClass("active");
            $(".slidebar-content-left").toggleClass("active");
            $(".video-detail-text").toggleClass("change--width");
        });

        $(".panel-change-icon").click(function () {
            $(this).toggleClass("active");
        });
    },
};
/* =============================30,btn-show-list-study================================*/
const list_video = {
    init: function () {
        this.list_video();
    },
    list_video: function () {
        $("#btn-list-video").bind("click", function () {
            $("#list-video").slideToggle();
        });
    },
};
/* =============================31,cate-filter-mb================================*/
const cate_filter = {
    init: function () {
        this.choose();
    },
    choose: function () {
        $(".cate-filter__control .control-value").click(function () {
            $(".cate-filter__dropdow").toggleClass("active");
            if ($(".cate-filter__dropdow").hasClass("active")) {
                $("body").css("overflow", "hidden");
            } else {
                $("body").css("overflow", "unset");
            }
        });
        $(".cate-filter__dropdow").click(function () {
            $(this).removeClass("active");
            if (!$(".cate-filter__dropdow").hasClass("active")) {
                $("body").css("overflow", "unset");
            }
        });
        $(".cate-filter__dropdow li").click(function () {
            let text = $(this).find("span").html();
            let value = $(this).find("input[type='radio']").val();
            let valueSelect = $(this)
                .closest(".cate-filter__control")[0]
                .querySelector(".control-value input");
            let elementText = $(this)
                .closest(".cate-filter__control")[0]
                .querySelector(".control-value h6");
            $(valueSelect).attr("value", value);
            $(elementText).html(text);
        });
        $(".cate-filter__button button").click(function () {
            $(".cate-filter__button button").removeClass("active");
            $(this).addClass("active");
        });
    },
};
/* ============================= 32, Tab Wrapper  ============================= */

const tabWrapper = {
    init: function () {
        this.config();
    },
    config: function () {
        const tabItems = $(".tab__wrapper .tab__group .tab__item");
        const tabMainItems = $(".tab__wrapper .tab__main__group .tab__item");

        tabItems.click(function (e) {
            tabItems.removeClass("active");
            tabMainItems.removeClass("active");
            $(this).addClass("active");
            tabMainItems[$(this).index()].classList.add("active");
        });
    },
};

/* ============================= Topic============================= */
const topicMobile = {
    init: function () {
        this.topicSlider();
    },
    topicSlider: function () {
        var $owl = $(".topic-box-mb").owlCarousel({
            responsive: {
                0: {
                    item: 2,
                    margin: 10,
                },
                320: {
                    items: 2,
                },
                425: {
                    items: 2.5,
                },
            },
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            mouseDrag: true,
            lazyLoad: true,
            nav: false,
            dots: false,
            margin: 16,
        });
        $owl.trigger("refresh.owl.carousel");
    }
}
/*=============================Change-border-color-chon-book=========================*/
const borderColor = {
    init: function () {
        this.borderColor();
    },
    borderColor: function () {
        const wrap = document.querySelector(".category-li");
        var optionsBtn;
        if(wrap){
            optionsBtn = wrap.querySelectorAll(".li-item");
        }
        if(optionsBtn) {
            optionsBtn.forEach((item1) => {
                const a = item1.querySelectorAll(".category-li__item");
                a.forEach((item2) => {
                    item2.addEventListener("click", () => {
                        item1.classList.toggle("bd-color");
                    });
                });
            });
        }
    },
};
