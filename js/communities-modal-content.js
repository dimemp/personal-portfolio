/**
 * Modal content for community project detail (injected into #js-project-modal-content).
 * Index matches data-project on each row.
 */
const variousCommunitiesContent = `
	<div class="project-modal-band band band-rule position-relative overflow-visible pb-0">

			<span class="rule-left"></span>
			<span class="rule-center"></span>
			<span class="rule-right"></span>
			<span class="band-dot band-dot--start position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="band-dot band-dot--end position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>

			<div class="px-2 px-lg-4 my-5">
				<h6 class="fs-09 text-muted">Mar 2019 - Present</h6>
				<h3 class="mb-4">Fellow at Sigma Squared</h3>
			</div>

			<div class="w-100 position-relative p-2">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<img class="w-100 img-fluid rounded-3" src="assets/communities/sigma_squared_group.png" alt="Sigma Squared team">
			</div>

			<div class="position-relative p-2">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-3 p-4">
					<div>
						<h6 class="fs-09">Roles</h6>
						<ul class="fs-09 ps-3 mb-0">
							<li>Fellow (2025-Present)</li>
							<li>Greek chapter executive (2019-2025)</li>
						</ul>
					</div>
					<div>
						<h6 class="fs-09">Website</h6>
						<div class="d-block">
							<a href="https://www.sigma-squared.org/" target="_blank">
								<i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">sigma-squared.org</span>
							</a>
						</div>
					</div>
					<div>
						<h6 class="fs-09">Tags</h6>
						<div class="d-flex flex-wrap gap-2">
							<span class="sidebar-tag">Community</span>
							<span class="sidebar-tag">Startup</span>
							<span class="sidebar-tag">Education</span>
							<span class="sidebar-tag">Networking</span>
						</div>
					</div>
				</div>
			</div>

			<div class="position-relative">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<div class="col-12 col-xl-7 py-7 mx-auto">
					<h6 class="mb-3">Description</h6>
					<p class="mb-0">I served as the Greek Chapter Leader for Sigma Squared for six years, managing a local community of impact-driven founders under the age of 26. I currently serve as a Fellow within the global network of over 1,000 members, where the focus is on connecting ambitious entrepreneurs who are building companies in traditionally "broken" or inefficient industries.</p>
				</div>
			</div>

		</div>

		<div class="project-modal-band band band-rule position-relative overflow-visible">

			<span class="rule-left"></span>
			<span class="rule-center"></span>
			<span class="rule-right"></span>
			<span class="band-dot band-dot--start position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="band-dot band-dot--end position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>

			<div class="px-2 px-lg-4 my-5">
				<h6 class="fs-09 text-muted">Feb 2023 - Feb 2026</h6>
				<h3 class="mb-4">Founding board member of La French Tech Athens</h3>
			</div>

			<div class="w-100 position-relative p-2">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<img class="w-100 img-fluid rounded-3" src="assets/communities/french_tech_athens_group_image.webp" alt="La French Tech Athens team">
			</div>

			<div class="position-relative p-2">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-3 p-4">
					<div>
						<h6 class="fs-09">Website</h6>
						<div class="d-block">
							<a href="https://www.lafrenchtechathens.com/" target="_blank">
								<i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">lafrenchtechathens.com</span>
							</a>
						</div>
					</div>
					<div>
						<h6 class="fs-09">Tags</h6>
						<div class="d-flex flex-wrap gap-2">
							<span class="sidebar-tag">Community</span>
							<span class="sidebar-tag">Startup</span>
							<span class="sidebar-tag">France</span>
							<span class="sidebar-tag">Networking</span>
						</div>
					</div>
				</div>
			</div>

			<div class="position-relative">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<div class="col-12 col-xl-7 py-7 mx-auto">
					<h6 class="mb-3">Description</h6>
					<p class="mb-0">As a founding board member of the Athens chapter, I work to bridge the French and Greek tech ecosystems. We provide a platform for entrepreneurs, investors, and public leaders to connect, leveraging a global network of 63 communities to help startups in both countries access new markets and resources.</p>
				</div>
			</div>

		</div>

		<div class="project-modal-band band band-rule position-relative overflow-visible">

			<span class="rule-left"></span>
			<span class="rule-center"></span>
			<span class="rule-right"></span>
			<span class="band-dot band-dot--start position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="band-dot band-dot--end position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>

			<div class="px-2 px-lg-4 my-5">
				<h6 class="fs-09 text-muted">Feb 2023 - Feb 2026</h6>
				<h3 class="mb-4">Co-initiator Startup Universe</h3>
			</div>

			<div class="w-100 position-relative p-2">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<img class="w-100 img-fluid rounded-3" src="assets/communities/startup_universe_impact.png" alt="Startup Universe impact image">
			</div>

			<div class="position-relative p-2">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-3 p-4">
					<div>
						<h6 class="fs-09">Website</h6>
						<div class="d-block">
							<a href="https://thefounderhood.com/organization/profile/Startup%20Universe?tab=programs" target="_blank">
								<i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">thestartupuniverse.org</span>
							</a>
						</div>
					</div>
					<div>
						<h6 class="fs-09">Tags</h6>
						<div class="d-flex flex-wrap gap-2">
							<span class="sidebar-tag">Community</span>
							<span class="sidebar-tag">Startup</span>
							<span class="sidebar-tag">Global</span>
							<span class="sidebar-tag">Networking</span>
						</div>
					</div>
				</div>
			</div>

			<div class="position-relative">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<div class="col-12 col-xl-7 py-7 mx-auto">
					<h6 class="mb-3">Description</h6>
					<p class="mb-0">I helped organize this digital program to support early-stage founders globally, reaching more than 2,500 participants across 40+ countries. The project was built to give founders in emerging or immature ecosystems a structured path to find the mentors and investors they need to scale their companies.</p>
				</div>
			</div>

		</div>

		<div class="project-modal-band band band-rule position-relative overflow-visible">

			<span class="rule-left"></span>
			<span class="rule-center"></span>
			<span class="rule-right"></span>
			<span class="band-dot band-dot--start position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="band-dot band-dot--end position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>

			<div class="px-2 px-lg-4 my-5">
				<h6 class="fs-09 text-muted">Feb 2023 - Feb 2026</h6>
				<h3 class="mb-4">GreekTech ambassador in Greece</h3>
			</div>

			<div class="w-100 position-relative p-2">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<img class="w-100 img-fluid rounded-3" src="assets/communities/greektech_group.jpg" alt="GreekTech team">
			</div>

			<div class="position-relative p-2">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-3 p-4">
					<div>
						<h6 class="fs-09">Website</h6>
						<div class="d-block">
							<a href="https://www.instagram.com/greek_tech" target="_blank">
								<i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">instagram.com/greek_tech</span>
							</a>
						</div>
					</div>
					<div>
						<h6 class="fs-09">Tags</h6>
						<div class="d-flex flex-wrap gap-2">
							<span class="sidebar-tag">Community</span>
							<span class="sidebar-tag">Startup</span>
							<span class="sidebar-tag">Greece</span>
							<span class="sidebar-tag">Networking</span>
						</div>
					</div>
				</div>
			</div>

			<div class="position-relative">
				<span class="tech-logos-box-rule"></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
				<div class="col-12 col-xl-7 py-7 mx-auto">
					<h6 class="mb-3">Description</h6>
					<p class="mb-0">I served as an Ambassador in Greece for Greektech, a community originally founded in New York to support the Greek & Cypriot tech ecosystems. My role was focused on high-level strategy and ecosystem connectivity. I acted as a bridge between the organization and the local landscape, identifying and facilitating connections with potential donors, strategic partners, and high-growth startups. By leveraging my network, I helped the organization navigate the Greek market and ensure that their initiatives are aligned with the actual needs of founders on the ground.</p>
				</div>
			</div>

		</div>
`;

