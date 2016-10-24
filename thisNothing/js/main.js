
function defaultLayout(){
	//twitch-window resize
	$('.twitch')[0].style.width = "64%";
	$('.twitch iframe')[0].style.height = "506px";
	$('.chat')[0].style.width = "30%";	
	$('.chat iframe')[0].style.height = "506px";
	//первый hr between
	document.getElementsByClassName('between-hr')[0].style.marginTop = "0px";
	document.getElementsByClassName('between-hr')[0].style.marginBottom = "0px";
	document.getElementsByClassName('between-hr')[1].style.marginTop = "0px";
	
	//якорь и прозрачность меню

	window.onscroll = function(e) {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled >= 150 && window.screen.width >= 320){
			document.getElementsByClassName('test-size')[0]
			.getElementsByTagName('a')[0].getElementsByTagName('i')[0].style.opacity = 1;
			document.getElementsByTagName('header')[0]
			.style.opacity = "0.85";
			document.getElementsByClassName('test-size')[0]
			.getElementsByTagName('a')[0].getElementsByTagName('i')[0].style.cursor = "pointer";
		}else if(scrolled <= 150 && window.screen.width >= 320){
			document.getElementsByClassName('test-size')[0]
			.getElementsByTagName('a')[0].getElementsByTagName('i')[0].style.opacity = 0;
			document.getElementsByTagName('header')[0]
			.style.opacity = "1";
			document.getElementsByClassName('test-size')[0]
			.getElementsByTagName('a')[0].getElementsByTagName('i')[0].style.cursor = "default";
		}
	}

}
$(document).ready(function(){
	$(".nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 10;
		$('body,html').animate({scrollTop: top}, 800);
	});
	$(".test-size").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 10;
		$('body,html').animate({scrollTop: top}, 400);
	});
});


window.onload = defaultLayout();
