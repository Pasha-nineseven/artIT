$(document).ready(function() {
	flexibility(document.documentElement);

	ymaps.ready(initializeDefaultMap);
	

	$('body').on('click','.js-menu-toggle-link', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		// $('.menu-mobile').slideToggle();
	});



	//POPUP-VIDEO
    $(".js-video-link").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
         clickOutside : 'close',
        buttons: [
            "close"
        ],
    });



	//TOP SLIDER
	if ($('.top-slider').length>0) {
	    $('.top-slider').slick({
	        infinite: false,
	        slidesToShow: 1,
	        fade: true,
	        lazyLoad: 'progressive',
	        arrows:false,
	        useTransform:true,
	        equalizeHeight: false,
	        "accessibility": false,
	        // autoplay: true,
	        // autoplaySpeed: 10000,
	        pauseOnHover:false,
	    });

	    $('.top-slider-pager__item').each( function( i ) {
	        $('.top-slider-pager__item.slide-' + i).click(function(){
	            $('.top-slider-pager__item').removeClass('active');
	            $(this).addClass('active');
	            $('.top-slider').slick('slickGoTo', i);
	        })
	    })

	    $('.top-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	        var next = nextSlide; 
	        $('.top-slider-pager__item').removeClass('active');
	        $('.top-slider-pager__item.slide-' + next).addClass('active');
	    });
	}

	if($('.news-slider').length>0) {
		var $status = $('.news-pagingInfo .s-current');
		var $statusTotal = $('.news-pagingInfo .s-total');
    	var $slider = $('.news-slider');
    	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i);
            $statusTotal.text('/' + '0' + slick.slideCount);
        });
        $slider.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-news-prev"),
      		nextArrow: $(".js-news-next"),
      		responsive: [
			    {
			      	breakpoint: 1100,
			      	settings: {
			        	slidesToShow: 2,
			        	slidesToScroll: 1,
			      	}
			    },
			    {
			      	breakpoint: 600,
			      	settings: {
			        	slidesToShow: 1,
			        	slidesToScroll: 1,
			      	}
			    },
			]
        });

       
    }


	sliderHowInit();
	sliderWhoInit();
	sliderSamplesInit();
	sliderNumeralInit();
	sliderEffectInit();
	sliderStatusInit();
});




$(window).resize(function () {
	sliderHowInit();
	sliderWhoInit();
	sliderSamplesInit();
	sliderNumeralInit();
	sliderEffectInit();
	sliderStatusInit();
});

// $(window).load(function(){

// });

// functions
function initializeDefaultMap() {
    if ($('#map').length>0) {

        var myMap = new ymaps.Map("map", {
            center:[53.899888,27.566757],
            zoom: 13,
            controls: []
        }, {
            suppressMapOpenBlock: true
        }); 
                
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
                // balloonContentBody: 'Адрес',
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/content/label.png", 
            iconImageSize: [47,41],
            iconImageOffset: [-23, -20]
        }); 


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }
}

function sliderHowInit() {
	var $status = $('.pagingInfo-how .s-current');
	var $statusTotal = $('.pagingInfo-how .s-total');
    var $slider = $('.how-list__slider');
    if($(window).width() < 768) {

    	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i);
            $statusTotal.text('/' + '0' + slick.slideCount);
        });
        $slider.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-how-prev"),
      		nextArrow: $(".js-how-next"),
        });

       
    } else{
        if($slider.hasClass('slick-initialized')) {
            $slider.slick("unslick");
        }
    }
}

function sliderWhoInit() {
	var $status = $('.pagingInfo-who .s-current');
	var $statusTotal = $('.pagingInfo-who .s-total');
    var $slider = $('.who__list');

    if($(window).width() < 768) {

    	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i);
            $statusTotal.text('/' + '0' + slick.slideCount);
        });
        $slider.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-who-prev"),
      		nextArrow: $(".js-who-next"),
        });

       
    } else{
        if($slider.hasClass('slick-initialized')) {
            $slider.slick("unslick");
        }
    }
}

function sliderSamplesInit() {
	var $status = $('.pagingInfo-samples .s-current');
	var $statusTotal = $('.pagingInfo-samples .s-total');
    var $slider = $('.samples-list')

    if($(window).width() < 768) {

    	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i);
            $statusTotal.text('/' + '0' + slick.slideCount);
        });
        $slider.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-samples-prev"),
      		nextArrow: $(".js-samples-next"),
            responsive: [
			    {
			      	breakpoint: 600,
			      	settings: {
			        	slidesToShow: 1,
			        	slidesToScroll: 1,
			      	}
			    },
			]
        });

       
    } else{
        if($slider.hasClass('slick-initialized')) {
            $slider.slick("unslick");
        }
    }
}
function sliderNumeralInit() {
	var $status = $('.pagingInfo-numeral .s-current');
	var $statusTotal = $('.pagingInfo-numeral .s-total');
    var $slider = $('.numeral-list');
    if($(window).width() < 768) {

    	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i);
            $statusTotal.text('/' + '0' + slick.slideCount);
        });
        $slider.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-numeral-prev"),
      		nextArrow: $(".js-numeral-next"),
            responsive: [
			    {
			      	breakpoint: 600,
			      	settings: {
			        	slidesToShow: 1,
			        	slidesToScroll: 1,
			      	}
			    },
			]
        });

       
    } else{
        if($slider.hasClass('slick-initialized')) {
            $slider.slick("unslick");
        }
    }
}

function sliderEffectInit() {
	var $status = $('.pagingInfo-effect .s-current');
	var $statusTotal = $('.pagingInfo-effect .s-total');
    var $slider = $('.effect-list');
    if($(window).width() < 768) {

    	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i);
            $statusTotal.text('/' + '0' + slick.slideCount);
        });
        $slider.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-effect-prev"),
      		nextArrow: $(".js-effect-next"),
            responsive: [
			    {
			      	breakpoint: 600,
			      	settings: {
			        	slidesToShow: 1,
			        	slidesToScroll: 1,
			      	}
			    },
			]
        });

       
    } else{
        if($slider.hasClass('slick-initialized')) {
            $slider.slick("unslick");
        }
    }
}

function sliderStatusInit() {
	var $status = $('.pagingInfo-status .s-current');
	var $statusTotal = $('.pagingInfo-status .s-total');
    var $slider = $('.status-list');
    if($(window).width() < 768) {

    	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i);
            $statusTotal.text('/' + '0' + slick.slideCount);
        });
        $slider.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-status-prev"),
      		nextArrow: $(".js-status-next"),
        });

       
    } else{
        if($slider.hasClass('slick-initialized')) {
            $slider.slick("unslick");
        }
    }
}

// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
