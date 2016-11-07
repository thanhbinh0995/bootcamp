jQuery(document).ready(function($) {
	$(".nav-tabs a").click(function(){
    	$('#change').text($(this).text());
		$(this).tab('show');
    });

	// $(function() {
	//     /* initiate plugin */
	//     $("div.holder").jPages({
	//         containerID : "itemContainer",
	//         callback    : function( pages,
	//         items ){
	//             $("#legend1").html("Page " + pages.current + " of " + pages.count);
	//         $("#legend2").html(items.range.start + " - " + items.range.end + " of " + items.count);
	//         }
	//     });
	// });
});