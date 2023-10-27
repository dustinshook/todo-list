import './assets/styles/style.css';
import { toDo } from './components/toDo/toDo.js';
import { projects } from './components/projects/projects.js';

function test() {
    document.getElementById('content').innerHTML = 'ToDo List';
}

const proj = projects();

proj.create('Default Project', toDo());

console.log(proj.get());

test();