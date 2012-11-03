$(function() {

	var badgeTip = $("#badge-summary");
	var badgeTipContent = $(badgeTip).text();

	var hovering = false;

	$("#badges img").hover(function(e) {
		hovering = true;
		$(badgeTip).html('<strong>' + $(this).attr('alt') + '</strong>');
	}, function(e) {
		hovering = false;

		setTimeout(function() {
			if (hovering == false) {
				$(badgeTip).text(badgeTipContent);
			}
		}, 100);
	});

});