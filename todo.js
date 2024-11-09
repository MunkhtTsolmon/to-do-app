const taskName = document.getElementById("taskName");
const statusSelect = document.getElementById("statusSelect");
const taskPopup = document.getElementById("taskPopup");
const taskContainerMain = document.getElementById("taskContainerMain");
function popup() {
  taskPopup.style.display = "block";
}
function closePopup() {
  taskPopup.style.display = "none";
}
function addTask() {
  if (taskName.value === "") {
    alert("You must write your task");
  } else {
    let taskContainer = document.createElement("div");

    let h3Name = document.createElement("h3");
    h3Name.innerHTML = taskName.value;
    taskContainer.innerHTML(h3Name);
    let h3Status = document.createElement("h3");
    h3Status.innerHTML = statusSelect.value;
    taskContainer.innerHTML(h3Status);
    taskContainerMain.appendChild = taskContainer;
  }
}
