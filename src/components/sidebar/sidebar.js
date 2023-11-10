import './sidebar.css';

const renderSidebar = (...projects) => {

	const sidebar = document.createElement('div');
	sidebar.id = 'sidebar';
	sidebar.classList.add('open');

	const sidebarWrapper = document.createElement('div');
	sidebarWrapper.id = 'sidebar-wrapper';

	const sidebarNav = document.createElement('nav');
	sidebarNav.id = 'sidebar-nav';

	const sidebarUl = document.createElement('ul');
	sidebarUl.classList.add('sidebar-items');

	['Home', 'Today', 'Upcoming'].forEach((item) => {
		const sidebarLi = document.createElement('li');
		sidebarLi.classList.add('sidebar-item');
		sidebarLi.textContent = item;
		sidebarUl.appendChild(sidebarLi);
	});

	sidebarNav.appendChild(sidebarUl);
	sidebarWrapper.appendChild(sidebarNav);

	const sidebarProjects = document.createElement('div');
	sidebarProjects.id = 'sidebar-projects';

	const sidebarProjectsHeader = document.createElement('div');
	sidebarProjectsHeader.id = 'sidebar-projects-header';

	const sidebarProjectsHeaderTitle = document.createElement('span');
	sidebarProjectsHeaderTitle.textContent = 'Projects';
	sidebarProjectsHeader.appendChild(sidebarProjectsHeaderTitle);

	const sidebarProjectsHeaderBtn = document.createElement('div');
	sidebarProjectsHeaderBtn.id = 'sidebar-projects-header-btn';
	sidebarProjectsHeaderBtn.classList.add('fas', 'fa-plus');
	sidebarProjectsHeader.appendChild(sidebarProjectsHeaderBtn);

	const sidebarProjectsUl = document.createElement('ul');

	projects.forEach((project) => {
		const sidebarProjectsLi = document.createElement('li');
		sidebarProjectsLi.classList.add('sidebar-project', 'low');
		sidebarProjectsLi.textContent = project;
		sidebarProjectsUl.appendChild(sidebarProjectsLi);
	});

	sidebarProjects.appendChild(sidebarProjectsHeader);
	sidebarProjects.appendChild(sidebarProjectsUl);
	sidebarWrapper.appendChild(sidebarProjects);

	sidebar.appendChild(sidebarWrapper);

	return sidebar;
};

export { renderSidebar };