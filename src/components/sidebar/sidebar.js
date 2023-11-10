import './sidebar.css';

const renderSidebar = (...projects) => {

	const sidebar = document.createElement('div');
	sidebar.id = 'sidebar';

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

	const sidebarProjectsUl = document.createElement('ul');
	sidebarProjectsUl.classList.add('sidebar-projects');

	projects.forEach((project) => {
		const sidebarProjectsLi = document.createElement('li');
		sidebarProjectsLi.classList.add('sidebar-project');
		sidebarProjectsLi.textContent = project;
		sidebarProjectsUl.appendChild(sidebarProjectsLi);
	});

	sidebarProjects.appendChild(sidebarProjectsUl);
	sidebarWrapper.appendChild(sidebarProjects);

	sidebar.appendChild(sidebarWrapper);

	return sidebar;
};

export { renderSidebar };