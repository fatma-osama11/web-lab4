let tasks: string[] = [];

const input = document.getElementById("todoInput") as HTMLInputElement;

const button = document.getElementById("addButton") as HTMLButtonElement;

const taskList = document.querySelector(".div3") as HTMLDivElement;


button.addEventListener("click", addTask);


function addTask(): void {

    const inputValue = input.value;

    tasks.push(inputValue);

    input.value = "";

    render();
}


function render(): void {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        const p = document.createElement("p");

        p.textContent = tasks[i];

        taskList.appendChild(p);
    }
}