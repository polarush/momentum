function onPageLoaded() {

  const saveButton = document.querySelector("button.save");
  const clearButton = document.querySelector("button.clear");

  const input = document.querySelector("input[type='text']");
  const ul = document.querySelector("ul.todos");

  function listenDeleteTodo(element) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
    });
  }

  saveButton.addEventListener("click", () => {
    localStorage.setItem("todos", ul.innerHTML);
  });
  clearButton.addEventListener("click", () => {
      ul.innerHTML = "";
      localStorage.removeItem('todos', ul.innerHTML);
  });

  function onClickTodo(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
  }

  function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
        ul.innerHTML = data;
    }
    const deleteButtons = document.querySelectorAll("span.todo-trash");
    for (const button of deleteButtons) {
        listenDeleteTodo(button);
    }
  }

  function createTodo() {
      const li = document.createElement("li");
      const textSpan = document.createElement("span");
      textSpan.classList.add("todo-text");
      const newTodo = input.value;
      textSpan.append(newTodo);

      const deleteBtn = document.createElement("span");
      deleteBtn.classList.add("todo-trash");
      const icon = document.createElement("i");
      icon.classList.add("fas", "fa-trash-alt");
      deleteBtn.appendChild(icon);

      ul.appendChild(li).append(textSpan, deleteBtn);
      input.value = "";
      listenDeleteTodo(deleteBtn);
  }

  input.addEventListener("keypress", (keyPressed) => {
      const keyEnter = 13;
      if (keyPressed.which == keyEnter) {
          createTodo();
      }
  });
  ul.addEventListener("click", onClickTodo);

  loadTodos();

}

document.addEventListener("DOMContentLoaded", onPageLoaded);



dragElement(document.getElementById(("todo")));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
