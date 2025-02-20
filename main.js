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

        // 完了ボタンを作成
        const completeButton = document.createElement("button");
        completeButton.textContent = "完了";
        completeButton.classList.add("complete-task-btn");
        completeButton.style.marginLeft = "10px";

        // 完了のクリックイベント
        completeButton.addEventListener("click", () => {
            taskSpan.classList.toggle("completed");  // 斜線を引く/戻す
        })

        // 削除ボタンを作成
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
        li.appendChild(completeButton);
        li.appendChild(taskDeleteButton);
        todoList.appendChild(li);

        input.value = "";
    })
})