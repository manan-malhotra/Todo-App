//! Clicking On the To-Do to check itself
$('ul').on('click', 'li', function() {
	$(this).toggleClass('checked');
});

//! Click on the Delete button span
$('ul').on('click', 'span', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopImmediatePropagation();
});

//! Adding New List
$("input[type = 'text']").keypress(function(e) {
	if (e.which === 13) {
		var text = $(this).val();
		$(this).val('');
		$('ul').append('<li> <span><ion-icon name="trash-sharp"></ion-icon></span> ' + text + '</li>');
	}
});

//! Hide?Show
$('h1 ion-icon').click(function() {
	$("input[type = 'text']").fadeToggle(10);
});
