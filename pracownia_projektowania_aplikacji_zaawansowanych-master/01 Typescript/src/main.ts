

const addButton: HTMLButtonElement|null = document.querySelector("#btnDodaj");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInput");
const todoContainer: HTMLDivElement = document.querySelector("#todoContainer")!;


function buildList() {
  todoContainer.innerHTML = "";
  arrayOfTodos.forEach(element => {
    let container = document.createElement("div")

    let title = document.createElement('h3')
    let id = document.createElement('p')
    let button = document.createElement('button')

    title.textContent = "Tytul: " + element.title;
    id.textContent = "ID: " + element.id;
    id.classList.add("small")
    button.textContent = "Delete"
    button.classList.add("btn", "btn-danger")
    
    container.appendChild(id);
    container.appendChild(title);
    container.appendChild(button);  
    container.classList.add("card", "card-body", "mt-1", "shadow", "mx-2")

    todoContainer?.appendChild(container);
  });
}

type ToDo = {
  title: string,
  id: number,
  desc?: string,
  isDone?: boolean
}

let arrayOfTodos: ToDo[] = [];

if (addButton && inputTextField && todoContainer) {
  addButton?.addEventListener('click', (e) => {
    e.preventDefault();

    const text = inputTextField.value;
    
    arrayOfTodos.push({title: text, id: arrayOfTodos.length});
    inputTextField.value = '';

    buildList();
  })
}