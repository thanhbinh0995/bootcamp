jQuery(document).ready(function($) {
	$(".nav-tabs a").click(function(){
    	$('#change').text($(this).text());
		$(this).tab('show');
    });
});