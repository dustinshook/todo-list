import './assets/styles/style.css';
import { toDo } from './components/toDo/toDo.js';
import { projects } from './components/projects/projects.js';
import { renderHeader } from './components/header/header.js';
import { renderSidebar } from './components/sidebar/sidebar.js';
import { renderPage } from './components/page/page.js';

function test() {
    const content = document.getElementById('content');

    const header = renderHeader('Projects', 'Settings');
    const sidebarToggle = header.querySelector('#menu-btn');
    const sidebar = renderSidebar('Default Project', 'Project 1', 'Project 2');
    const page = renderPage();

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        page.classList.toggle('open');
    });

    content.appendChild(header);

    content.appendChild(sidebar);

    content.appendChild(page);
    
}

const proj = projects();

proj.create('Default Project', toDo());


console.log(proj.getAll());

test();