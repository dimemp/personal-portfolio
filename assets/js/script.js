$(function () {

	// Footer: show the current calendar year next to the copyright
	function initFooterYear() {
		$('#year').text(new Date().getFullYear());
	}

	// Cards and other controls that use data-href instead of a real href
	function initDataHrefClicks() {
		$('[data-href]').on('click', function () {
			// Read the URL from data-href and navigate the full page
			window.location.href = $(this).data('href');
		});
	}

	// Stat counters: numbers that count up once when scrolled halfway into view
	function initStatCounters() {

		// Select the stat counter elements
		var $stats = $('.stat-number[data-target]');

		// Skip setup when this layout has no stat blocks
		if (!$stats.length) return;

		// Drive the number from 0 to target over a fixed duration with easing
		function animateCount($el) {

			// Final value comes from data-target (value to reach, animation duration in milliseconds, optional trailing text)
			var target = parseInt($el.data('target'), 10),
				suffix = $el.data('suffix') || '',
				duration = 2000,
				start = null;

			// Called each frame until progress reaches 1 (100%)
			function step(timestamp) {

				// Anchor the timeline to the first frame
				if (!start) start = timestamp;

				// Linear progress 0..1 capped at the end
				var progress = Math.min((timestamp - start) / duration, 1);

				// Ease-out cubic: fast start, slow finish
				var eased = 1 - Math.pow(1 - progress, 3);

				// Round so we show whole numbers during the tween
				var current = Math.round(eased * target);

				// During the run show only the number; on the last frame append suffix
				$el.text(current + (progress === 1 ? suffix : ''));

				// Schedule another frame until complete
				if (progress < 1) requestAnimationFrame(step);
			}

			// Start the requestAnimationFrame loop
			requestAnimationFrame(step);
		}

		// Fire the animation once per stat when it crosses the visibility threshold
		var observer = new IntersectionObserver(function (entries) {

			entries.forEach(function (entry) {

				// Ignore elements scrolling out of view
				if (!entry.isIntersecting) return;

				// Wrap the observed DOM node for jQuery helpers
				var $el = $(entry.target);

				// Run at most once per element
				if ($el.data('counted')) return;

				// Mark as done so we do not restart on scroll
				$el.data('counted', true);

				// Kick off the counting animation
				animateCount($el);
			});

		}, { threshold: 0.5 });

		// Register each stat node with the observer
		$stats.each(function () { observer.observe(this); });
	}

	// Builder page: heading next to the logos shows which logo is hovered
	function initTechLogoLabel() {

		// The visible label element to update
		var $label = $('#tech-logos-label');

		// No label on pages without this block
		if (!$label.length) return;

		// Remember the default copy to restore on mouse leave
		var defaultText = $label.text();

		// On hover, show that logo's human-readable name from data-name
		$('.tech-logo-item').on('mouseenter', function () {
			$label.text($(this).data('name'));
		}).on('mouseleave', function () {
			// Restore the original heading when the pointer leaves the strip
			$label.text(defaultText);
		});
	}

	// Page-level tooltips (injected modal HTML initializes its own in project-modal.js)
	function initBootstrapTooltips() {

		// Require Bootstrap's JS bundle with Tooltip plugin
		if (window.bootstrap && bootstrap.Tooltip)
			// Every static tooltip trigger: attach to body so popper is not clipped
			document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
				// Reuse an existing instance if Hugo or another script already created one
				bootstrap.Tooltip.getOrCreateInstance(el, { container: 'body' });
			});

	}

	// Home page: Product vs Community toggle — tabs, split-cards, and portrait halves
	function initHomeTabToggle() {

		// Switch between "Product builder" and "Community builder" tab; show/dim the matching split-card and portrait half
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

		// Click on "Product builder" or "Community builder" tab to switch view
		$('.toggle-tabs .nav-link').on('click', function (e) {

			// Prevent the default link behavior
			e.preventDefault();

			// Get the tab from the data attribute
			var tab = $(this).data('tab');

			// Activate the selected tab
			activateTab(tab);
		});

		// Clicking a dimmed split-card (desktop) activates that tab so the user can switch without using the tab pills
		$('.split-card').on('click', function (e) {

			// Let button clicks pass through normally (e.g. "Projects", "Communities")
			if ($(e.target).closest('.btn').length) return;

			// Get the card
			var $card = $(this);

			// Only react when the card is dimmed (the other card is active)
			if (!$card.hasClass('is-dimmed')) return;

			// Map card id to tab name
			var tab = ($card.attr('id') === 'product-builder-content') ? 'product' : 'community';

			// Activate the selected tab
			activateTab(tab);
		});
	}

	// Wire each feature in order
	initFooterYear();
	initDataHrefClicks();
	initStatCounters();
	initTechLogoLabel();
	initBootstrapTooltips();
	initHomeTabToggle();

});