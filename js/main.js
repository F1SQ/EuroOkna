$(function() {

    $('.next').click(function() {
        $('.calculator-wrapper.active').removeClass('active').next().addClass('active');
        $('.calculator-wrapper').hide();
        $('.calculator-wrapper.active').fadeIn();
        return false;
    });
    $('.prev').click(function() {
        $('.calculator-wrapper.active').removeClass('active').prev().addClass('active');
        $('.calculator-wrapper').hide();
        $('.calculator-wrapper.active').fadeIn();
        return false;
    });



    $('.header-nav__button').click(function() {
        $('.hidden-menu').addClass('active');
        return false;
    });
    $('.header-nav__button').click(function() {
        $('.header-mobile').removeClass('active');
    });
    
    
    
    
    $('.catalog-product__list > li > a').click(function() {
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
        return false;
    });



    $('.gallery-button').click(function() {
        $(this).hide();
        $('.gallery-item').fadeIn();
        return false;
    });

    $('.gallery-links a').click(function() {
        if($(this).data('index') == "all") {
            $('.gallery-item').fadeIn();
            $('.gallery-button').hide();
            $('.gallery-links a').removeClass('active')
            $(this).addClass('active');
        } else {
            $('.gallery-links a').removeClass('active')
            $(this).addClass('active');
            let index = $(this).data('index');
            console.log(index);
            $('.gallery-item').hide();
            $('.gallery-button').hide();
            $('.gallery-item[data-index=' + index + "]").fadeIn();
        }
        return false;
    });
    



});

