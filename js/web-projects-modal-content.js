/**
 * Modal content for web project detail (injected into #js-project-modal-content).
 * Used on builder.html. Index matches data-project on each row.
 */

var brandsealContent = `
	<h6 class="fs-09 text-muted">Nov 2025 - Present</h6>
	<h3 class="mb-4">Brandseal (by Wispit Ventures)</h3>
	<div class="w-100">
		<video class="w-100 object-fit-cover rounded-2 mb-4" muted autoplay playsinline loop aria-label="Brandseal video">
			<source src="assets/builder/projects/brandseal-video.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
	<div class="d-flex flex-column gap-4 bg-white border rounded-2 p-4">
		<div>
			<h6 class="fs-09">Tech & tools used</h6>
			<div class="tech-logos-grid tech-logos-grid--8-cols">
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="PHP"><img src="assets/builder/tech_logos/php-logo.svg" alt="PHP"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Laravel"><img src="assets/builder/tech_logos/laravel-logo.svg" alt="Laravel"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="MySQL"><img src="assets/builder/tech_logos/mysql-logo.svg" alt="MySQL"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="MariaDB"><img src="assets/builder/tech_logos/mariadb-logo.svg" alt="MariaDB"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Bootstrap"><img src="assets/builder/tech_logos/bootstrap-logo.svg" alt="Bootstrap"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="HTML5"><img src="assets/builder/tech_logos/html5-logo.svg" alt="HTML5"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="CSS3"><img src="assets/builder/tech_logos/css3-logo.svg" alt="CSS3"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="JavaScript"><img src="assets/builder/tech_logos/javascript-logo.svg" alt="JavaScript"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="jQuery"><img src="assets/builder/tech_logos/jquery-logo.svg" alt="jQuery"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Git"><img src="assets/builder/tech_logos/git-logo.svg" alt="Git"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="GitHub"><img src="assets/builder/tech_logos/github-logo.svg" alt="GitHub"></div>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Integrations</h6>
			<div class="col-12 col-lg-8 tech-logos-grid tech-logos-grid--3-cols">
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Google Workspace"><img src="assets/builder/tech_logos/google-workspace-full-logo.svg" alt="Google Workspace"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Notion"><img src="assets/builder/tech_logos/notion-full-logo.svg" alt="Notion"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Slack"><img src="assets/builder/tech_logos/slack-full-logo.svg" alt="Slack"></div>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Link</h6>
			<div class="d-block">
				<a href="https://gobrandseal.com/" target="_blank"><i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">Brandseal website</span></a><br>
			</div>
		</div>
	</div>
	<div class="col-12 col-xl-10 mx-auto my-5">
		<h6 class="mt-5">TL;DR</h6>
		<ul class="mb-5">
			<li>Engineering: 50,000+ lines of code built on Laravel/PHP</li>
			<li>Full-Stack Ownership: Handled 100% of the Branding, Logo Design, and DevOps</li>
			<li>Integrations: Connected with Google Workspace, Notion, and Slack</li>
			<li>Status: Market launch set for Q2 2026</li>
		</ul>
		<h6 class="mb-4">Description</h6>
		<p>Brandseal is the debut project from Wispit Ventures, my personal venture studio. It is a dedicated platform designed to help businesses protect and manage their digital brand assets. I handled the end-to-end creation of the product, moving from the initial visual identity and logo design to the full-stack technical architecture.</p>
		<p class="mb-0">The platform is built on a codebase of approximately 50,000 lines of code—a number that is actively growing as we head toward launch. I developed the application using Laravel and PHP with a MySQL database, utilizing JS and jQuery for the frontend interface. To ensure the product integrates seamlessly into professional workflows, I built custom integrations with Google Workspace, Notion, and Slack. Brandseal is currently in its final development phase and is scheduled for market release in Q2 2026.</p>
		<h6 class="mt-5 mb-0">Some more videos & images</h6>
	</div>
	<div class="w-100">
		<video class="w-100 object-fit-cover rounded-2 mb-5" muted autoplay playsinline loop aria-label="Brandseal platform video 1">
			<source src="assets/builder/projects/brandseal-platform-video-1.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		<video class="w-100 object-fit-cover rounded-2" muted autoplay playsinline loop aria-label="Brandseal platform video 2">
			<source src="assets/builder/projects/brandseal-platform-video-2.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
`;

