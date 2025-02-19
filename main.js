document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    // 追加ボタンの処理
    addButton.addEventListener("click", () => {
        const task = input.value.trim();
        if (task === "") {
            alert("タスクを入力してください");
            return;
        }

        // 新しいリストアイテムを作成
        const li = document.createElement("li");

        // タスクテキストを格納する要素
        const taskSpan = document.createElement("span");
        taskSpan.textContent = task;

        // 削除ボタンを取得し、リストに追加
        const taskDeleteButton = document.createElement("button");
        taskDeleteButton.textContent = "削除";
        taskDeleteButton.classList.add("delete-task-btn");  // クラスを追加
        taskDeleteButton.style.marginLeft = "10px";

        // 削除ボタンのクリックイベント
        taskDeleteButton.addEventListener("click", () => {
            li.remove();
        });
        
        // 要素をリストに追加
        li.appendChild(taskSpan);
        li.appendChild(taskDeleteButton);
        todoList.appendChild(li);

        input.value = "";
    })
})