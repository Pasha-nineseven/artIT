$(document).ready(function() {
	flexibility(document.documentElement);

	$('body').on('click','.js-menu-toggle-link', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.top-menu').fadeToggle(300);
		$('body').toggleClass('fixed');
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
    //POPUP-INLINE
    $(".js-popup-inline").fancybox({
        speed : 330,
        transitionEffect: "slide",
        animationEffect: "zoom-in-out",
        infobar: false,
        buttons: [
            "close"
        ],
    });

    $(".js-trust-select__item").click(function(e){
		e.preventDefault();
    	var num = $(this).data('num');

    	$('.trust-select__item').removeClass('active');
    	$(this).addClass('active');
    	$(".trust-view__item").addClass('dnone');
    	$("#view"+num).removeClass('dnone');

   	});



	//TOP SLIDER
	if ($('.top-slider').length>0) {
		var $statusTop = $('.top-slider-pagingInfo .s-current');
		var $statusTotalTop = $('.top-slider-pagingInfo .s-total');
    	var $sliderTop = $('.top-slider');
    	$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusTop.text('0' + i);
            $statusTotalTop.text('/' + '0' + slick.slideCount);
        });
	    $sliderTop.slick({
	        infinite: true,
	        slidesToShow: 1,
	        fade: true,
	        lazyLoad: 'progressive',
	        arrows:true,
	        useTransform:true,
	        equalizeHeight: false,
	        "accessibility": false,
	        speed: 500,
            //cssEase: 'ease-in-out',
            // useTransform: false,
	        // autoplay: true,
	        // autoplaySpeed: 10000,
	        pauseOnHover:false,
	        prevArrow: $(".js-top-prev"),
      		nextArrow: $(".js-top-next"),
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
        var $statusNews = $('.pagingInfo-news .s-current');
		var $statusTotalNews = $('.pagingInfo-news .s-total');
    	var $sliderNews = $('.news-slider');
    	$sliderNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusNews.text('0' + i);
            $statusTotalNews.text('/' + '0' + slick.slideCount);
            // console.log( $statusNews.text);
            // console.log( i);
        });
        $sliderNews.not('.slick-initialized').slick({
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

    if($('.article-slider').length>0) {
        var $statusNews = $('.pagingInfo-article .s-current');
        var $statusTotalNews = $('.pagingInfo-article .s-total');
        var $sliderNews = $('.article-slider');
        $sliderNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusNews.text('0' + i);
            $statusTotalNews.text('/' + '0' + slick.slideCount);
            // console.log( $statusNews.text);
            // console.log( i);
        });
        $sliderNews.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-article-prev"),
            nextArrow: $(".js-article-next"),
        });
    }

    if($('.page-news-slider').length>0) {
        var $statusNews = $('.pagingInfo-newsPage .s-current');
        var $statusTotalNews = $('.pagingInfo-newsPage .s-total');
        var $sliderNews = $('.page-news-slider');
        $sliderNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusNews.text('0' + i);
            $statusTotalNews.text('/' + '0' + slick.slideCount);
            // console.log( $statusNews.text);
            // console.log( i);
        });
        $sliderNews.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-newsPage-prev"),
            nextArrow: $(".js-newsPage-next"),
        });
    }


    if($('.trust-slider').length>0) {
		var $status = $('.trust-pagingInfo .s-current');
		var $statusTotal = $('.trust-pagingInfo .s-total');
    	var $slider = $('.trust-slider');
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
            prevArrow: $(".js-trust-prev"),
      		nextArrow: $(".js-trust-next"),
        });
    }

    if ($('.status-list').length>0) {
		var $status = $('.pagingInfo-status .s-current');
		var $statusTotal = $('.pagingInfo-status .s-total');
	    var $slider = $('.status-list');

    	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('0' + i);
            $statusTotal.text('/' + '0' + slick.slideCount);
        });
        $slider.slick({
            infinite: true,
            dots: false,
            arrows:false,
            slidesToShow: 5,
            slidesToScroll: 1,
            adaptiveHeight: false,
            asNavFor: '.status-add-slider',
            focusOnSelect: true,
            responsive: [
			    {
			      	breakpoint: 768,
			      	settings: {
			        	slidesToShow: 2,
			        	slidesToScroll: 1,
			        	arrows:true,
			        	prevArrow: $(".js-status-prev"),
							nextArrow: $(".js-status-next"),
			      	}
			    },
			    {
			      	breakpoint: 600,
			      	settings: {
			        	slidesToShow: 1,
			        	slidesToScroll: 1,
			        	arrows:true,
			        	prevArrow: $(".js-status-prev"),
							nextArrow: $(".js-status-next"),
			      	}
			    },
			]
        });

        var $slider2 = $('.status-add-slider');
        $slider2.slick({
            infinite: true,
            dots: false,
            arrows:false,
            fade:true,
            adaptiveHeight: false,
            asNavFor: '.status-list'
        });

    }

    if($('.news-in-slider').length>0) {
        var $statusNews = $('.pagingInfo-news_in .s-current');
        var $statusTotalNews = $('.pagingInfo-news_in .s-total');
        var $sliderNews = $('.news-in-slider');
        $sliderNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusNews.text('0' + i);
            $statusTotalNews.text('/' + '0' + slick.slideCount);
            // console.log( $statusNews.text);
            // console.log( i);
        });
        $sliderNews.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            // slidesToShow: 3,
            variableWidth: true,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-news_in-prev"),
            nextArrow: $(".js-news_in-next"),
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }


	sliderHowInit();
	sliderWhoInit();
    //sliderProblemsInit();
	sliderSamplesInit();
	sliderNumeralInit();
	sliderEffectInit();
	//sliderStatusInit();




    if($('.samples-c-slider').length>0) {
        var $statusNews = $('.pagingInfo-samples-c .s-current');
        var $statusTotalNews = $('.pagingInfo-samples-c .s-total');
        var $sliderNews = $('.samples-c-slider');
        $sliderNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusNews.text('0' + i);
            $statusTotalNews.text('/' + '0' + slick.slideCount);
            // console.log( $statusNews.text);
            // console.log( i);
        });
        $sliderNews.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $(".js-samples-c-prev"),
            nextArrow: $(".js-samples-c-next"),
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


    //TABS
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');

        // setTimeout(function() {
        //     sliderSamplesInit();
        //     $('.samples-list').slick("setPosition");
        // }, 1000);

    });


    if($('.top-slider-pager__arr').length>0){
        $(window).scroll(function(){
            var arr = $('.top-slider-pager__arr'),
            scroll = $(window).scrollTop();

            if (scroll >= 130) arr.addClass('active');
            else arr.removeClass('active');
        });
        $('body').on('click','.top-slider-pager__arr.active', function(e){
            e.preventDefault();
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        });
    }

});




