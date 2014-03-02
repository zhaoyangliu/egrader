$(function(){
	$("#comment1").toggle();
	$("#score_completed").hide();
	
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

	$(".notes_image").click(function() {
		$("#comment1").toggle();
	});
	
	$("#score_complete").click(function() {
		$("#score_completed").show();
	});
});

function zoomIn(){
    $("#hwImg").css('width', $("#hwImg").width * 1.2);
    $("#hwImg").css('height', 'auto');
}

function zoomOut(){
    $("#hwImg").css('width', $("#hwImg").width * 0.8);
    $("#hwImg").css('height', 'auto');
}