jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch("resources/img/backgrounds/images.jpg");


    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
        $(this).removeClass('input-error');
    });

    $('.login-form').on('submit', function(e) {

        $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');

            } else {
                $(this).removeClass('input-error');

            }

            //De momento, pase lo que pase, validamos cualquier usuario (hasta que tengamos la api del servidor)
            $("#loginView").hide();
            $("#homeView").show();
            $("#homeNav").show();

        });

    });




});