$(window).resize(function () {
	sliderHowInit();
	sliderWhoInit();
    // sliderProblemsInit();
	sliderSamplesInit();
	sliderNumeralInit();
	sliderEffectInit();
	//sliderStatusInit();
});



// functions

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

// function sliderProblemsInit() {
//     var $status = $('.pagingInfo-pr .s-current');
//     var $statusTotal = $('.pagingInfo-pr .s-total');
//     var $slider = $('.problems__wrap');

//     if($(window).width() < 768) {

//         $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//             var i = (currentSlide ? currentSlide : 0) + 1;
//             $status.text('0' + i);
//             $statusTotal.text('/' + '0' + slick.slideCount);
//         });
//         $slider.not('.slick-initialized').slick({
//             infinite: true,
//             dots: false,
//             arrows:true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             adaptiveHeight: false,
//             prevArrow: $(".js-pr-prev"),
//             nextArrow: $(".js-pr-next"),
//         });


//     } else{
//         if($slider.hasClass('slick-initialized')) {
//             $slider.slick("unslick");
//         }
//     }
// }



function sliderSamplesInit() {

    var $slider = $('.samples-list');

    if($(window).width() < 768) {


        $slider.each(function(index) {
            var $status = $(this).parents('.samples-list-wrap').find('.pagingInfo-samples .s-current');
            var $statusTotal = $(this).parents('.samples-list-wrap').find('.pagingInfo-samples .s-total');
            $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.text('0' + i);
                //$(this).parents('.samples-list-wrap').find('.slider-nav').css('background','red');
                $statusTotal.text('/' + '0' + slick.slideCount);
                //console.log($status)
            });
            //console.log(index);
            $(this).not('.slick-initialized').slick({
                infinite: true,
                dots: false,
                arrows:true,
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: false,
                prevArrow: $(this).parents('.samples-list-wrap').find(".js-samples-prev"),
                nextArrow: $(this).parents('.samples-list-wrap').find(".js-samples-next"),
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




function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}





$(function () {
    $('body').on('click','.js-a-toggle', function(e){
        e.preventDefault();
        $(this).parents('.problems__item').toggleClass('active');

        var problemsCount = $('.problems__item.active').length;
        $('#problemsCount').text(problemsCount);

        if ((problemsCount > 1) && (problemsCount < 4) ) {
            $('.problems-result').removeClass('bad good').addClass('middle');
        } else if((problemsCount >= 4)) {
            $('.problems-result').removeClass('good middle').addClass('bad');
        } else if((problemsCount == 0) || (problemsCount == 1)) {
            $('.problems-result').removeClass('bad middle').addClass('good');
        }
    });
});


$(function() {
    var $animation_elements = $('.how-list__txt');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        //console.log(window_height);
        var window_top_position = $window.scrollTop();

        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top + 250;
            var element_bottom_position = ((element_top_position) + element_height);
            //console.log(element_top_position)

            if (element_top_position <= window_bottom_position) {
                $element.addClass('is-ready');
            } else {
                $element.removeClass('is-ready');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});
