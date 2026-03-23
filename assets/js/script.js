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
		projectModalContent = window.communitiesModalContent || window.webProjectsModalContent,
		hasProjectModalContent = projectModalContent && projectModalContent.length && $modalContent.length,
		bsModal = modalEl ? new bootstrap.Modal(modalEl) : null,
		modalVideoObserver = null,
		modalScrollPlayRaf = null;

	function disconnectModalVideoObserver() {
		if (modalVideoObserver) {
			modalVideoObserver.disconnect();
			modalVideoObserver = null;
		}
	}

	function pauseProjectRowVideos() {
		document.querySelectorAll('.project-split-row video').forEach(function (v) {
			v.pause();
		});
	}

	function resumeVisibleProjectRowVideos() {
		var vh = window.innerHeight || document.documentElement.clientHeight || 0;
		document.querySelectorAll('.project-split-row').forEach(function (row) {
			var r = row.getBoundingClientRect();
			if (r.width <= 0 || r.height <= 0 || r.bottom <= 0 || r.top >= vh)
				return;
			row.querySelectorAll('video').forEach(function (v) {
				v.muted = true;
				v.setAttribute('playsinline', '');
				v.play().catch(function () {});
			});
		});
	}

	function tryPlayModalVideo(v) {
		v.muted = true;
		v.defaultMuted = true;
		v.setAttribute('muted', '');
		v.setAttribute('playsinline', '');
		function go() {
			var p = v.play();
			if (p && typeof p.catch === 'function')
				p.catch(function () {});
		}
		go();
		if (v.readyState >= 2)
			return;
		if (v.dataset.modalAwaitingPlay === '1')
			return;
		v.dataset.modalAwaitingPlay = '1';
		v.addEventListener(
			'error',
			function () {
				delete v.dataset.modalAwaitingPlay;
			},
			{ once: true }
		);
		v.addEventListener(
			'canplay',
			function () {
				delete v.dataset.modalAwaitingPlay;
				go();
			},
			{ once: true }
		);
		if (v.readyState === 0)
			v.load();
	}

	function videoIntersectsModalScrollRoot(v, scrollRoot) {
		var r = v.getBoundingClientRect(),
			sr = scrollRoot.getBoundingClientRect();
		return r.width > 0 && r.height > 0 && r.bottom > sr.top && r.top < sr.bottom && r.right > sr.left && r.left < sr.right;
	}

	function initModalVideosPlayback() {
		disconnectModalVideoObserver();
		if (!modalEl) return;
		var scrollRoot = modalEl.querySelector('.project-modal-content'),
			inner = document.getElementById('js-project-modal-content');
		if (!scrollRoot || !inner) return;

		var videos = inner.querySelectorAll('video');
		if (!videos.length) return;

		function playIfVisible() {
			videos.forEach(function (v) {
				if (videoIntersectsModalScrollRoot(v, scrollRoot))
					tryPlayModalVideo(v);
			});
		}

		if (!('IntersectionObserver' in window)) {
			playIfVisible();
			return;
		}

		modalVideoObserver = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting)
						tryPlayModalVideo(entry.target);
				});
			},
			{ root: scrollRoot, rootMargin: '40px 0px', threshold: 0.01 }
		);

		videos.forEach(function (v) {
			modalVideoObserver.observe(v);
		});

		requestAnimationFrame(function () {
			requestAnimationFrame(function () {
				playIfVisible();
				setTimeout(playIfVisible, 200);
				setTimeout(playIfVisible, 600);
			});
		});
	}

	function scheduleInitModalVideos() {
		requestAnimationFrame(function () {
			requestAnimationFrame(initModalVideosPlayback);
		});
	}

	function teardownModalContentVideos() {
		$modalContent.find('video').each(function () {
			var v = this;
			v.pause();
			v.querySelectorAll('source').forEach(function (s) {
				s.removeAttribute('src');
			});
			try {
				v.load();
			} catch (e) {}
		});
	}

	function renderProject(index) {
		disconnectModalVideoObserver();
		teardownModalContentVideos();
		currentProjectIndex = index;
		if (hasProjectModalContent) {
			var content = projectModalContent[index];
			if (content)
				$modalContent.html(content);
		}
		$('.project-modal-content').scrollTop(0);
		if ($modal.hasClass('show'))
			scheduleInitModalVideos();
	}

	function openModal(index) {
		pauseProjectRowVideos();
		renderProject(index);
		if (bsModal) bsModal.show();
	}

	if (modalEl) {
		modalEl.addEventListener('shown.bs.modal', function () {
			pauseProjectRowVideos();
			$('.project-modal-content').scrollTop(0);
			scheduleInitModalVideos();
		});
		modalEl.addEventListener('hidden.bs.modal', function () {
			disconnectModalVideoObserver();
			var inner = document.getElementById('js-project-modal-content');
			if (inner)
				inner.querySelectorAll('video').forEach(function (v) {
					v.pause();
					v.querySelectorAll('source').forEach(function (s) {
						s.removeAttribute('src');
					});
					try {
						v.load();
					} catch (e) {}
				});
			resumeVisibleProjectRowVideos();
		});
	}

	$('.project-modal-content').on('scroll', function () {
		if (!$modal.hasClass('show')) return;
		var scrollRoot = this;
		if (modalScrollPlayRaf)
			return;
		modalScrollPlayRaf = requestAnimationFrame(function () {
			modalScrollPlayRaf = null;
			var inner = document.getElementById('js-project-modal-content');
			if (!inner) return;
			inner.querySelectorAll('video').forEach(function (v) {
				if (videoIntersectsModalScrollRoot(v, scrollRoot) && v.paused)
					tryPlayModalVideo(v);
			});
		});
	});

	// Click on btns to navigate to other pages or modal
	$('[data-href]').on('click', function () {
		window.location.href = $(this).data('href');
	});

	// Click on "Learn more" btn to open modal
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

	// No row hover on touch: play project videos when the row is in view (muted + playsinline in markup).
	(function () {
		if (!window.matchMedia || !window.matchMedia('(hover: none)').matches) return;
		var rows = document.querySelectorAll('.project-split-row');
		if (!rows.length) return;

		function playRowVideos(row) {
			row.querySelectorAll('video').forEach(function (v) {
				v.muted = true;
				v.setAttribute('playsinline', '');
				v.play().catch(function () {});
			});
		}

		function pauseRowVideos(row) {
			row.querySelectorAll('video').forEach(function (v) {
				v.pause();
				v.currentTime = 0;
			});
		}

		if (!('IntersectionObserver' in window)) {
			rows.forEach(playRowVideos);
			return;
		}

		var observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) playRowVideos(entry.target);
					else pauseRowVideos(entry.target);
				});
			},
			{ root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
		);

		rows.forEach(function (row) {
			observer.observe(row);
		});
	})();

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

	$modal.on('click', '.project-modal-nav--prev', function (e) {
		e.preventDefault();
		prevProject();
	});
	$modal.on('click', '.project-modal-nav--next', function (e) {
		e.preventDefault();
		nextProject();
	});

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