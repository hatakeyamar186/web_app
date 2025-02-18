document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton =document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", () => {
        const task = input.value.trim();
        todoList.textContent = task;
        todoList.addEventListener("click", () => {
            todoList.remove();
        });

        todoList.appendChild(li);
        input.value = "";
    })
})