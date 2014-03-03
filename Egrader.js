$(function(){
	$("#comment1").toggle();
	$("#score_completed").hide();
	window.mark_press = 0;
	window.hw_img = 0;
	
	$(".score_input").bind("input",function(){
		$("#score_completed").hide();
		var score_input = $(".score_input");
		var sum_input = $("#sum_input");
		sum_input.val("0");
		var sum = 0;
		for (var i = 0; i < score_input.length; i++) {
			if (score_input.eq(i).val() != undefined && score_input.eq(i).val() != ""){
				sum += parseFloat(score_input.eq(i).val());
			}
		}
		var decimal_point = String(sum).indexOf(".");
		if (decimal_point != -1) 
			sum_input.val(String(sum).substring(0, decimal_point + 3));
		else 
			sum_input.val(String(sum));
	});

	$(".glyphicon-list-alt").click(function() {
		$("#comment1").toggle();
	});
	
	$("#score_complete").click(function() {
		$("#score_completed").show();
	});
	
	$("#mark_btn").click(function() {
		//$("*").css("cursor", "url(mark.gif) 2 2, auto");

		if (window.mark_press == 0) {
			$("*").css("cursor", "url(mark.gif) 3 3, auto");
			window.mark_press = 1;
		}
		else if (window.mark_press == 1) {
			$("*").css("cursor", "auto");
			window.mark_press = 0;
		}
		
	});

	$("#hwImg").click(function() {
		if (window.mark_press == 1)
			$("#hwImg").attr("src", "img/hw2_marked.jpg");
	});

	$(".arrow_img").click(function() {
		if (window.hw_img == 0) {
			$("#hwImg").attr("src", "img/hw5.jpg");
			window.hw_img = 1;
		}
		else if (window.hw_img == 1) {
			$("#hwImg").attr("src", "img/hw2.jpg");
			window.hw_img = 0;	
		}
	});
});

function zoomIn(){
    $("#hwImg").css('width', $("#hwImg").width() + $(window).width() * 0.1);
    $("#hwImg").css('height', 'auto');
}

function zoomOut(){
    $("#hwImg").css('width', $("#hwImg").width() - $(window).width() * 0.1);
    $("#hwImg").css('height', 'auto');
}







