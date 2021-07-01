$(function() {

    $('.user-nav__btn').on('click', function() {
        $('.user-nav__input, .user-nav__btn, .user-nav__search').toggleClass('active');
    })

    $('.user-nav__link--heart').on('click', function() {
        $('.user-nav__link--heart').toggleClass('active');
    })

    $('.user-nav__link--basket').on('click', function() {
        $('.user-nav__link--basket').toggleClass('active');
    })

    $('.user-nav__more').on('click', function() {
        $('.user-nav__more, .menu-throwing').toggleClass('active');
    })

    $(document).mouseup(function (e) {
        var container = $('.user-nav');
        if (container.has(e.target).length === 0 && $('.user-nav__input, .user-nav__btn, .user-nav__link--heart, .user-nav__link--basket').hasClass('active')) {
            $('.user-nav__input, .user-nav__btn, .user-nav__search, .user-nav__link--basket, .user-nav__link--heart').removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.user-nav__inner');
        if (container.has(e.target).length === 0 && $('.user-nav__more, .menu-throwing').hasClass('active')) {
            $('.user-nav__more, .menu-throwing').removeClass('active');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    $('.baner__list').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        dots: true,
    });
});

const mixer = mixitup('.products-things');