const mindspaceContent = `
	<div class="project-modal-band band band-rule position-relative overflow-visible">

		<span class="rule-left"></span>
		<span class="rule-center"></span>
		<span class="rule-right"></span>
		<span class="band-dot band-dot--start position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
		<span class="band-dot band-dot--end position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>

		<div class="px-2 px-lg-4 my-5">
			<h6 class="fs-09 text-muted">Nov 2014 - Jul 2017</h6>
			<h3 class="mb-4">Founding member Mindspace</h3>
		</div>

		<div class="w-100 position-relative p-2">
			<span class="tech-logos-box-rule"></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<img class="w-100 img-fluid rounded-3" src="assets/communities/mindspace_group_image.webp" alt="Mindspace team">
		</div>

		<div class="position-relative p-2">
			<span class="tech-logos-box-rule"></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-3 p-4">
				<div>
					<h6 class="fs-09">Roles</h6>
					<ul class="fs-09 ps-3 mb-0">
						<li>Member board of directors (2014-2016)</li>
						<li>Chairman (2016-2017)</li>
					</ul>
				</div>
				<div>
					<h6 class="fs-09">Website</h6>
					<div class="d-block">
						<a href="https://mindspace.gr" target="_blank">
							<i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">mindspace.gr</span>
						</a>
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
		</div>

		<div class="position-relative">
			<span class="tech-logos-box-rule"></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<div class="col-12 col-xl-7 py-7 mx-auto">
				<h6 class="mb-3">Description</h6>
				<p>I was one of the founding members of Mindspace, staying with the organization for nearly three years as it grew from a small student initiative at NTUA to a nationwide non-profit. In the early stages, I served as a Founding Board Member and PR Team Leader, where I defined the brand’s strategy and launched programs like "How to start a startup" at the National Technical University of Athens.</p>
				<p>I also established the AI Club to provide a space for students to explore emerging technologies beyond their standard curriculum. My focus during these first two years was on creating a professional structure that could survive the high turnover of a student-run organization. In 2016, I stepped into the role of Chairman. During my tenure, I led the general strategy and oversaw a team of 40 active members across chapters in two cities.</p>
				<p class="mb-0">I was responsible for fundraising over €50,000 to scale our core programs, including the "Mindspace Challenge" and the "Mindspace Trip" to the US. By the end of my term, we had built a network of over 80 pre-startup tech teams, providing them with the mentorship and international exposure needed to move their technology from the lab to the market. This period was defined by shifting the culture from "student projects" to "impact-driven startups," a transition that helped launch several companies that are still active in the Greek ecosystem today.</p>
			</div>
		</div>

	</div>
`;

