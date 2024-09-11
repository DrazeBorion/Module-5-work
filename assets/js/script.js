// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
        return Math.random().toString(36).substring(2, 9);
      }
      const uniqueId = generateTaskId();
      console.log(uniqueId);

// Todo: create a function to create a task card
function createTaskCard(task) {
const card = document.createElement('div');
card.className = 'taskCard';

return card;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const taskContainer = document.getElementById('card');
    let draggedElement = null;

    function onDragStart(event) {
        draggedElement = event.target;
        event.dataTransfer.setData('text/plain', draggedElement.innerHTML);
    }
    function onDragOver(event) {
        event.preventDefault();
    }
    function onDrop(event) {
        event.preventDefault();
        if (draggedElement) {
            const target = event.target;
            if (target.classList.contains('card')) {
                taskContainer.insertBefore(draggedElement, target.nextSibling);
            }
            draggedElement = null;
        }
    }

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
