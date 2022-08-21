$( function() {

    $('.__btn_toggle i').on('click', function() {

        $(this).toggleClass('fa-times');

        $('.navbar .menu').toggleClass('active');

    });

} );