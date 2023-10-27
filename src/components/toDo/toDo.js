import './toDo.css';

const toDo = () => {

    let title = 'Task Name';
    const setTitle = newTitle => title = newTitle;
    const getTitle = () => title;

    let description = 'Description';
    const setDescription = newDescription => description = newDescription;
    const getDescription = () => description;

    let dueDate = new Date();
    const setDueDate = newDueDate => dueDate = newDueDate;
    const getDueDate = () => dueDate;
    
    let priority = 'Priority';
    const setPriority = newPriority => priority = newPriority;
    const getPriority = () => priority;

    let notes = 'Notes';
    const setNotes = newNotes => notes = newNotes;
    const getNotes = () => notes;

    let checkList = [];
    const addCheckListItem = item => checkList.push(item);
    const removeCheckListItem = item => checkList.splice(checkList.indexOf(item), 1);
    const getCheckList = () => checkList;

    let completed = false;
    const toggleCompleted = () => completed = !completed;
    const getCompleted = () => completed;

    return {
        setTitle,
        getTitle,
        setDescription,
        getDescription,
        setDueDate,
        getDueDate,
        setPriority,
        getPriority,
        setNotes,
        getNotes,
        addCheckListItem,
        removeCheckListItem,
        getCheckList,
        toggleCompleted,
        getCompleted
    };


};

export { toDo }