var founderhoodContent = `
	<h6 class="fs-09 text-muted">Nov 2018 - Nov 2025</h6>
	<h3 class="mb-4">Co-founder | CTO & CPO, Founderhood</h3>
	<div class="w-100">
		<video class="w-100 object-fit-cover rounded-2 mb-4" muted autoplay playsinline loop aria-label="Founderhood video">
			<source src="assets/builder/projects/founderhood-video.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
	<div class="d-flex flex-column gap-4 bg-white border rounded-2 p-4">
		<div>
			<h6 class="fs-09">Tech & tools used</h6>
			<div class="tech-logos-grid tech-logos-grid--8-cols">
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="PHP"><img src="assets/builder/tech_logos/php-logo.svg" alt="PHP"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Laravel"><img src="assets/builder/tech_logos/laravel-logo.svg" alt="Laravel"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="MySQL"><img src="assets/builder/tech_logos/mysql-logo.svg" alt="MySQL"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Bootstrap"><img src="assets/builder/tech_logos/bootstrap-logo.svg" alt="Bootstrap"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="JavaScript"><img src="assets/builder/tech_logos/javascript-logo.svg" alt="JavaScript"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="jQuery"><img src="assets/builder/tech_logos/jquery-logo.svg" alt="jQuery"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Git"><img src="assets/builder/tech_logos/git-logo.svg" alt="Git"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="GitHub"><img src="assets/builder/tech_logos/github-logo.svg" alt="GitHub"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="MariaDB"><img src="assets/builder/tech_logos/mariadb-logo.svg" alt="MariaDB"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="HTML5"><img src="assets/builder/tech_logos/html5-logo.svg" alt="HTML5"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="CSS3"><img src="assets/builder/tech_logos/css3-logo.svg" alt="CSS3"></div>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Integrations</h6>
			<div class="tech-logos-grid tech-logos-grid--8-cols">
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Slack"><img class="w-75" src="assets/builder/tech_logos/slack-full-logo.svg" alt="Slack"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Outlook Calendar"><img src="assets/builder/tech_logos/outlook-calendar-logo.svg" alt="Outlook Calendar"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Google Calendar"><img src="assets/builder/tech_logos/google-calendar-logo.svg" alt="Google Calendar"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Zapier"><img src="assets/builder/tech_logos/zapier-logo.svg" alt="Zapier"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="SendGrid"><img class="w-75" src="assets/builder/tech_logos/sendgrid-logo.svg" alt="SendGrid"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Zoom"><img class="w-75" src="assets/builder/tech_logos/zoom-logo.svg" alt="Zoom"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Daily"><img class="w-75" src="assets/builder/tech_logos/daily-logo.svg" alt="Daily"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Pusher"><img class="w-75" src="assets/builder/tech_logos/pusher-logo.svg" alt="Pusher"></div>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Link</h6>
			<div class="d-block">
				<a href="https://thefounderhood.com/" target="_blank"><i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">Founderhood website</span></a><br>
			</div>
		</div>
	</div>
	<div class="col-12 col-xl-10 mx-auto my-5">
		<h6 class="mt-5">TL;DR</h6>
		<ul class="mb-5">
			<li>Scale: Powering 2,300+ startups and 5,000+ total users since 2018</li>
			<li>Codebase: 150,000+ lines of code using Laravel/PHP</li>
			<li>Integrations: Real-time and video syncing via Pusher, Daily, Zoom, and Google/Outlook Calendars</li>
			<li>Leadership: Lead Developer managing a team of 2 devs</li>
			<li>Creative Ownership: 100% responsibility for the Branding and Visual Identity</li>
		</ul>
		<h6 class="mb-4">Description</h6>
		<p>Founderhood is a comprehensive platform for accelerator and incubator management, which I have been building for almost 7 years. The product serves as the central hub for over 2,300 startups and 5,000 total users, including founders, mentors, and program organizers across Europe. I led the technical development from day one, managing a team of two other developers through the majority of its growth.</p>
		<p class="mb-0">Our team built the platform on a substantial codebase of over 150,000 lines of code, utilizing Laravel and PHP with a MySQL database. To support high-touch mentorship and program management, we implemented a suite of complex, real-time integrations, including Pusher for live chat, SendGrid for automated email communications, and Daily & Zoom for embedded video conferencing.</p>
		<p>We also developed dual-way calendar syncing with Google and Outlook Calendars and integrated Zapier to allow organizers to seamlessly sync their Founderhood data with external CRM tools like HubSpot & Salesforce. Beyond the engineering, I managed the complete branding and logo design, ensuring the platform maintained a professional identity for its international client base.</p>
	</div>
	<div class="w-100">
		<video class="w-100 object-fit-cover rounded-2 mb-5" muted autoplay playsinline loop aria-label="Founderhood platform video 1">
			<source src="assets/builder/projects/founderhood-platform-video-1.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		<video class="w-100 object-fit-cover rounded-2" muted autoplay playsinline loop aria-label="Founderhood platform video 2">
			<source src="assets/builder/projects/founderhood-platform-video-2.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
`;

