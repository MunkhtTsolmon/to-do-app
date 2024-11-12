const taskName = document.getElementById("taskName");
const statusSelect = document.getElementById("statusSelect");
const taskPopup = document.getElementById("taskPopup");
const taskContainerMain = document.getElementById("taskContainerMain");
const section1 = document.createElement("section");
const section2 = document.createElement("section");
const section3 = document.createElement("section");
const section4 = document.createElement("section");
taskContainerMain.appendChild(section1);
taskContainerMain.appendChild(section2);
taskContainerMain.appendChild(section3);
taskContainerMain.appendChild(section4);
const editTaskPopup = document.getElementById("editTaskPopup");
const sectionHeader1 = document.createElement("div");
const sectionHeader2 = document.createElement("div");
const sectionHeader3 = document.createElement("div");
const sectionHeader4 = document.createElement("div");
section1.appendChild(sectionHeader1);
section2.appendChild(sectionHeader2);
section3.appendChild(sectionHeader3);
section4.appendChild(sectionHeader4);
sectionHeader1.setAttribute("class", "sectionHeader");
sectionHeader2.setAttribute("class", "sectionHeader");
sectionHeader3.setAttribute("class", "sectionHeader");
sectionHeader4.setAttribute("class", "sectionHeader");
sectionHeader1.innerHTML = "<h1> To do</h1>";
sectionHeader2.innerHTML = "<h1> In progress</h1>";
sectionHeader3.innerHTML = "<h1> Done</h1>";
sectionHeader4.innerHTML = "<h1> Blocked</h1>";

function popup() {
  taskPopup.style.display = "block";
}
function closePopup() {
  taskPopup.style.display = "none";
}

function addTask() {
  let taskDiv = document.createElement("div");

  if (taskName.value === "") {
    alert("You must write your task");
    return;
  }

  let h3Name = document.createElement("h3");
  h3Name.innerHTML = taskName.value;
  
  let h3Status = document.createElement("h3");
  h3Status.innerHTML = statusSelect.value;

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.setAttribute("onclick", "editTask(this)");

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("onclick", "deleteTask(this)");

  taskDiv.appendChild(h3Name);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(removeButton);

  if (statusSelect.value === "to-do") {
    section1.appendChild(taskDiv);
  } else if (statusSelect.value === "in-progress") {
    section2.appendChild(taskDiv);
  } else if (statusSelect.value === "done") {
    section3.appendChild(taskDiv);
  } else if (statusSelect.value === "blocked") {
    section4.appendChild(taskDiv);
  }
}
function deleteTask(button) {
  button.parentElement.remove();
}

function editTask(button) {
  let taskDiv = button.parentElement;
  let taskName = prompt("Edit task name:", taskDiv.children[0].innerText);
  if (taskName) {
    taskDiv.children[0].innerText = taskName;
  }
}