const thinkbizContent = `
	<div class="project-modal-band band band-rule position-relative overflow-visible">

		<span class="rule-left"></span>
		<span class="rule-center"></span>
		<span class="rule-right"></span>
		<span class="band-dot band-dot--start position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
		<span class="band-dot band-dot--end position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>

		<div class="px-2 px-lg-4 my-5">
			<h6 class="fs-09 text-muted">Nov 2012 - Jun 2015</h6>
			<h3 class="mb-4">Founding member ThinkBiz</h3>
		</div>

		<div class="w-100 position-relative p-2">
			<span class="tech-logos-box-rule"></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<img class="w-100 img-fluid rounded-3" src="assets/communities/Thinkbiz_group_image.jpg" alt="ThinkBiz team">
		</div>

		<div class="position-relative p-2">
			<span class="tech-logos-box-rule"></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<div class="d-flex flex-row flex-wrap gap-4 bg-white border rounded-3 p-4">
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
						<a href="https://thinkbiz.gr" target="_blank">
							<i class="bi bi-arrow-up-right fs-0875 me-2"></i><span class="fs-09">thinkbiz.gr</span>
						</a>
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
		</div>

		<div class="position-relative">
			<span class="tech-logos-box-rule"></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--start d-block position-absolute top-0 start-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<span class="tech-logos-box-dot tech-logos-box-dot--end d-block position-absolute top-0 end-0 z-2"><span class="dot-ring d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"><span class="dot-fill"></span></span></span>
			<div class="col-12 col-xl-7 py-7 mx-auto">
				<h6 class="mb-3">Description</h6>
				<p>I joined ThinkBiz as a founding member in 2012, helping to establish the first student entrepreneurship club in Greece at the Athens University of Economics and Business (AUEB). During my first eight months, I focused on building the "Knowledge Base" project—a repository of resources for students—and organized our first major pitching event, which drew over 60 participants.</p>
				<p>These early efforts were aimed at creating a structured environment where students could move beyond theory and begin testing business ideas. Over the next two years, I transitioned into an HR role, where I managed the internal culture and organizational structure for a team of over 40 members. Simultaneously, as the Project Team Lead for "Day in a Startup," I coordinated and executed five site visits to prominent Greek tech companies.</p>
				<p class="mb-0">These visits allowed 40+ students to engage directly with founders and see the internal operations of a working startup. My work at ThinkBiz was defined by these practical initiatives, ensuring that the organization functioned efficiently and provided real-world value to its members through direct access to the local tech ecosystem.</p>
			</div>
		</div>

	</div>
`;

// Content for each project row (data-project="0", "1", "2")
window.communitiesModalContent = [
	variousCommunitiesContent,
	mindspaceContent,
	thinkbizContent
];
