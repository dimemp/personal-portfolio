// Project detail modal: slide HTML comes from inert <template class="js-project-modal-slide"> inside #project-modal-templates (see modal/*-modal-templates.html).

// Whitelist window keys we may assign from data-modal-content-key (add an entry when you add a new page type that ships its own templates).
var PROJECT_MODAL_CONTENT_KEYS = {
	communitiesModalContent: true,
	webProjectsModalContent: true
};

(function hydrateProjectModalFromTemplates() {

	var $root = $('#project-modal-templates');
	if (!$root.length)
		return;

	var key = $root.attr('data-modal-content-key');
	if (!key || !PROJECT_MODAL_CONTENT_KEYS[key])
		return;

	// Bundle already provided (e.g. future inline script) — do not overwrite
	if (window[key])
		return;

	var out = [];
	// Document order === carousel index === data-project on each row; append new <template class="js-project-modal-slide"> in Hugo — no JS list to update
	$root.find('template.js-project-modal-slide').each(function () {
		var el = this;
		if (el.tagName !== 'TEMPLATE')
			return;
		var frag = el.content;
		if (!frag || !frag.childNodes.length)
			return;
		var $tmp = $('<div>');
		$tmp.append(frag.cloneNode(true));
		out.push($tmp.html());
	});

	if (out.length)
		window[key] = out;
})();

