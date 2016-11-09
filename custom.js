var d = new Date();
var n = d.getTime();
jQuery('#svgloader').attr('time-load', n);

jQuery(document).ready(function(){
/*Header pentru proiectul The Light Has Come*/
    jQuery( "#mk-main-navigation" ).wrap( "<div class='mk-grid'></div>" );
    if(jQuery("body.page").hasClass("page-id-3516")){
        jQuery( "#mk-main-navigation" ).unwrap();
    }
/*Header pentru proiectul The Light Has Come END*/


    /*MOUSE OVER - SPD CAMP 2016 */
    jQuery('.animated-backpack').mouseover(function() {
        var $div = jQuery(this);
        if (!$div.hasClass('go')) {
            $div.addClass('go');
            $div.children('img').remove();
            $div.append('<img src="https://www.sanctusprodeo.ro/wp-content/uploads/2016/05/rucsac-gif-1.gif?p='+new Date().getTime()+'">');
            setTimeout(function(){
                $div.removeClass('go');
            }, 3000);
        }
    });

    /*MOUSE OVER - SPD CAMP 2016 END */
/*First section SPD Camp 2016*/
        var height = parseInt(jQuery(window).height());
        if(height > 400){
            height = height -80;
        }
        jQuery('#header-video-camp').css('height', height);
    jQuery(window).on('resize', function(){
        var height = parseInt(jQuery(window).height());

        if(height > 400){
            height = height -80;
        }
        jQuery('#header-video-camp').css('height', height);
    });

    var d = new Date();
    var n = d.getTime();
    var load_time = jQuery('#svgloader').attr('time-load');
    setTimeout(function(){
        jQuery('#svgloader').css('display', 'none');
    }, (2000-(n-load_time)));

});
/*First section SPD Camp 2016 END*/
