$(function () {

	// --- Footer ---

	// Update the year in the footer
	$('#year').text(new Date().getFullYear());

	// --- Project modal ---

	// Variables
	var currentProjectIndex = 0,
		modalEl = document.getElementById('projectModal'),
		$modal = $(modalEl),
		$modalContent = $('#js-project-modal-content'),
		$prevBtn = $('#projectModalPrev'),
		$nextBtn = $('#projectModalNext'),
		projectModalContent = window.communitiesModalContent || window.webProjectsModalContent,
		hasProjectModalContent = projectModalContent && projectModalContent.length && $modalContent.length,
		bsModal = modalEl ? new bootstrap.Modal(modalEl) : null;

	function renderProject(index) {
		currentProjectIndex = index;
		if (hasProjectModalContent) {
			var content = projectModalContent[index];
			if (content)
				$modalContent.html(content);
		}
		$('.project-modal-content').scrollTop(0);
	}

	function openModal(index) {
		renderProject(index);
		if (bsModal) bsModal.show();
	}

	if (modalEl) {
		modalEl.addEventListener('shown.bs.modal', function () {
			$('.project-modal-content').scrollTop(0);
		});
	}

	$('.btn-learn-more').on('click', function (e) {
		e.preventDefault();
		var idx = parseInt($(this).data('project'), 10);
		if (hasProjectModalContent && !isNaN(idx)) openModal(idx);
	});

	$('.project-split-row').on('click', function (e) {
		if ($(e.target).closest('a, button').length) return;
		var idx = parseInt($(this).data('project'), 10);
		if (hasProjectModalContent && !isNaN(idx)) openModal(idx);
	});

	$('.project-split-row').on('mouseenter', function () {
		var $row = $(this);
		$row.data('videoPlayTimeout', setTimeout(function () {
			$row.find('video').each(function () { this.play(); });
		}, 1000));
	}).on('mouseleave', function () {
		var $row = $(this);
		clearTimeout($row.data('videoPlayTimeout'));
		$row.removeData('videoPlayTimeout');
		$row.find('video').each(function () {
			this.pause();
			this.currentTime = 0;
		});
	});

	function prevProject() {
		if (!hasProjectModalContent) return;
		var len = projectModalContent.length,
			idx = (currentProjectIndex - 1 + len) % len;
		renderProject(idx);
	}

	function nextProject() {
		if (!hasProjectModalContent) return;
		var len = projectModalContent.length,
			idx = (currentProjectIndex + 1) % len;
		renderProject(idx);
	}

	// Arrow keys for prev/next (Escape handled by Bootstrap)
	$(document).on('keydown', function (e) {
		if (!$modal.hasClass('show')) return;
		if (e.key === 'ArrowLeft') prevProject();
		if (e.key === 'ArrowRight') nextProject();
	});

	$prevBtn.on('click', prevProject);
	$nextBtn.on('click', nextProject);

	// --- Mobile swipe/drag-to-close ---
	(function () {
		var startY = 0,
			currentY = 0,
			dragging = false,
			$panel = $modal.find('.project-modal-panel'),
			$handle = $modal.find('.project-modal-handle');

		$handle.css('touch-action', 'none');

		$handle.on('pointerdown', function (e) {
			startY = e.originalEvent.clientY;
			currentY = startY;
			dragging = true;
			$panel.css('transition', 'none');
			this.setPointerCapture(e.originalEvent.pointerId);
		});

		$handle.on('pointermove', function (e) {
			if (!dragging) return;
			currentY = e.originalEvent.clientY;
			var diff = currentY - startY;
			if (diff > 0)
				$panel.css('transform', 'translateY(' + diff + 'px)');
		});

		$handle.on('pointerup pointercancel', function () {
			if (!dragging) return;
			dragging = false;
			$panel.css('transition', '');
			var diff = currentY - startY;
			if (diff > 100) {
				if (bsModal) bsModal.hide();
				setTimeout(function () { $panel.css('transform', ''); }, 350);
			} else
				$panel.css('transform', '');
		});
	})();

	// --- Stat counter animation ---
	(function () {
		var $stats = $('.stat-number[data-target]');
		if (!$stats.length) return;

		function animateCount($el) {
			var target = parseInt($el.data('target'), 10),
				suffix = $el.data('suffix') || '',
				duration = 2000,
				start = null;

			function step(timestamp) {
				if (!start) start = timestamp;
				var progress = Math.min((timestamp - start) / duration, 1);
				var eased = 1 - Math.pow(1 - progress, 3);
				var current = Math.round(eased * target);
				$el.text(current + (progress === 1 ? suffix : ''));
				if (progress < 1) requestAnimationFrame(step);
			}

			requestAnimationFrame(step);
		}

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				var $el = $(entry.target);
				if ($el.data('counted')) return;
				$el.data('counted', true);
				animateCount($el);
			});
		}, { threshold: 0.5 });

		$stats.each(function () { observer.observe(this); });
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

	// --- Home page: Product vs Community toggle ---
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