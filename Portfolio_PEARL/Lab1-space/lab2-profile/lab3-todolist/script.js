// 1. Select DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// 3. Event Listener for the "Add" button
addBtn.addEventListener('click', addTask);

// 4. Event Listener for "Enter" key in input field
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// 5. Function to Add a Task
function addTask() {
    // Get the value from the input field
    const taskText = taskInput.value.trim();

    // Validation: Ensure the input isn't empty
    if (taskText === '') {
        // Add shake animation to input
        taskInput.classList.add('shake');
        setTimeout(() => taskInput.classList.remove('shake'), 500);
        return;
    }

    // Create the task
    createTaskElement(taskText, false);

    // Save to localStorage
    saveTask(taskText, false);

    // Clear the input field
    taskInput.value = '';
}

// 6. Function to Create Task Element
function createTaskElement(taskText, completed) {
    // Create a new list item (li)
    const li = document.createElement('li');

    if (completed) {
        li.classList.add('completed');
    }

    // Set the inner HTML of the li
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Toggle completed status when clicking the task
    li.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') return;
        li.classList.toggle('completed');
        updateTaskStatus(taskText);
    });

    // Delete button functionality
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        li.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            taskList.removeChild(li);
            deleteTask(taskText);
        }, 300);
    });

    // Append the new li to the list
    taskList.appendChild(li);
}

// 7. LocalStorage Functions
function saveTask(taskText, completed) {
    let tasks = getTasks();
    tasks.push({ text: taskText, completed: completed });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    let tasks = getTasks();
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

function updateTaskStatus(taskText) {
    let tasks = getTasks();
    tasks = tasks.map(task => {
        if (task.text === taskText) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(taskText) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 8. Add shake animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    .shake {
        animation: shake 0.3s ease;
    }

    @keyframes slideOut {
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);