document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton =document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", () => {
        const task = input.value.trim();
        if (task === "") {
            alert("タスクを入力してください");
            return;
        }

        const li = document.createElement("li");
        li.innerText = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.style.marginLeft = "10px";

        deleteButton.addEventListener("click", () => {
            li.remove();
        });
        
        li.appendChild(deleteButton);

        todoList.appendChild(li);

        input.value = "";
    })
})