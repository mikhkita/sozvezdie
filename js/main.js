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
    
    var contentString = '<div class="my_map_coord">улица Гарибальди, 6</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
     var myPlace = new google.maps.LatLng(55.676478,37.534406);
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
      $('.video-open iframe').attr('src','https://www.youtube.com/embed/rgJx_prPhEA?rel=0&autoplay=1');
      $('.video-open iframe').fadeIn();
    });
    
    $('#slide_video1 img').click(function() {
      $(this).hide();
      $('#slide_video1 iframe').attr('src','https://www.youtube.com/embed/rgJx_prPhEA?rel=0&autoplay=1');
      $('#slide_video1 iframe').fadeIn();
    });
    $('#slide_video2 img').click(function() {
      $(this).hide();
      $('#slide_video2 iframe').attr('src','https://www.youtube.com/embed/rgJx_prPhEA?rel=0&autoplay=1');
      $('#slide_video2 iframe').fadeIn();
    });
    $('#slide_video3 img').click(function() {
      $(this).hide();
      $('#slide_video3 iframe').attr('src','https://www.youtube.com/embed/rgJx_prPhEA?rel=0&autoplay=1');
      $('#slide_video3 iframe').fadeIn();
    });
    $('#slide_video4 img').click(function() {
      $(this).hide();
      $('#slide_video4 iframe').attr('src','https://www.youtube.com/embed/rgJx_prPhEA?rel=0&autoplay=1');
      $('#slide_video4 iframe').fadeIn();
    });
    $('#slide_video5 img').click(function() {
      $(this).hide();
      $('#slide_video5 iframe').attr('src','https://www.youtube.com/embed/rgJx_prPhEA?rel=0&autoplay=1');
      $('#slide_video5 iframe').fadeIn();
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
      prevArrow: '<div class="arrow-cont left-arrow"><img class=" arrow" src="img/reviews-prev_arrow.png"></div>',
      nextArrow: '<div class="arrow-cont right-arrow"><img class=" arrow" src="img/reviews-next_arrow.png"></div>'
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

});