$(function () {

	// --- Footer ---
	// Update the year in the footer
	$('#year').text(new Date().getFullYear());

	// --- Project modal (communities & builder pages) ---
	// Content is provided by communities-modal-content.js or web-projects-modal-content.js
	var currentProjectIndex = 0,
		$overlay = $('#projectModalOverlay'),
		$modal = $('#projectModal'),
		$prevBtn = $('#projectModalPrev'),
		$nextBtn = $('#projectModalNext'),
		$modalContent = $('#js-project-modal-content'),
		// Whichever content script is loaded for this page (communities or web-projects)
		projectModalContent = window.communitiesModalContent || window.webProjectsModalContent,
		hasProjectModalContent = projectModalContent && projectModalContent.length && $modalContent.length;

	// Inject HTML for the given project index and scroll modal content to top
	function renderProject(index) {
		currentProjectIndex = index;
		if (hasProjectModalContent) {
			var content = projectModalContent[index];
			if (content) 
				$modalContent.html(content);
		}
		// Reset scroll so user sees the top of the new content
		$('.project-modal-content').scrollTop(0);
	}

	// Show modal and render content for the given project index; lock body scroll
	function openModal(index) {
		renderProject(index);
		$overlay.addClass('is-open');
		$('body').addClass('modal-open');
	}

	// Hide modal and restore body scroll
	function closeModal() {
		$overlay.removeClass('is-open');
		$('body').removeClass('modal-open');
	}

	// "Learn more" in each row: open modal for that row's project index
	$('.btn-learn-more').on('click', function (e) {
		e.preventDefault();
		var idx = parseInt($(this).data('project'), 10);
		if (hasProjectModalContent && !isNaN(idx)) openModal(idx);
	});

	// Click anywhere on the row (except links/buttons) to open the modal
	$('.project-split-row').on('click', function (e) {
		if ($(e.target).closest('a, button').length) return;
		var idx = parseInt($(this).data('project'), 10);
		if (hasProjectModalContent && !isNaN(idx)) openModal(idx);
	});

	// Hover on row: play video in that row; leave: pause and reset
	$('.project-split-row').on('mouseenter', function () {
		$(this).find('video').each(function () { this.play(); });
	}).on('mouseleave', function () {
		$(this).find('video').each(function () {
			this.pause();
			this.currentTime = 0;
		});
	});

	// Close button in the top-right of the modal
	$('#projectModalClose').on('click', closeModal);

	// Click on overlay background (not the modal panel) closes the modal
	$overlay.on('click', function (e) {
		if ($(e.target).is($overlay)) 
			closeModal();
	});

	// Go to previous project in the list (wraps to last if at first)
	function prevProject() {
		if (!hasProjectModalContent) return;
		var len = projectModalContent.length,
			idx = (currentProjectIndex - 1 + len) % len;
		renderProject(idx);
	}

	// Go to next project in the list (wraps to first if at last)
	function nextProject() {
		if (!hasProjectModalContent) 
			return;
		var len = projectModalContent.length,
			idx = (currentProjectIndex + 1) % len;
		renderProject(idx);
	}

	// Keyboard: Escape to close, Arrow keys for prev/next (only when modal is open)
	$(document).on('keydown', function (e) {
		if (!$overlay.hasClass('is-open')) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowLeft') prevProject();
		if (e.key === 'ArrowRight') nextProject();
	});

	// Prev/next buttons in the modal nav bar
	$prevBtn.on('click', prevProject);
	$nextBtn.on('click', nextProject);

	// --- Mobile swipe/drag-to-close ---
	// Uses pointer events for touch and Firefox responsive mode; drag handle down to close modal
	(function () {
		var startY = 0,
			currentY = 0,
			dragging = false,
			$handle = $modal.find('.project-modal-handle');

		// Prevent browser from handling touch (e.g. pull-to-refresh) while dragging
		$handle.css('touch-action', 'none');

		// Start drag: record position, disable transition for smooth follow
		$handle.on('pointerdown', function (e) {
			startY = e.originalEvent.clientY;
			currentY = startY;
			dragging = true;
			$modal.css('transition', 'none');
			this.setPointerCapture(e.originalEvent.pointerId);
		});

		$handle.on('pointermove', function (e) {
			if (!dragging) return;
			currentY = e.originalEvent.clientY;
			var diff = currentY - startY;
			if (diff > 0)
				$modal.css('transform', 'translateY(' + diff + 'px)');
		});

		// End drag: close modal if dragged down enough, else snap back
		$handle.on('pointerup pointercancel', function () {
			if (!dragging) return;
			dragging = false;
			$modal.css('transition', '');
			var diff = currentY - startY;
			if (diff > 100) {
				closeModal();
				setTimeout(function () { $modal.css('transform', ''); }, 350);
			} else
				$modal.css('transform', '');
		});
	})();

	// --- Tech logos: swap heading text on hover ---
	(function () {
		var $label = $('#tech-logos-label');
		if (!$label.length) return;
		var defaultText = $label.text();

		$('.tech-logo-item').on('mouseenter', function () {
			$label.text($(this).data('name'));
		}).on('mouseleave', function () {
			$label.text(defaultText);
		});
	})();

	// --- Home page: Product vs Community toggle (index.html) ---
	// Check if we're on a large screen (Bootstrap lg breakpoint)
	function isLargeScreen() {
		return window.matchMedia('(min-width: 992px)').matches;
	}

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

		activateTab(tab);
	});

});