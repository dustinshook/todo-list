import './projects.css';

const projects = () => {
    const projects = [];

    const create = (title, toDo, ...args) => {
        projects.push({title, toDo, ...args});
    };

    const remove = project => projects.splice(projects.indexOf(project), 1);
    
    const getAll = () => projects;
    
    const getProject = (index) => projects[index];

    return {
        create,
        remove,
        getAll,
        getProject
    };
};

export { projects }