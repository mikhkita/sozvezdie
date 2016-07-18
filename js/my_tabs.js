jQuery(document).ready(function ($) {
    $('.tab_content').hide();
    $('.intrested_tab_content:first').show();
    $('.reviews_tab_content:first').show();
    $('.intrested_tabs li:first').addClass('active');
    $('.reviews_tabs li:first').addClass('active');

    $('.intrested_tabs li').click(function(event) {
        $('.intrested_tabs li').removeClass('active');
        $(this).addClass('active');
        $('.intrested_tab_content').hide();

        var select_tab = $(this).find('a').attr("data-tab");
        $(select_tab).fadeIn();
    });

    $('.reviews_tabs li').click(function(event) {
        $('.reviews_tabs li').removeClass('active');
        $(this).addClass('active');
        $('.reviews_tab_content').hide();

        var select_tab = $(this).find('a').attr("data-tab");
        $(select_tab).fadeIn();
    });
});

