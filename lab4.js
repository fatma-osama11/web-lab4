"use strict";
let tasks = [];
const input = document.getElementById("todoInput");
const button = document.getElementById("addButton");
const taskList = document.querySelector(".div3");
button.addEventListener("click", addTask);
function addTask() {
    const inputValue = input.value;
    tasks.push(inputValue);
    input.value = "";
    render();
}
function render() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const p = document.createElement("p");
        p.textContent = tasks[i];
        taskList.appendChild(p);
    }
}
