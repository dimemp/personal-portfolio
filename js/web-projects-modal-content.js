/**
 * Modal content for web project detail (injected into #js-project-modal-content).
 * Used on builder.html. Index matches data-project on each row.
 */

var leadingPositionsContent = `
	<h6 class="fs-09 text-muted">Mar 2019 - Present</h6>
	<h3 class="mb-4">Leading positions in various tech startup communities</h3>
	<img class="img-fluid rounded-2 mb-4" src="imgs/communities/french_tech_athens_group_image.webp" alt="Tech communities">
	<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-2 p-4 mb-4">
		<div>
			<h6 class="fs-09">Roles</h6>
			<ul class="fs-09 ps-3 mb-0">
				<li>French Tech Athens – founding board member</li>
				<li>Sigma Squared – fellow & Greek chapter lead</li>
				<li>Startup Universe & GreekTech – community roles</li>
			</ul>
		</div>
		<div>
			<h6 class="fs-09">Links</h6>
			<div class="d-block">
				<a href="https://www.lafrenchtechathens.com/" target="_blank"><i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">La French Tech Athens</span></a><br>
				<a href="https://www.sigma-squared.org/" target="_blank"><i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">Sigma Squared</span></a>
			</div>
		</div>
		<div>
			<h6 class="fs-09">Tags</h6>
			<div class="d-flex flex-wrap gap-2">
				<span class="sidebar-tag">Community</span>
				<span class="sidebar-tag">Startups</span>
				<span class="sidebar-tag">Leadership</span>
			</div>
		</div>
	</div>
	<p>I've held various leadership positions in tech startup communities including French Tech Athens, Sigma Squared, Startup Universe, and GreekTech—focused on connecting founders and building local ecosystems.</p>
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