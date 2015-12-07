$(document).ready(function() {
	$('.grid__col-1-of-3').css('backgroundImage', 'url(/img/2.jpeg)');
		$('.grid__col-3-of-3').css('backgroundImage', 'url(../img/355b160e.jpeg)');
		$('.pic').eq(0).css('backgroundImage', 'url(/img/10.jpeg)');
		$('.pic').eq(1).css('backgroundImage', 'url(/img/2.jpeg)');
		$('.pic').eq(2).css('backgroundImage', 'url(/img/3.jpeg)');
		$('.pic').eq(3).css('backgroundImage', 'url(/img/4.jpeg)');
		$('.pic').eq(4).css('backgroundImage', 'url(/img/5.jpeg)');
		$('.pic').eq(5).css('backgroundImage', 'url(/img/6.jpeg)');
		$('.pic').eq(6).css('backgroundImage', 'url(/img/7.jpg)');
		$('.pic').eq(7).css('backgroundImage', 'url(/img/8.jpg)');
		$('.pic').eq(8).css('backgroundImage', 'url(/img/9.jpg)');



});


$(window).scroll(function(){
	var wscroll2 = $(this).scrollTop();
	if(wscroll2 > $('.grid').eq(0).offset().top - $(window).height()/2 - 300){
		$('.pic').each(function(i){
		setTimeout(function(){
				$('.pic').eq(i).addClass('pic-seen');
		},250 * i);
		});
	}
});


$(window).scroll(function(){
	var wscroll = $(this).scrollTop();

	if(wscroll > $('.grid').eq(1).offset().top - $(window).height()/2 - 200){
		$('.height p').addClass('seen').css('opacity','1');

	}
});
