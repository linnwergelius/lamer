//SCRIPT


$(window).scroll(function() {

	var scrollPos = $(window).scrollTop();
	
	//console.log(scrollPos);
	
	if (scrollPos>500){
		//console.log("JA")
			$('#bgVideo').get(0).play();
			$("#bgVideo").prop('muted', false);
			
			
	 } else {
	$('#bgVideo').get(0).pause();
	 }
});


$("#button").on("click", function(){
	
	$("#button").replaceWith("<p>scroll to enter</p>")
	$(".start").css("position","relative")
	$(".reference").fadeIn();
	
});


//ARRAY
var imgArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'];
////var basePath="images/array/";
////
////function imgRandom() {
////    for (var i = 0; i < 1; i++) {
////        var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
////        var image = new Image();
////        image.src = basePath+rand;
////        document.body.appendChild(image);
////    }
////}



$(".content").mousemove(function(){

	var x = ((event.pageX) - 30);
	var y = ((event.pageY) - 30);
	

		
		
/*DRAW BAGS*/
		function getRandomImage(imgAr, path) {
		    path = path || 'images/array-l/'; // default path here
		    var num = Math.floor( Math.random() * imgAr.length );
		    var img = imgAr[ num ];
		    var imgStr = '<img src="' + path + img + '" style="left:'+ x +'px; top:' + y +'px; position:absolute;">';
				$("body").append(imgStr);
		}
		
		getRandomImage(imgArray, "");
		
		
		var year = ((($("img").length)/2) + 1950);
		$("#year").text(year);
		
		

});
	

	
