$(document).ready(function() {
	$('.height').eq(0).css('backgroundImage', 'url(/img/2.jpeg)');
		$('.height').eq(2).css('backgroundImage', 'url(../img/355b160e.jpeg)');
		$('.pic').eq(0).css('backgroundImage', 'url(/img/10.jpeg)');
		$('.pic').eq(1).css('backgroundImage', 'url(/img/2.jpeg)');
		$('.pic').eq(2).css('backgroundImage', 'url(/img/3.jpeg)');
		$('.pic').eq(3).css('backgroundImage', 'url(/img/4.jpeg)');
		$('.pic').eq(4).css('backgroundImage', 'url(/img/5.jpeg)');
		$('.pic').eq(5).css('backgroundImage', 'url(/img/6.jpeg)');
		$('.pic').eq(6).css('backgroundImage', 'url(/img/7.jpg)');
		$('.pic').eq(7).css('backgroundImage', 'url(/img/8.jpg)');
		$('.pic').eq(8).css('backgroundImage', 'url(/img/9.jpg)');
		$('.thumbs .nail').eq(0).css('backgroundImage','url(/img/11.jpeg)');
		$('.thumbs .nail').eq(1).css('backgroundImage','url(/img/12.jpg)');
		function clientChange(){
			var $this = $(this);
			  var currentActiveClient = $('.client-carosel').find('.is-active');
			 var position = $('.client-carosel').children().index(currentActiveClient);
		   var clientNum = $('.client-unit').length;
			 
			 $('.is-active').removeClass('is-active').next().addClass('is-active');



		}
		clientChange();

});

$(window).scroll(function(){
	var wscroll2 = $(this).scrollTop();
	if(wscroll2 > $('.grid').eq(0).offset().top - $(window).height()/2-520){
		$('.pic').each(function(i){
		setTimeout(function(){
				$('.pic').eq(i).addClass('pic-seen');
		},250 * i);
		});
	}
});




$(window).scroll(function(){
	var wscroll3 = $(this).scrollTop();

	if(wscroll3 > $('.articles').offset().top - $(window).height()/2 - 100){
		$('.frame').each(function(i){
				setTimeout(function(){
					$('.frame').eq(i).addClass('tbl-seen');
				}, 150 * (i+1));
		});
	}
});

$(window).scroll(function(){
	var wscroll = $(this).scrollTop();

	if(wscroll > $('.grid').eq(1).offset().top - $(window).height()/4.5){
		$('.height p').addClass('seen').css('opacity','1');

	}
});
