window.addEventListener("load", function() {
  const form = document.getElementById("new-task-form");
  form.addEventListener("submit", addTask);
});

function addTask(e) {
  e.preventDefault();

  // get the task text and clear input
  const input = document.getElementById("new-task");
  const task = input.value;
  input.value = "";

  // create and parse html for new list item
  let html = `<li>${task}</li>`;
  const el = document.createElement("div");
  el.innerHTML = html;
  const listItem = el.childNodes[0];
  listItem.addEventListener("click", completeTask);


  // append item to list
  const list = document.getElementById("task-list");
  list.append(listItem);

  updateTaskTotal(list.childNodes.length);
}

function completeTask(e) {
  const listItem = e.target;
  const list = document.getElementById("task-list");
  const completedList = document.getElementById("completed-list");
  listItem.remove();
  listItem.removeEventListener("click", completeTask);
  
  completedList.append(listItem);
  listItem.addEventListener("click", uncompleteTask);

  updateTaskTotal(list.childNodes.length);
}

function uncompleteTask(e) {
  const listItem = e.target;
  const list = document.getElementById("task-list");
  const completedList = document.getElementById("completed-list");
  listItem.remove();
  listItem.removeEventListener("click", uncompleteTask);
  
  list.append(listItem);
  listItem.addEventListener("click", completeTask);

  updateTaskTotal(list.childNodes.length);

}

function updateTaskTotal(total) {
  const totalContainer = document.getElementById("task-total");
  totalContainer.innerHTML = `- ${total} TODOs total`;
}