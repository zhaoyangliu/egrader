$(function(){
	$("#comment1").hide();
	$("#score_completed").hide();
	$("#left_column, #right_column").hide();
	$("#wrapper").hide();
	window.mark_press = 0;
	window.hw_img = 0;
	window.moveBar = 1;
	
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
		$("#comment1").fadeToggle();
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
			$("span.glyphicon-list-alt").css("cursor", "pointer");
			$("img.arrow_img").css("cursor", "pointer");
			$(".btn, .glyphicon").css("cursor", "pointer");
			window.mark_press = 0;
		}
		
	});

	$("#hwImg").click(function() {
		if (window.mark_press == 1)
			$("#hwImg").attr("src", "img/hw2_marked.jpg");
	});

	$(".arrow_img").click(function() {
		if (window.hw_img == 0) {
                        window.location.replace("Egrader1.html");
			window.hw_img = 1;
		}
		else if (window.hw_img == 1) {
                        window.location.replace("Egrader.html");
			window.hw_img = 0;	
		}
	});

	$(".level2").each(function(){
		$(this).click(function() {
			if (window.moveBar == 1)
				moveEgrader();
		});
	});

	$("#search_student").keyup(function() {
		if ($("#search_student").val() == "E" || $("#search_student").val() == "e" ) {
			$(".hide_tr").hide();
		}
		else $(".hide_tr").show();
	});
	
	$("#hwlist").click(function() {
	    $(".panel").hide();
		$("#wrapper").show();
	});

});



function moveEgrader() {
	$("#menu, #menu_word").css("position", "relative");
	$("#menu, #menu_word").animate({'top': '-=100px', "fontSize": "-=1.5em"},'slow', function() {
		$("#left_column, #right_column").fadeIn("slow");
	});
	window.moveBar = 0;
}

function zoomIn(){
    $("#hwImg").css('width', $("#hwImg").width() + $(window).width() * 0.1);
    $("#hwImg").css('height', 'auto');
}

function zoomOut(){
    $("#hwImg").css('width', $("#hwImg").width() - $(window).width() * 0.1);
    $("#hwImg").css('height', 'auto');
}
function save(){
    window.open("http://www.liuzy.net/testzip/Grades.zip","_self");
}
function email(){
    window.open("mailto:ta@u.northwestern.com","_self");
}







