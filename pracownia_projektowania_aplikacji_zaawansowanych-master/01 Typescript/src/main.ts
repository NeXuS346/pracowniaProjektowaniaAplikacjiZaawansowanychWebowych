import TodoEntry from "./TodoEntry.js";

const addButton: HTMLButtonElement|null = document.querySelector("#btnDodaj");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInput");
const todoContainer: HTMLDivElement = document.querySelector("#todoContainer")!;


function buildList() {
  todoContainer.innerHTML = "";
  arrayOfTodos.forEach(element => {
    todoContainer.innerHTML += element.render(); 
  });
}


let arrayOfTodos: TodoEntry[] = [];

if (addButton && inputTextField && todoContainer) {
  
  addButton?.addEventListener('click', (e) => {
    
    arrayOfTodos.push(
        new TodoEntry(arrayOfTodos.length, inputTextField?.value)
    );
    inputTextField.value = "";
    buildList();
  })
}