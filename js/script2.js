$(document).ready(function() {

	$("p").on("click", function() {
		$("p").addClass('para');
	})

	$("h2").hover(function() {
		$("h2").addClass('h2hover');
	})

	$("h2:target").hover(function() {
		$("h2:target").addClass('h2selected');
	})

	$(".bottom_button").mouseenter(function() {
		$("body").addClass('bodycolor', 'bodycolor2');
	})

	$(".bottom_button").mouseleave(function() {
		$("body").addClass('bodycolor2');
	})

	$("button:first").on("click", function() {
		$("button:first").hide(1000);
	})

	$("button:last").on("click", function() {
		$(".card_para:last").slideToggle('slow');
	})

	$(".button2").mouseenter(function() {
		$(".button2").fadeTo('slow', 0.5);
	})

	$(".button2").mouseleave(function() {
		$(".button2").fadeTo('slow', 1);
	})


	$("#stream1_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});


});
