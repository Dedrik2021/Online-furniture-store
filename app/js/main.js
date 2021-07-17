$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    $('.user-nav__btn').on('click', function() {
        $('.user-nav__input, .user-nav__btn, .user-nav__search').toggleClass('active');
    })

    $('.user-nav__more').on('click', function() {
        $('.user-nav__more, .menu__dropdown--wide').toggleClass('active');
    })

    $(document).mouseup(function (e) {
        var container = $('.user-nav');
        if (container.has(e.target).length === 0 && $('.user-nav__input, .user-nav__btn, .user-nav__search').hasClass('active')) {
            $('.user-nav__input, .user-nav__btn, .user-nav__search').removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.user-nav__inner');
        if (container.has(e.target).length === 0 && $('.user-nav__more, .menu__dropdown--wide').hasClass('active')) {
            $('.user-nav__more, .menu__dropdown--wide').removeClass('active');
        }
    });

    $('.baner__list').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        dots: true,
    });

    $('.partners__list').slick({
        arrows: false,
        slidesToShow: 5,
        autoplay: 2000,
    })
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