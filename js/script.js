$(function () {

	// Update the year in the footer
	$('#year').text(new Date().getFullYear());

	// Check if we're on a large screen (Bootstrap lg breakpoint)
	function isLargeScreen() {
		return window.matchMedia('(min-width: 992px)').matches;
	}

	// Shared function to activate a tab by name
	function activateTab(tab) {
		// Update toggle-tabs active state
		$('.toggle-tabs .nav-link').removeClass('active');
		$('.toggle-tabs .nav-link[data-tab="' + tab + '"]').addClass('active');

		if (tab === 'product') {
			// Show the product builder content
			$('#product-builder-content').removeClass('is-dimmed');

			// Dim the community builder content
			$('#community-builder-content').addClass('is-dimmed');

			// Update portrait halves (desktop)
			$('.portrait-half--left').removeClass('is-dimmed');
			$('.portrait-half--right').addClass('is-dimmed');

		} else {
			// Show the community builder content
			$('#community-builder-content').removeClass('is-dimmed');

			// Dim the product builder content
			$('#product-builder-content').addClass('is-dimmed');

			// Update portrait halves (desktop)
			$('.portrait-half--right').removeClass('is-dimmed');
			$('.portrait-half--left').addClass('is-dimmed');
		}
	}

	// Toggle tabs click handler
	$('.toggle-tabs .nav-link').on('click', function (e) {
		// Prevent the default link behavior
		e.preventDefault();

		// Get the tab from the data attribute
		var tab = $(this).data('tab');

		// Activate the selected tab
		activateTab(tab);
	});

	// Make the whole split-card clickable to select its tab (except button clicks)
	$('.split-card').on('click', function (e) {

		// Let button clicks pass through normally
		if ($(e.target).closest('.btn').length) return;

		// Get the card
		var $card = $(this);

		// Only activate if the card is currently dimmed (desktop only)
		if (!$card.hasClass('is-dimmed')) return;

		// Determine which tab to activate
		var tab = ($card.attr('id') === 'product-builder-content') ? 'product' : 'community';

		activateTab(tab);
	});

});