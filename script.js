document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Create an array to store tasks
    const tasks = [];

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${task}</span>
                <button class="delete" data-index="${index}">Delete</button>
                <button class="edit" data-index="${index}">Edit</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // Event listener for adding a task
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push(taskText);
            renderTasks();
            taskInput.value = "";
        }
    });

    // Event delegation for deleting and editing tasks
    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete")) {
            const index = e.target.dataset.index;
            tasks.splice(index, 1);
            renderTasks();
        } else if (e.target.classList.contains("edit")) {
            const index = e.target.dataset.index;
            const newText = prompt("Edit task:", tasks[index]);
            if (newText !== null) {
                tasks[index] = newText;
                renderTasks();
            }
        }
    });

    // Initial rendering
    renderTasks();
});
