$(document).ready(function(){	
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
          $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
              input.val('');
              input.removeClass('placeholder');
            }
          }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
              input.addClass('placeholder');
              input.val(input.attr('placeholder'));
            }
          }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
              var input = $(this);
              if (input.val() == input.attr('placeholder')) {
                input.val('');
              }
          })
        });
      }
    }
    $.fn.placeholder();
    
    
    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);
    $('.video-open img').click(function() {
      $(this).hide();
      $('.video-open iframe').attr('src','https://www.youtube.com/embed/xk-QjnoFEm4?rel=0&autoplay=1');
      $('.video-open iframe').fadeIn();
    });
    

    $('.reviews_slider img.video').click(function() {
      $(this).hide();
      var video_src = $(this).parent('.slide').find('iframe').attr('data-src') + '?rel=0&autoplay=1';
      $(this).parent('.slide').find('iframe').attr('src', video_src).fadeIn();
    });
    

    $('.head_slide_h2').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      dots: true,
      prevArrow: '<div class="arrow-cont left-arrow"><img class=" arrow" src="img/prev_arrow.png"></div>',
      nextArrow: '<div class="arrow-cont right-arrow"><img class=" arrow" src="img/next_arrow.png"></div>'
    });

    $('.reviews_slider').slick({
      dots: true,
      prevArrow: '<div class="arrow-cont left-arrow"><img class="arrow" src="img/reviews-prev_arrow.png"></div>',
      nextArrow: '<div class="arrow-cont right-arrow"><img class="arrow" src="img/reviews-next_arrow.png"></div>'
    });


    $('.reviews_slider .arrow').click(function() {
      $('.reviews_slider .slick-active').find('iframe').attr('src', '').hide();
      $('.reviews_slider .slick-active').find('img.video').fadeIn();
    });
    $('.b-reviews .slick-dots li button').click(function() {
      $('.reviews_slider .slick-active').find('iframe').attr('src', '').hide();
      $('.reviews_slider .slick-active').find('img.video').fadeIn();
    });

    $('.more_inform').hide();
    $('#show_inform').click(function() {
      $('.hide_inform').hide();
      $('.more_inform').fadeIn();
    });
    $('#less_inform').click(function() {
      $('.more_inform').hide();
      $('.hide_inform').fadeIn();
    });

    pic = new Image();
    pic.src="img/modal_fon.jpg";

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

        $('.reviews_slider .slick-active').find('iframe').attr('src', '').hide();
        $('.reviews_slider .slick-active').find('img.video').fadeIn();
    });


    var contentString = '<div class="my_map_coord">улица Гарибальди, 6</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
     var myPlace = new google.maps.LatLng(55.676674, 37.535385);
     var myOptions = {
         zoom: 16,
         center: myPlace,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         disableDefaultUI: true,
         scrollwheel: false,
         zoomControl: true
     }
     var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

     var marker = new google.maps.Marker({
         position: myPlace,
         map: map,
         title: "улица Гарибальди, 6"
     });

    infowindow.open(map,marker);

});