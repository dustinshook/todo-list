import './assets/styles/style.css';
import { toDo } from './components/toDo/toDo.js';
import { projects } from './components/projects/projects.js';
import { renderHeader } from './components/header/header.js';

function test() {
    document.getElementById('content').appendChild(renderHeader('2Do', 'Projects', 'Settings'));
}

const proj = projects();

proj.create('Default Project', toDo());

console.log(proj.get());

test();