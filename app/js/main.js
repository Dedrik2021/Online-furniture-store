$(function() {

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

    // $(document).mouseup(function (e) {
    //     var container = $('.search__btn.active, .search__input.active');
    //     if (container.has(e.target).length === 0){
    //         container.hide();
    //     }
    // });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    $('.smart__list').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        dots: true,
    });
});

const mixer = mixitup('.gallery');