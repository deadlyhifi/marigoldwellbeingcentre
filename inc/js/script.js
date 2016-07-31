jQuery(document).ready(function($) {

	// Create the dropdown base
	$("<select />").appendTo("nav");

	// Create default option "Go to..."
	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Navigation"
	}).appendTo("nav select");

	// Populate dropdown with menu items
	$("nav a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("nav select");
	});

	// jump to nav item
	$("nav select").change(function() {
		navitem = $(this).find("option:selected").val();
		if (navitem != '') {
			document.location = navitem;
		}
	});

}); //