jQuery(document).ready(function ($) {

	console.log('foo!');

	const $fade = $('#fade'),
		$main = $('#main-content'),
		$flyover = $('#flyover'),
		interval = 4000,
		delay = 1500
		;

	//initial slide from top
	setTimeout(() => $fade.show(), delay);

	//rotation
	setTimeout(() => $fade.addClass('twist'), interval);

	//fade in/out ticker animation
	$fade.list_ticker({
		speed: interval,
		effect: 'fade'
	});

	//open menu
	$('.menu-trigger').on('click', function (event) {
		event.preventDefault();
		$main.addClass('move-out');
		$flyover.addClass('is-visible');
	});

	//close menu
	$('.close-menu').on('click', function (event) {
		event.preventDefault();
		$main.removeClass('move-out');
		$flyover.removeClass('is-visible');
	});
});
