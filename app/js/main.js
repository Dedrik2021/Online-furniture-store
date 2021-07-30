$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header, .menu__list').addClass('sticky');
        } else {
            $('.header, .menu__list').removeClass('sticky');
        }
    });

    $('.user-nav__btn').on('click', function(e) {
        e.preventDefault();
        $('.user-nav__input').toggleClass('active');
        $('.user-nav__btn').toggleClass('active');
        $('.user-nav__search').toggleClass('active'); 
    })

    $('.menu__link--page').on('click', function(e) {
        e.preventDefault();
        $('.menu-dropdown--page').toggleClass('_active');
    })

    $('.menu__link--home').on('click', function(e) {
        e.preventDefault();
        $('.menu-dropdown--home').toggleClass('_active');
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
        $('.menu__logo').toggleClass('_active');
    })
    
    $(document).mouseup(function (e) {
        var container = $('.menu');
        if (container.has(e.target).length === 0 && $('.menu__list, .menu__burger').hasClass('_active')) {
            $('.menu__list, .menu__burger').removeClass('_active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.user-nav');
        if (container.has(e.target).length === 0 && $('.user-nav__input, .user-nav__btn, .user-nav__search').hasClass('active')) {
            $('.user-nav__input, .user-nav__btn, .user-nav__search').removeClass('active');
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
            infinite: true,
            autoplay: 3000
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

const el = document.querySelector('button.user-nav__btn');
console.log('before -> ', el);
el.setAttribute('type', 'reset');
console.log('after -> ', el);