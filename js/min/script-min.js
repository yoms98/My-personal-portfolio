$(document).ready(function(){$(".height").eq(0).css("backgroundImage","url(/img/2.jpeg)"),$(".height").eq(2).css("backgroundImage","url(../img/355b160e.jpeg)"),$(".pic").eq(0).css("backgroundImage","url(/img/10.jpeg)"),$(".pic").eq(1).css("backgroundImage","url(/img/2.jpeg)"),$(".pic").eq(2).css("backgroundImage","url(/img/3.jpeg)"),$(".pic").eq(3).css("backgroundImage","url(/img/4.jpeg)"),$(".pic").eq(4).css("backgroundImage","url(/img/5.jpeg)"),$(".pic").eq(5).css("backgroundImage","url(/img/6.jpeg)"),$(".pic").eq(6).css("backgroundImage","url(/img/7.jpg)"),$(".pic").eq(7).css("backgroundImage","url(/img/8.jpg)"),$(".pic").eq(8).css("backgroundImage","url(/img/9.jpg)")}),$(window).scroll(function(){var e=$(this).scrollTop();e>$(".grid").eq(0).offset().top-$(window).height()/2-520&&$(".pic").each(function(e){setTimeout(function(){$(".pic").eq(e).addClass("pic-seen")},250*e)})}),$(window).scroll(function(){var e=$(this).scrollTop();e>$(".articles").offset().top-$(window).height()/2-100&&$(".frame").each(function(e){setTimeout(function(){$(".frame").eq(e).addClass("tbl-seen")},150*(e+1))})}),$(window).scroll(function(){var e=$(this).scrollTop();e>$(".grid").eq(1).offset().top-$(window).height()/4.5&&$(".height p").addClass("seen").css("opacity","1")});