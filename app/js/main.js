$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header, .menu__list, .overlay').addClass('sticky');
        } else {
            $('.header, .menu__list, .overlay').removeClass('sticky');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.menu__list, .user-nav__box').addClass('sticky');
        } else {
            $('.menu__list, .user-nav__box').removeClass('sticky');
        }
    });

    $('.user-nav__btn').on('click', function() {
        $('.user-nav__input').addClass('active');
        $('.user-nav__btn').addClass('active');
        $('.user-nav__search').addClass('active'); 
    })

    $(document).mouseup(function (e) {
        var container = $('.user-nav__search');
        if (container.has(e.target).length === 0 && $('.user-nav__input, .user-nav__btn, .user-nav__search').hasClass('active')) {
            $('.user-nav__search, .user-nav__btn, .user-nav__input').removeClass('active');
        }
    });


    $('.menu__link--page').on('click', function(e) {
        e.preventDefault();
        $('.menu__item--page, .menu-dropdown--page, .menu__link--page').toggleClass('_active');
    })

    $('.menu__link--home').on('click', function(e) {
        e.preventDefault();
        $('.menu__item--home, .menu-dropdown--home, .menu__link--home').toggleClass('_active');
    })

    $('.user-nav__more').on('click', function(e) {
        e.preventDefault();
        $('.user-nav__more').toggleClass('active');
        $('.menu-dropdown--wide').toggleClass('active');
    })

    $('.menu__burger').on('click', function(e) {
        e.preventDefault();
        $('.menu__list').toggleClass('_active');
        $('.menu__burger').toggleClass('_active');
        $('.user-nav__box').toggleClass('_active');
        $('.user-nav__search').toggleClass('_active');
        $('.user-nav').toggleClass('_active');
        $('.overlay').toggleClass('_active');
    })

    $('.menu__burger, .product-list__aside-btn').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('lock');
    })
    
    $(document).mouseup(function (e) {
        var container = $('.menu');
        if (container.has(e.target).length === 0 && $('.menu__list, .menu__burger, .overlay').hasClass('_active')) {
            $('.menu__list, .menu__burger, .overlay').removeClass('_active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.menu, .product-list');
        if (container.has(e.target).length === 0 && $('body').hasClass('lock')) {
            $('body').removeClass('lock');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.menu__list');
        if (container.has(e.target).length === 0 && $('.menu__item--page, .menu__item--home, .menu-dropdown--home, .menu-dropdown--page, .menu__link--page, .menu__link--home').hasClass('_active')) {
            $('.menu__item--page, .menu__item--home, .menu-dropdown--home, .menu-dropdown--page, .menu__link--page, .menu__link--home').removeClass('_active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.user-nav__inner');
        if (container.has(e.target).length === 0 && $('.user-nav__more, .menu-dropdown--wide').hasClass('active')) {
            $('.user-nav__more, .menu-dropdown--wide').removeClass('active');
        }
    });

    $('.board__list').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
    });

    $('.partners__list').slick({
        arrows: false,
        slidesToShow: 5,
        autoplay: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    let isMobile = false;
    let isDestroyed = true;
    if (window.innerWidth <= 576) isMobile = true;

    function initializeSlick() {
        $('.products-filters').slick({
            prevArrow: '<button type="button" class="slick-btn slick-prev"><<<</button>',
            nextArrow: '<button type="button" class="slick-btn slick-next">>>></button>',
            slidesToScroll: 1,
        });
        isDestroyed = false;
    }

    function destroySlick() {
        $('.products-filters').slick('unslick');
            isDestroyed = true;
    }

    if (isMobile && isDestroyed) initializeSlick();
    else if (!isMobile && !isDestroyed) destroySlick();

    window.addEventListener('resize', function () {
        if (!isMobile && window.innerWidth <= 576) isMobile = true;
        if (isMobile && window.innerWidth > 576) isMobile = false;

        if (isMobile && isDestroyed) initializeSlick();
        else if (!isMobile && !isDestroyed) destroySlick();
    });

    $(".filters-price__input").ionRangeSlider({
        type: 'double',
        min: 0.00,
        max: 999.99,
        from: 100.01,
        to: 500.01,
        step: 0.01,
    });

    $(".filters-price__input").on("change", function() {
        var $this = $(this),
        value = $this.prop("value").split(";");
        $(".filters-price__value1").val(value[0]);
        $(".filters-price__value2").val(value[1]);
    });

    var rSlider = $(".filters-price__input").data("ionRangeSlider");
    $('.filters-price__value1, .filters-price__value2').on('change', function() {
        rSlider.update({
            from: +$(".filters-price__value1").val(),
            to: +$(".filters-price__value2").val()
        });
    });

    $('.product-list__filter-btn').on('click', function() {
        $('.product-list__filter-btn').removeClass('active');
        $(this).addClass('active')
    });

    $('.btn-list').on('click', function() {
        $('.products-week__item, .products-week__list, .pagination').addClass('list');
    });

    $('.btn-grid').on('click', function() {
        $('.products-week__item, .products-week__list, .pagination').removeClass('list');
    });

    $(".recent__stars").rateYo({
        rating: 3.6,
        starWidth: '12px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing   : "6px",
        rating: "80%",
    });

    $(".product-card__stars").rateYo({
        rating: 3.6,
        starWidth: '20px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing   : "11px",
        rating: "80%",
    });

    $('.product-list__aside-btn').on('click', function(e) {
        e.preventDefault();
        $('.product-list__aside, .product-list__aside-btn, .overlay').addClass('active');
    })

    $('.product-list__close-btn').on('click', function(e) {
        e.preventDefault();
        $('.product-list__aside, .product-list__aside-btn, .overlay').removeClass('active');
    })

    $('.product-list__close-btn').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('lock');
    })

    $(document).mouseup(function (e) {
        var container = $('.product-list__content');
        if (container.has(e.target).length === 0 && $('.product-list__aside, .product-list__aside-btn, .overlay').hasClass('active')) {
            $('.product-list__aside, .product-list__aside-btn, .overlay').removeClass('active');
        }
    });

    $('.detalis-card__thumb').slick({
        asNavFor: '.detalis-card__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        arrows: false,
    })

    $('.detalis-card__big').slick({
        asNavFor: '.detalis-card__thumb',
        draggable: false,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    })

    $('.detalis-card__add-num').styler();

    $('.product-tabs__tab-btn').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__tab-btn').removeClass('active');
        $(this).addClass('active');

        $('.product-tabs__item').removeClass('active');
        $($(this).attr('href')).addClass('active');
    })

    $('.products-week__list--slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/content/arrow-left.svg" alt="previous"></button>',
        nextArrow: '<button type="button"  class="slick-btn slick-next"><img src="images/content/arrow-right.svg" alt="next"></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });

    var containerEl1 = document.querySelector('.products-week__content');
    var containerEl2 = document.querySelector('.design__content');
    
    var config = {
        controls: {
            scope: 'local'
        }
    };
    
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

});
