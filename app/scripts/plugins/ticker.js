(function ($) {
	$.fn.list_ticker = function (options) {

		return this.each(function() {

			const $this = $(this);          //$('#fade') <ul> element
			let list = $this.children();    //get all <li> elements
			list.not(':first').hide();      //hide all but first initially

			setInterval(() => {

				list = $this.children();
				list.not(':first').hide();

				const first = list.first(); //get first <li>
				const next = list.next().first();//next() is an array of "everything after", so just grab the first array element
				//could also do list.eq(2) or $(list.next()[0])

				first.fadeOut(() => {       //fade out first <li>
					next.fadeIn();          //fade in next <li>
					first.remove().appendTo($this); //remove first and add it back to end of <ul>
				});

			}, options.speed)
		});
	};
})(jQuery);
