// 1. Select DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Event Listener for the "Add" button
addBtn.addEventListener('click', addTask);

// 3. Event Listener for "Enter" key in input field
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// 4. Function to Add a Task
function addTask() {

    // Get the value from the input field
    const taskText = taskInput.value;

    // Validation: Ensure the input isn't empty
    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');

    // Set the inner HTML of the li
    // Wrap text in span so we can toggle completion
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Toggle completed status when clicking the task (except delete button)
    li.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') return;
        li.classList.toggle('completed');
    });

    // Delete button functionality
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    // Append the new li to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}