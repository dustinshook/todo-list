import './assets/styles/style.css';
import { toDo } from './components/toDo/toDo.js';
import { projects } from './components/projects/projects.js';
import { renderHeader } from './components/header/header.js';
import { renderSidebar } from './components/sidebar/sidebar.js';

function test() {
    const content = document.getElementById('content');

    const header = renderHeader('Projects', 'Settings');
    const sidebarToggle = header.querySelector('#menu-btn');
    const sidebar = renderSidebar('Default Project', 'Project 1', 'Project 2');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    content.appendChild(header);

    content.appendChild(sidebar);
    
}

const proj = projects();

proj.create('Default Project', toDo());

console.log(proj.get());

test();