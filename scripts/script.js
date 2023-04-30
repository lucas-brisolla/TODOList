var task = document.getElementsByClassName("tasks")

var add_task = document.getElementsByClassName("add-task-button")
add_task.addEventListener("click", button)

function button() {
  document.body.innerHTML = "<h1>Tarefas</h1>"
}
