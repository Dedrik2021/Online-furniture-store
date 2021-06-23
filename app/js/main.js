$(function() {
    $('.smart__list').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        dots: true,
    });

    $('.search__btn').on('click', function() {
        $('.search__input, .search__btn').toggleClass('active');
    })

    $('.user__link--heart').on('click', function() {
        $('.user__link--heart').toggleClass('active');
    })

    $('.user__link--basket').on('click', function() {
        $('.user__link--basket').toggleClass('active');
    })

    $('.user__more').on('click', function() {
        $('.user__more').toggleClass('active');
    })
});

const mixer = mixitup('.gallery');