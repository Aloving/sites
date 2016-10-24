window.onload = function(){
		var main = document.getElementsByClassName('auth-wrapper')[0];
		var form = document.getElementsByClassName('auth-form')[0];
		var buttonx = document.getElementById('auth-button');
		var absoluteblock = document.getElementsByClassName('absolute-block')[0];
		buttonx.onclick = function(){
		    form.style.display = "block";
		    absoluteblock.style.height = "240px";
		    setTimeout(func, 100);

		    function func() {
		        form.style.top = "10px";
		        form.style.opacity = "1";
		    };
		};
		main.onmouseleave = function() {
			absoluteblock.style.height = "0px";
		    form.style.top = "225px";
		    form.style.opacity = "0";
		    setTimeout((function() {

		        form.style.display = "none";
		    }), 200);
		};
		//первая новость отступ через js
		document.getElementsByClassName("new")[0].style.marginTop = "20px";
		document.getElementsByClassName("comm")[0].style.paddingTop = "15px";
		//Сайд бар позишн
};