var getNavUl = document.getElementsByTagName('nav')[0].getElementsByClassName('col-lg-12 col-md-12 col-sm-12 col-xs-12')[0].getElementsByTagName('ul')[0];
var getNav = document.getElementsByTagName('nav')[0].getElementsByClassName('col-lg-12 col-md-12 col-sm-12 col-xs-12')[0].getElementsByTagName('ul')[0].getElementsByTagName('a');
var getLinkClass = document.getElementsByClassName('active')[0];
function animateNav(){
	var something;
	getNavUl.onmouseover = function () {
		getLinkClass.setAttribute('class','none-active');
		something = document.getElementsByClassName('none-active')[0];
		return something;
	};
	getNavUl.onmouseout = function (){
		something.setAttribute('class','active');
	};

}
window.onload = animateNav;
//slider
		$(document).ready(function() {
  		$("#slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true, 
 	  navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});