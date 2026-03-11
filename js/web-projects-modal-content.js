/**
 * Modal content for web project detail (injected into #js-project-modal-content).
 * Used on builder.html. Index matches data-project on each row.
 */

var leadingPositionsContent = `
	<h6 class="fs-09 text-muted">Nov 2025 - Present</h6>
	<h3 class="mb-4">Brandseal (by Wispit Ventures)</h3>
	<div class="w-100">
		<video class="w-100 object-fit-cover rounded-2 mb-4" muted autoplay playsinline loop aria-label="Brandseal video">
			<source src="imgs/builder/projects/brandseal-video.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
	<div class="d-flex flex-column gap-4 bg-white border rounded-2 p-4">
		<div>
			<h6 class="fs-09">Tech & tools used</h6>
			<div class="tech-logos-grid tech-logos-grid--8-cols">
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="PHP"><img src="imgs/builder/tech_logos/php-logo.svg" alt="PHP"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Laravel"><img src="imgs/builder/tech_logos/laravel-logo.svg" alt="Laravel"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="MySQL"><img src="imgs/builder/tech_logos/mysql-logo.svg" alt="MySQL"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Bootstrap"><img src="imgs/builder/tech_logos/bootstrap-logo.svg" alt="Bootstrap"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="JavaScript"><img src="imgs/builder/tech_logos/javascript-logo.svg" alt="JavaScript"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="jQuery"><img src="imgs/builder/tech_logos/jquery-logo.svg" alt="jQuery"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="Git"><img src="imgs/builder/tech_logos/git-logo.svg" alt="Git"></div>
				<div class="tech-logo-item d-flex align-items-center justify-content-center" data-name="GitHub"><img src="imgs/builder/tech_logos/github-logo.svg" alt="GitHub"></div>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Integrations</h6>
			<div class="col-12 col-lg-8 tech-logos-grid">
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Google Workspace"><img src="imgs/builder/tech_logos/google-workspace-full-logo.svg" alt="Google Workspace"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Notion"><img src="imgs/builder/tech_logos/notion-full-logo.svg" alt="Notion"></div>
				<div class="tech-logo-item tech-logo-item--wide d-flex align-items-center justify-content-center" data-name="Slack"><img src="imgs/builder/tech_logos/slack-full-logo.svg" alt="Slack"></div>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Link</h6>
			<div class="d-block">
				<a href="https://gobrandseal.com/" target="_blank"><i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">Brandseal website</span></a><br>
			</div>
		</div>
	</div>
	<div class="col-12 col-lg-10 col-xl-8 mx-auto my-5">
		<h6 class="mb-4">Description</h6>
		<p>Brandseal is the debut project from Wispit Ventures, my personal venture studio. It is a dedicated platform designed to help businesses protect and manage their digital brand assets. I handled the end-to-end creation of the product, moving from the initial visual identity and logo design to the full-stack technical architecture.</p>
		<p>The platform is built on a codebase of approximately 50,000 lines of code—a number that is actively growing as we head toward launch. I developed the application using Laravel and PHP with a MySQL database, utilizing JS and jQuery for the frontend interface. To ensure the product integrates seamlessly into professional workflows, I built custom integrations with Google Workspace, Notion, and Slack. Brandseal is currently in its final development phase and is scheduled for market release in Q2 2026.</p>
		<h6 class="mt-5">TL;DR</h6>
		<ul class="mb-5">
			<li>Venture Studio: First official release under Wispit Ventures</li>
			<li>Engineering: 50,000+ lines of code built on Laravel/PHP</li>
			<li>Full-Stack Ownership: Handled 100% of the Branding, Logo Design, and DevOps</li>
			<li>Integrations: Connected with Google Workspace, Notion, and Slack</li>
			<li>Status: Market launch set for Q2 2026</li>
		</ul>
		<h6 class="mb-0">Some more videos & images</h6>
	</div>
	<div class="w-100">
		<video class="w-100 object-fit-cover rounded-2 mb-5" muted autoplay playsinline loop aria-label="Brandseal video">
			<source src="imgs/builder/projects/brandseal-singatures-video.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		<video class="w-100 object-fit-cover rounded-2" muted autoplay playsinline loop aria-label="Brandseal video">
			<source src="imgs/builder/projects/brandseal-singatures-video.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
`;

var mindspaceContent = `
	<h6 class="fs-09 text-muted">Nov 2014 - Jul 2017</h6>
	<h3 class="mb-4">Founding member Mindspace</h3>
	<img class="img-fluid rounded-2 mb-4" src="imgs/communities/mindspace_group_image.webp" alt="Mindspace team">
	<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-2 p-4 mb-4">
		<div>
			<h6 class="fs-09">Roles</h6>
			<ul class="fs-09 ps-3 mb-0">
				<li>Founding member</li>
			</ul>
		</div>
		<div>
			<h6 class="fs-09">Website</h6>
			<div class="d-block">
				<a href="https://mindspace.gr" target="_blank"><i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">mindspace.gr</span></a>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Tags</h6>
			<div class="d-flex flex-wrap gap-2">
				<span class="sidebar-tag">Community</span>
				<span class="sidebar-tag">Education</span>
				<span class="sidebar-tag">Nonprofit</span>
			</div>
		</div>
	</div>
	<p>Mindspace is a nonprofit that cultivates the entrepreneurial mentality in higher education students and young alumni. As a founding member, I helped shape its programs and community.</p>
`;

var thinkbizContent = `
	<h6 class="fs-09 text-muted">Nov 2012 - Jun 2015</h6>
	<h3 class="mb-4">Founding member ThinkBiz</h3>
	<img class="img-fluid rounded-2 mb-4" src="imgs/communities/Thinkbiz_group_image.jpg" alt="ThinkBiz team">
	<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-2 p-4 mb-4">
		<div>
			<h6 class="fs-09">Roles</h6>
			<ul class="fs-09 ps-3 mb-0">
				<li>"Knowledge Base" project team member (2012-2013)</li>
				<li>"Day in a Startup" Project Team Lead (2013-2014)</li>
				<li>HR member (2013-2015)</li>
			</ul>
		</div>
		<div>
			<h6 class="fs-09">Website</h6>
			<div class="d-block">
				<a href="https://thinkbiz.gr" target="_blank"><i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">thinkbiz.gr</span></a>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Tags</h6>
			<div class="d-flex flex-wrap gap-2">
				<span class="sidebar-tag">Community</span>
				<span class="sidebar-tag">Entrepreneurship</span>
				<span class="sidebar-tag">Education</span>
			</div>
		</div>
	</div>
	<p>ThinkBiz is the first Student Entrepreneurship Club of Greece. As a founding member I helped build the "Knowledge Base" and led "Day in a Startup" and HR for a team of 40+.</p>
`;

window.webProjectsModalContent = [
	leadingPositionsContent,
	mindspaceContent,
	thinkbizContent
];