$(function () {

	// Bootstrap modal root
	var $modal = $('#projectModal'),
	
		// Inner container whose HTML is replaced per project index
		$modalContent = $('#js-project-modal-content'),

		// Scrollable column inside the modal (videos play when visible in this viewport)
		$scrollContainer = $modal.find('.project-modal-content');

	// Skip setup if the modal shell or content root is missing
	if (!$modal.length || !$modalContent.length) return;

	// Raw element for Bootstrap APIs that expect a DOM node
	var modalEl = $modal[0],

		// String array of HTML chunks based on the builder or communities bundle
		projectModalContent = window.communitiesModalContent || window.webProjectsModalContent,

		// True when we have at least one slide and a place to inject it
		hasProjectModalContent = !!(projectModalContent && projectModalContent.length),

		// Index of the slide currently shown (used for prev/next wrapping)
		currentProjectIndex = 0,

		// Bootstrap modal controller for show/hide
		bsModal = new bootstrap.Modal(modalEl),

		// Observes <video> nodes inside the modal scroll area (null when disconnected)
		modalVideoObserver = null,

		// Holds the id from requestAnimationFrame so we coalesce scroll events
		modalScrollPlayRaf = null;

	// Tear down IntersectionObserver used to play modal videos when they enter the scroll area
	function disconnectModalVideoObserver() {

		// No-op if we never created an observer
		if (modalVideoObserver) {

			// Stop all callbacks and releases observed elements
			modalVideoObserver.disconnect();

			// Allow a fresh observer on next open or project change
			modalVideoObserver = null;
		}

	}

	// True while Bootstrap has the modal open (used for scroll and keyboard handlers)
	function modalIsOpen() {
		return $modal.hasClass('show');
	}

	// Pause every video in the project list rows (e.g. before opening the modal)
	function pauseProjectRowVideos() {

		// Each row may contain a preview <video>
		$('.project-split-row video').each(function () {
			// Stop playback but leave the element in the DOM
			this.pause();
		});

	}

	// After closing the modal, resume muted autoplay for row videos that are on screen
	function resumeVisibleProjectRowVideos() {

		// Viewport height for "is this row on screen?" checks
		var vh = window.innerHeight || document.documentElement.clientHeight || 0;

		// Loop through each row that may contain a preview <video>
		$('.project-split-row').each(function () {

			// Native row element and its screen rectangle
			var row = this,
				r = row.getBoundingClientRect();

			// Skip rows that are off-screen or have no layout
			if (r.width <= 0 || r.height <= 0 || r.bottom <= 0 || r.top >= vh)
				return;

			// Loop through each <video> in the row
			$(row).find('video').each(function () {

				// Autoplay policies: muted inline playback is allowed in most browsers
				this.muted = true;
				this.setAttribute('playsinline', '');

				// Ignore autoplay rejections (tab not focused, etc.)
				this.play().catch(function () {});

			});

		});
	}

	// Start playback for a video inside the modal (muted, playsinline, retry on canplay)
	function tryPlayModalVideo(v) {

		// Properties and attributes for autoplay-friendly playback
		v.muted = true;
		v.defaultMuted = true;
		v.setAttribute('muted', '');
		v.setAttribute('playsinline', '');

		// Single place to invoke play() and swallow promise rejections
		function go() {

			// play() may return a Promise; swallow rejections (autoplay / interrupt)
			var p = v.play();
			if (p && typeof p.catch === 'function')
				p.catch(function () {});
		}

		// Start playback
		go();

		// Already has enough data to play
		if (v.readyState >= 2)
			return;

		// Avoid stacking duplicate canplay handlers
		if (v.dataset.modalAwaitingPlay === '1')
			return;

		// Mark the video as awaiting playback
		v.dataset.modalAwaitingPlay = '1';
		$(v).one('error', function () {
			// Allow a later retry if the source failed
			delete v.dataset.modalAwaitingPlay;
		});

		// When the video has enough data to play
		$(v).one('canplay', function () {

			// Remove the marker
			delete v.dataset.modalAwaitingPlay;

			// Start playback
			go();
		});

		// Ask the browser to start loading media data
		if (v.readyState === 0)
			v.load();

	}

	// True if the video element intersects the modal's scrollable panel (for play-on-scroll)
	function videoIntersectsModalScrollRoot(v, scrollRootEl) {

		// Get the bounding client rectangle of the video and the scroll root
		var r = v.getBoundingClientRect(),
			sr = scrollRootEl.getBoundingClientRect();

		// Overlap test in viewport coordinates (both rects non-degenerate)
		return r.width > 0 && r.height > 0 && r.bottom > sr.top && r.top < sr.bottom && r.right > sr.left && r.left < sr.right;
	}

	// Observe modal content videos and play when visible inside .project-modal-content
	function initModalVideosPlayback() {

		// Drop any previous observer tied to old video nodes
		disconnectModalVideoObserver();

		// Modal layout without a scroll root cannot host this behavior
		if (!$scrollContainer.length) return;

		// Native element required as IntersectionObserver root
		var scrollRootEl = $scrollContainer[0],
			$videos = $modalContent.find('video');

		// No videos in the current slide HTML
		if (!$videos.length) return;

		// Immediate visibility pass (used with and without IntersectionObserver)
		function playIfVisible() {

			// Loop through each <video> in the modal content
			$videos.each(function () {

				// this is the <video> DOM node
				if (videoIntersectsModalScrollRoot(this, scrollRootEl))
					// Start playback with muted + canplay retry logic
					tryPlayModalVideo(this);

			});
		}

		// Very old browsers: no observer API
		if (!('IntersectionObserver' in window)) {

			// Start playback immediately
			playIfVisible();

			// Skip the observer path
			return;
		}

		// Create a new IntersectionObserver to track video visibility
		modalVideoObserver = new IntersectionObserver(

			// Callback for when the observer detects changes in visibility
			function (entries) {

				// Loop through each entry
				entries.forEach(function (entry) {

					// Video entered the scroll viewport (or margin)
					if (entry.isIntersecting)
						tryPlayModalVideo(entry.target);
				});
			},
			
			// root = modal scroll panel; small threshold + margin catches near-edge clips
			{ root: scrollRootEl, rootMargin: '40px 0px', threshold: 0.01 }
		);

		$videos.each(function () {

			// Register each <video> for intersection callbacks
			modalVideoObserver.observe(this);
		});

		// Run after paint; repeat on short delays so lazy media gets a chance to layout
		requestAnimationFrame(function () {

			// Run after paint; repeat on short delays so lazy media gets a chance to layout
			requestAnimationFrame(function () {

				// First pass once nested requestAnimationFrame has run
				playIfVisible();

				// Retry after sources/layout settle
				setTimeout(playIfVisible, 200);

				// Final retry for slow-loading media
				setTimeout(playIfVisible, 600);
			});

		});

	}

	// Defer init until layout has settled (double requestAnimationFrame)
	function scheduleInitModalVideos() {

		// First frame: let Bootstrap finish showing the modal
		requestAnimationFrame(function () {

			// Second frame: measure videos and wire IntersectionObserver
			requestAnimationFrame(initModalVideosPlayback);

		});

	}

	// Stop modal videos and clear sources so hidden content does not keep buffering
	function teardownModalContentVideos() {

		// Loop through each <video> in the modal content
		$modalContent.find('video').each(function () {

			// Current <video> node in the modal body
			var v = this;
			v.pause();

			// Loop through each <source> in the <video>
			$(v).find('source').each(function () {

				// Dropping src stops download/decoding for hidden slides
				this.removeAttribute('src');
			});

			try {
				// Reset the media element to an empty resource state
				v.load();
			} catch (e) {}

		});

	}

	// Remove Bootstrap tooltip instances from the injected HTML before replacing it
	function disposeModalTooltips() {

		// Skip when Bootstrap bundle did not load
		if (!window.bootstrap || !bootstrap.Tooltip) return;

		// Loop through each tooltip trigger in the modal content
		$modalContent.find('[data-bs-toggle="tooltip"]').each(function () {

			// Lookup existing plugin instance for this trigger element
			var t = bootstrap.Tooltip.getInstance(this);

			// Dispose of the instance if it exists
			if (t) t.dispose();
		});

	}

	// Recreate tooltips on the new modal body (container: body avoids clipping)
	function initModalTooltips() {

		// Skip when Bootstrap bundle did not load (rare)
		if (!window.bootstrap || !bootstrap.Tooltip) return;

		// Loop through each tooltip trigger in the modal content
		$modalContent.find('[data-bs-toggle="tooltip"]').each(function () {

			// Popper attaches to body so tooltips are not clipped by overflow
			bootstrap.Tooltip.getOrCreateInstance(this, { container: 'body' });

		});

	}

	// Inject project HTML by index; refresh Bootstrap tooltips; reset scroll and video observers
	function renderProject(index) {

		// Old observer targets may be detached after html(); disconnect first
		disconnectModalVideoObserver();

		// Pause and strip src from videos in the slide we are leaving
		teardownModalContentVideos();

		// Track slide index for prev/next (% wrap)
		currentProjectIndex = index;

		// Drop tooltips before their trigger nodes are replaced
		disposeModalTooltips();

		// If there is project modal content
		if (hasProjectModalContent) {

			// HTML string for this project (from bundled arrays)
			var content = projectModalContent[index];

			// Skip html() if bundle returned empty (should not happen)
			if (content)
				$modalContent.html(content);

		}

		// Jump to top of long project copy when switching slides
		$scrollContainer.scrollTop(0);

		// Re-bind tooltip triggers inside the new HTML
		initModalTooltips();

		// If swapping slides while open, restart video observers
		if (modalIsOpen())
			scheduleInitModalVideos();

	}

	// Open modal at index: pause row videos, render slide, show Bootstrap modal
	function openModal(index) {

		// Stop list previews so only modal audio/video matters
		pauseProjectRowVideos();

		// Inject HTML for this project index and refresh tooltips / observers
		renderProject(index);

		// Open dialog (Bootstrap fires shown.bs.modal after transition)
		bsModal.show();

	}

	// When modal is shown: pause rows again, scroll to top, start video observers
	$modal.on('shown.bs.modal', function () {

		// Row list videos should not play under the overlay
		pauseProjectRowVideos();
		
		// Start each open at the top of the project content

		$scrollContainer.scrollTop(0);

		// Set up intersection observer / play visible modal videos
		scheduleInitModalVideos();

	});

	// When modal hides: stop observers, tear down injected video elements, resume row previews
	$modal.on('hidden.bs.modal', function () {

		// Stop callbacks before we replace inner HTML on next open
		disconnectModalVideoObserver();

		// Release media resources for the slide we are leaving
		teardownModalContentVideos();

		// Restore preview autoplay for rows still in the viewport
		resumeVisibleProjectRowVideos();
	});

	// While modal is open, scrolling the panel may reveal new videos — play them if visible
	$scrollContainer.on('scroll', function () {

		// Ignore scroll events when the dialog is not visible
		if (!modalIsOpen()) return;

		// Collapse rapid scroll events into one rAF callback
		if (modalScrollPlayRaf)
			return;

		// The scrollable .project-modal-content element (native for rect math)
		var scrollRootEl = this;

		// Allow scheduling again on the next scroll event
		modalScrollPlayRaf = requestAnimationFrame(function () {

			// Allow scheduling again on the next scroll event
			modalScrollPlayRaf = null;

			// Loop through each <video> in the modal content
			$modalContent.find('video').each(function () {

				// Only start videos that are visible and not already playing
				if (videoIntersectsModalScrollRoot(this, scrollRootEl) && this.paused)
					// Same helper as observer path
					tryPlayModalVideo(this);

			});

		});
		
	});

	// Click on "Learn more" btn to open modal
	$('.btn-learn-more').on('click', function (e) {

		// Button may be an <a>; avoid navigation
		e.preventDefault();

		// data-project holds the index into projectModalContent
		var idx = parseInt($(this).data('project'), 10);

		// Guard: index must be valid and content bundle must exist
		if (hasProjectModalContent && !isNaN(idx)) openModal(idx);

	});

	// Click on a project row (outside links/buttons) opens the modal for that project
	$('.project-split-row').on('click', function (e) {

		// Do not steal clicks from real links or buttons inside the row
		if ($(e.target).closest('a, button').length) return;

		// Same data-project index convention as .btn-learn-more
		var idx = parseInt($(this).data('project'), 10);

		// Guard: index must be valid and content bundle must exist
		if (hasProjectModalContent && !isNaN(idx)) openModal(idx);

	});

	// Desktop: hover a row for 1s to preview its video; leave resets
	$('.project-split-row').on('mouseenter', function () {

		// The row receiving hover
		var $row = $(this);

		// Store timeout id in jQuery data so mouseleave can cancel it
		// 1s delay avoids flicker when moving quickly between rows
		$row.data('videoPlayTimeout', setTimeout(function () {
			
			$row.find('video').each(function () {
				// Row previews are expected to be muted in markup
				this.play();
			});
		}, 1000));
	}).on('mouseleave', function () {

		// The row receiving hover
		var $row = $(this);

		// Cancel the delayed hover play if the pointer leaves early
		clearTimeout($row.data('videoPlayTimeout'));

		// Drop the stored timeout handle from jQuery cache
		$row.removeData('videoPlayTimeout');

		// Loop through each <video> in the row
		$row.find('video').each(function () {

			// Stop playback
			this.pause();

			// Rewind so the next hover starts from the beginning
			this.currentTime = 0;

		});

	});

	// No row hover on touch: play project row videos when the row is in view (muted + playsinline in markup)
	(function initTouchRowVideoAutoplay() {

		// Primary coarse pointer (touch) without hover capability
		if (!window.matchMedia || !window.matchMedia('(hover: none)').matches) return;
		var $rows = $('.project-split-row');

		// Nothing to drive if the template has no rows
		if (!$rows.length) return;

		// Play the videos in the row
		function playRowVideos(rowEl) {

			$(rowEl).find('video').each(function () {

				// Touch autoplay policy
				this.muted = true;

				// Prefer inline cell playback on phones
				this.setAttribute('playsinline', '');

				// Ignore policy or focus-related rejections
				this.play().catch(function () {});
			});

		}

		// Pause the videos in the row
		function pauseRowVideos(rowEl) {

			// Loop through each <video> in the row
			$(rowEl).find('video').each(function () {

				// Stop decoding when the row leaves view
				this.pause();

				// Reset preview to the first frame
				this.currentTime = 0;

			});

		}

		// Very old browsers: no observer API
		if (!('IntersectionObserver' in window)) {

			// Legacy: start all row videos (no visibility gating)
			$rows.each(function () {

				// Play the videos in the row
				playRowVideos(this);

			});

			// Skip the observer path
			return;
		}

		// Create a new IntersectionObserver to track row visibility
		var observer = new IntersectionObserver(

			// Callback for when the observer detects changes in visibility
			function (entries) {

				// Loop through each entry
				entries.forEach(function (entry) {

					// Entering the visible band
					if (entry.isIntersecting) playRowVideos(entry.target);

					// Scrolled away or covered
					else pauseRowVideos(entry.target);

				});

			},
			// Viewport root; bottom margin avoids footer overlap; threshold ~20% visible
			{ root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
		);

		// Loop through each row
		$rows.each(function () {

			// One observer watches all rows
			observer.observe(this);
		});

	})();

	// Go to previous or next project in the modal carousel (wraps); delta is -1 or +1
	function stepProject(delta) {

		// Skip if there is no project modal content
		if (!hasProjectModalContent) return;

		// Number of slides from the injected bundle
		var len = projectModalContent.length,
			idx = (currentProjectIndex + delta + len) % len;

		// +len before % handles negative delta (previous)
		renderProject(idx);
	}

	// Arrow keys for prev/next (Escape handled by Bootstrap)
	$(document).on('keydown', function (e) {

		// Ignore keys when dialog is closed
		if (!modalIsOpen()) return;

		// Previous project
		if (e.key === 'ArrowLeft') stepProject(-1);

		// Next project
		if (e.key === 'ArrowRight') stepProject(1);
	});

	// Click prev/next chevrons inside the modal
	$modal.on('click', function (e) {

		// Event may start on a child of the button (e.g. SVG)
		var $t = $(e.target);

		// Chevrons behave like buttons
		if ($t.closest('.project-modal-nav--prev').length) {
			e.preventDefault();
			stepProject(-1);
		} else if ($t.closest('.project-modal-nav--next').length) {
			e.preventDefault();
			stepProject(1);
		}
	});

	// Mobile: drag the modal handle down to dismiss (pointer events + transform)
	(function initModalDragToClose() {

		// Draggable sheet + hit target for pull gesture
		var $panel = $modal.find('.project-modal-panel'),
			$handle = $modal.find('.project-modal-handle');

		// Markup missing on older templates — skip safely
		if (!$panel.length || !$handle.length) return;

		// Variables for the drag gesture
		var startY = 0,
			currentY = 0,
			dragging = false;

		// Prevent browser scroll steal
		$handle.css('touch-action', 'none');

		// When the user starts dragging the handle
		$handle.on('pointerdown', function (e) {

			// jQuery wraps the native PointerEvent
			var ev = e.originalEvent;

			// Anchor drag baseline
			startY = ev.clientY;
			currentY = startY;

			// Begin tracking movement
			dragging = true;

			// Disable CSS transition while finger moves
			$panel.css('transition', 'none');

			// Receive pointermove even if finger leaves the handle
			this.setPointerCapture(ev.pointerId);

		});

		// When the user is dragging the handle
		$handle.on('pointermove', function (e) {

			// Ignore if the user is not dragging
			if (!dragging) return;

			// jQuery wraps the native PointerEvent
			var ev = e.originalEvent;
			currentY = ev.clientY;

			// Only allow downward pull (positive delta)
			var diff = currentY - startY;
			if (diff > 0)
				$panel.css('transform', 'translateY(' + diff + 'px)');
		});


		// When the user stops dragging the handle
		function endDrag() {

			// Ignore if the user is not dragging
			if (!dragging) return;

			// Reset the dragging flag
			dragging = false;

			// Re-enable transition for snap-back animation
			$panel.css('transition', '');
			var diff = currentY - startY;

			// Threshold tuned for intentional dismiss
			if (diff > 100) {
				// User pulled far enough down — close modal, then clear transform after transition
				bsModal.hide();
				setTimeout(function () { $panel.css('transform', ''); }, 350);
			} else
				// Snap the panel back to the top
				$panel.css('transform', '');
		}

		// When the user stops dragging the handle
		$handle.on('pointerup pointercancel', endDrag);

	})();

});