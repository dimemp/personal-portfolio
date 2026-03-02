$(function () {

	// Update the year in the footer
	$('#year').text(new Date().getFullYear());

	/* =========================================================
	   Community project modal (Dribbble-style)
	   ========================================================= */

	var communityProjects = [
		{
			title: 'Founding member ThinkBiz',
			date: 'Nov 2012 - Jun 2015',
			image: 'imgs/thinkbiz/thinkbiz_team.png',
			imageAlt: 'ThinkBiz team',
			description: '<p>ThinkBiz is the first Student Entrepreneurship Club of Greece founded with the goal to enhance the entrepreneurial spirit of students.</p><p>As a founding member, I helped shape the organization from the ground up, building a community of ambitious students who wanted to turn their ideas into real ventures. We organized workshops, hackathons, and mentorship programs that connected students with industry leaders.</p>',
			website: 'https://thinkbiz.gr',
			websiteLabel: 'thinkbiz.gr',
			role: 'Founding Member',
			tags: ['Community', 'Entrepreneurship', 'Education']
		},
		{
			title: 'Founding member ThinkBiz',
			date: 'Nov 2012 - Jun 2015',
			image: 'imgs/thinkbiz/thinkbiz_team.png',
			imageAlt: 'ThinkBiz team',
			description: '<p>ThinkBiz is the first Student Entrepreneurship Club of Greece founded with the goal to enhance the entrepreneurial spirit of students.</p><p>As a founding member, I helped shape the organization from the ground up, building a community of ambitious students who wanted to turn their ideas into real ventures.</p>',
			website: 'https://thinkbiz.gr',
			websiteLabel: 'thinkbiz.gr',
			role: 'Founding Member',
			tags: ['Community', 'Entrepreneurship', 'Education']
		},
		{
			title: 'Founding member ThinkBiz',
			date: 'Nov 2012 - Jun 2015',
			image: 'imgs/thinkbiz/thinkbiz_team.png',
			imageAlt: 'ThinkBiz team',
			description: '<p>ThinkBiz is the first Student Entrepreneurship Club of Greece founded with the goal to enhance the entrepreneurial spirit of students.</p><p>As a founding member, I helped shape the organization from the ground up, building a community of ambitious students who wanted to turn their ideas into real ventures.</p>',
			website: 'https://thinkbiz.gr',
			websiteLabel: 'thinkbiz.gr',
			role: 'Founding Member',
			tags: ['Community', 'Entrepreneurship', 'Education']
		}
	];

	var currentProjectIndex = 0;
	var $overlay = $('#projectModalOverlay');
	var $modal = $('#projectModal');
	var $prevBtn = $('#projectModalPrev');
	var $nextBtn = $('#projectModalNext');

	function renderProject(index) {
		var p = communityProjects[index];
		currentProjectIndex = index;

		$('#projectModalHero').html(
			'<img src="' + p.image + '" alt="' + p.imageAlt + '">'
		);

		$('#projectModalText').html(
			'<h6 class="fs-09 text-muted">' + p.date + '</h6>' +
			'<h3>' + p.title + '</h3>' +
			p.description
		);

		var tagsHtml = '';
		if (p.tags && p.tags.length) {
			tagsHtml = '<div class="sidebar-tags">';
			for (var i = 0; i < p.tags.length; i++) {
				tagsHtml += '<span class="sidebar-tag">' + p.tags[i] + '</span>';
			}
			tagsHtml += '</div>';
		}

		$('#projectModalSidebar').html(
			'<div class="sidebar-card">' +
				'<h6>Role</h6>' +
				'<p>' + p.role + '</p>' +
			'</div>' +
			'<div class="sidebar-card">' +
				'<h6>Website</h6>' +
				'<a href="' + p.website + '" target="_blank"><i class="bi bi-arrow-up-right me-1"></i>' + p.websiteLabel + '</a>' +
			'</div>' +
			(tagsHtml ? '<div class="sidebar-card"><h6>Tags</h6>' + tagsHtml + '</div>' : '')
		);

		$('#projectModalContent').scrollTop(0);
	}

	function openModal(index) {
		renderProject(index);
		$overlay.addClass('is-open');
		$('body').addClass('modal-open');
	}

	function closeModal() {
		$overlay.removeClass('is-open');
		$('body').removeClass('modal-open');
	}

	$('.btn-learn-more').on('click', function (e) {
		e.preventDefault();
		var idx = parseInt($(this).data('project'), 10);
		openModal(idx);
	});

	$('.project-split-row').on('click', function (e) {
		if ($(e.target).closest('a, button').length) return;
		var idx = parseInt($(this).data('project'), 10);
		if (!isNaN(idx)) openModal(idx);
	});

	$('.project-split-row').on('mouseenter', function () {
		$(this).find('video').each(function () { this.play(); });
	}).on('mouseleave', function () {
		$(this).find('video').each(function () {
			this.pause();
			this.currentTime = 0;
		});
	});

	$('#projectModalClose').on('click', closeModal);

	$overlay.on('click', function (e) {
		if ($(e.target).is($overlay)) closeModal();
	});

	function prevProject() {
		var idx = (currentProjectIndex - 1 + communityProjects.length) % communityProjects.length;
		renderProject(idx);
	}

	function nextProject() {
		var idx = (currentProjectIndex + 1) % communityProjects.length;
		renderProject(idx);
	}

	$(document).on('keydown', function (e) {
		if (!$overlay.hasClass('is-open')) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowLeft') prevProject();
		if (e.key === 'ArrowRight') nextProject();
	});

	$prevBtn.on('click', prevProject);
	$nextBtn.on('click', nextProject);

	// Mobile swipe/drag-to-close (pointer events for touch + Firefox responsive mode)
	(function () {
		var startY = 0;
		var currentY = 0;
		var dragging = false;
		var $handle = $modal.find('.project-modal-handle');

		$handle.css('touch-action', 'none');

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
			if (diff > 0) {
				$modal.css('transform', 'translateY(' + diff + 'px)');
			}
		});

		$handle.on('pointerup pointercancel', function () {
			if (!dragging) return;
			dragging = false;
			$modal.css('transition', '');
			var diff = currentY - startY;
			if (diff > 100) {
				closeModal();
				setTimeout(function () {
					$modal.css('transform', '');
				}, 350);
			} else {
				$modal.css('transform', '');
			}
		});
	})();

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