var variousWebProjectsContent = `
	<div class="border-bottom pb-5 mb-5">
		<h6 class="fs-09 text-muted">Oct 2020 - May 2022</h6>
		<h3 class="mb-4">Initiator & tech lead | Startup Universe</h3>
		<div class="w-100">
			<video class="w-100 object-fit-cover rounded-2 mb-4" muted autoplay playsinline loop aria-label="Startup Universe landing page video">
				<source src="assets/builder/projects/gsu-video.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</div>
		<div class="d-flex justify-content-evenly flex-wrap gap-4 bg-white border rounded-2 p-4">
			<div>
				<h6 class="fs-09">20,000+</h6>
				<p class="fs-09 mb-0">visitors</p>
			</div>
			<div>
				<h6 class="fs-09">600+</h6>
				<p class="fs-09 mb-0">program applicants</p>
			</div>
			<div>
				<h6 class="fs-09">Link</h6>
				<div class="d-block">
					<a href="https://dimemp.github.io/gsu/" target="_blank"><i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">Startup Universe website</span></a><br>
				</div>
			</div>
		</div>
		<div class="col-12 col-xl-10 mx-auto mt-5">
			<h6 class="mb-4">Description</h6>
			<p class="mb-0">I designed the brand identity and the digital gateway for this international program. The logo, three interlocking circles, symbolizes the connection between Greeks in Greece, Cyprus, and the global Diaspora. I built the landing page using HTML and CSS, integrating Airtable for form submissions. I also used Adobe After Effects to produce the hero section video.</p>
		</div>
	</div>
	<div class="pb-5 mb-5">
		<h6 class="fs-09 text-muted">May 2015 - Dec 2016</h6>
		<h3 class="mb-4">Co-founder (Product - Front - Design) | PartyBuzz </h3>
		<div class="mb-4">
			<div class="mb-5">
				<img class="img-fluid rounded-2" src="assets/builder/projects/partybuzz-user-profile.png" alt="PartyBuzz logo">
				<figcaption class="figure-caption mt-2">User's profile page with limited invitations. Whole platform was invitation-only to curate the initial community.</figcaption>
			</div>
			<div>
				<img class="img-fluid rounded-2" src="assets/builder/projects/partybuzz-contibutions-invitation-modals.png" alt="PartyBuzz logo">
				<figcaption class="figure-caption mt-2">Group "asking" invitation for a party & contributions requests.</figcaption>
			</div>
		</div>
		<div class="bg-white border rounded-2 p-4">
			<h6 class="fs-09">Tech & tools used</h6>
			<div class="tech-logos-grid tech-logos-grid--8-cols">
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Django"><img src="assets/builder/tech_logos/django-logo.svg" alt="Django"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="JavaScript"><img src="assets/builder/tech_logos/javascript-logo.svg" alt="JavaScript"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="jQuery"><img src="assets/builder/tech_logos/jquery-logo.svg" alt="jQuery"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="PostgreSQL"><img src="assets/builder/tech_logos/postgresql-logo.svg" alt="PostgreSQL"></div>
			</div>
		</div>
		<div class="col-12 col-xl-10 mx-auto mt-5">
			<h6 class="mb-4">Description</h6>
			<p>Partybuzz was my first deep dive into the Greek startup ecosystem. More than a simple RSVP tool, we built a platform for crowdsourced party at homes logistics, allowing organizers to request specific in-kind or financial contributions from guests to fund their parties. We also engineered a unique "Group RSVP" feature, a first for the time,where users could join parties as a collective, requiring the host to accept the entire group or none at all.</p>
			<p class="mb-0">Built with Django, JS, jQuery, and PostgreSQL, I led a team of two developers and managed the branding (except the logo) and web design. This project anticipated the "collaborative social" trend currently dominated by apps like <a href="https://partiful.com/" target="_blank">Partiful</a> (which has raised $27.3M, including a Series A led by a16z).</p>
		</div>
	</div>
`;

// Content for each project row (data-project="0", "1", "2")
window.webProjectsModalContent = [
	brandsealContent,
	founderhoodContent,
	variousWebProjectsContent
];