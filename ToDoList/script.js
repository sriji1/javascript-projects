document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submitbtn");
  let editMode = false;
  let editItem = null;
  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      if (editMode) {
        editItem.firstChild.textContent = todoText;
        todoSubmit.innerText = "Edit To Do";
        editMode = false;
        editItem = null;
      } else {
        //add to-dos
        addToDoItem(todoText);
        todoInput.value = "";
      }
    } else {
      alert("please enter some text");
    }
  });

  todoList.addEventListener("click", function (e) {
    console.log(e);
    const target = e.target;
    console.log(target);
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "❌") {
        todoItem.remove(); //delete to do
      } else if (target.innerText === "✏️") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit To Do";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });

  function addToDoItem(text) {
    console.log(text);
    const todoItem = document.createElement("li");
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    todoItem.innerHTML = `<span>${text}</span>`;
    editBtn.innerText = `✏️`;
    removeBtn.innerText = `❌`;
    todoItem.appendChild(editBtn);
    todoItem.appendChild(removeBtn);
    todoList.appendChild(todoItem);
    console.log(todoItem);
  }
});
