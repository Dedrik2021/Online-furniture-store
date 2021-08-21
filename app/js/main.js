$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header, .menu__list, .blackout').addClass('sticky');
        } else {
            $('.header, .menu__list, .blackout').removeClass('sticky');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.menu__list, .user-nav').addClass('sticky');
        } else {
            $('.menu__list, .user-nav').removeClass('sticky');
        }
    });

    $('.user-nav__btn').on('click', function(e) {
        e.preventDefault();
        $('.user-nav__input').toggleClass('active');
        $('.user-nav__btn').toggleClass('active');
        $('.user-nav__search').toggleClass('active'); 
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
        $('.user-nav__search').toggleClass('_active');
        $('.user-nav').toggleClass('_active');
        $('.lock').toggleClass('_active');
        $('.blackout').toggleClass('_active');
    })
    
    $(document).mouseup(function (e) {
        var container = $('.menu');
        if (container.has(e.target).length === 0 && $('.menu__list, .menu__burger, .blackout, .lock').hasClass('_active')) {
            $('.menu__list, .menu__burger, .blackout, .lock').removeClass('_active');
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

        // onStart: function (data) {
        //     $('.filters-price__from').text(data.from);
        //     $('.filters-price__to').text(data.to);
        // },

        // onChange: function (data) {
        //     $('.filters-price__from').text(data.from);
        //     $('.filters-price__to').text(data.to);
        // }
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

    $('.products-list__filter-btn').on('click', function() {
        $('.products-list__filter-btn').removeClass('active');
        $(this).addClass('active')
    });

    $('.btn-list').on('click', function() {
        $('.page-nomination, .page-nomination__list, .products-week__list, .products-week__list-list, .pagination__items, .pagination').addClass('active');
    });

    $('.btn-grid').on('click', function() {
        $('.page-nomination__list, .page-nomination, .products-week__list, .products-week__list-list, .pagination, .pagination__items').removeClass('active');
    });

    // $('.filters-product__select--lamp').on('click', function(e) {
    //     e.preventDefault();
    //     $('.filters-product__select--lamp').toggleClass('active');
    // });

    // $('.filters-product__select--watch').on('click', function(e) {
    //     e.preventDefault();
    //     $('.filters-product__select--watch').toggleClass('active');
    // });

    // $('.filters-product__select--clock').on('click', function(e) {
    //     e.preventDefault();
    //     $('.filters-product__select--clock').toggleClass('active');
    // });

    // $(document).mouseup(function (e) {
    //     var container = $('.filters-box');
    //     if (container.has(e.target).length === 0 && $('.filters-product__select--chair, .filters-product__select--table, .filters-product__select--lamp, .filters-product__select--watch, .filters-product__select--clock').hasClass('active')) {
    //         $('.filters-product__select--chair, .filters-product__select--lamp, .filters-product__select--table, .filters-product__select--watch, .filters-product__select--clock').removeClass('active');
    //     }
    // });

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

    $(document).mouseup(function (e) {
        var container = $('.product-card__buttons');
        if (container.has(e.target).length === 0 && $('.product-card__add, .product-card__btn--add').hasClass('active')) {
            $('.product-card__add, .product-card__btn--add').removeClass('active');
        }
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

const cards = document.querySelectorAll('.products-list, .product-card');

cards.forEach((card)=>{
    card.querySelector('.product-card__btn--add').addEventListener('click', () => {
        card.querySelector('.product-card__add').classList.toggle('active');
    });
})

// const el = document.querySelector('button, .user-nav__btn');
// console.log('before -> ', el);
// el.setAttribute('type', 'reset');
// console.log('after -> ', el);
