$(function() {

	var badgeTipScreen = $("#badge-summary-screen");
	var badgeTipMobile = $("#badge-summary-mobile");
	var badgeTipContentScreen = $(badgeTipScreen).text();
	var badgeTipContentMobile = $(badgeTipMobile).text();

	var hovering = false;

	$("#badges a").hover(function(e) {
		hovering = true;
		$(badgeTipScreen).html('<strong>' + $(this).attr('title') + '</strong>');
		$(badgeTipMobile).html('<strong>' + $(this).attr('title') + '</strong>');
	}, function(e) {
		hovering = false;

		setTimeout(function() {
			if (hovering === false) {
				$(badgeTipScreen).text(badgeTipContentScreen);
				$(badgeTipMobile).text(badgeTipContentMobile);
			}
		}, 100);
	});

	$("#badges a").click(function(e) {
		e.preventDefault();
	});

});