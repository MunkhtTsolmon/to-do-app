
//status update
function statusUpdate(index, status) {
  let item = todos[index];
  item.status = status;
  console.log("update", todos);
}
//change name
function changeName(index, name) {
  let newName = todos[index];
  newName.name = name;
  console.log("nameChange", todos);
}
// delete one item
// function deleteOne(index) {
//   todos.splice(index, 1);
//   console.log("delete", todos);
// }
// function deleteOne(index) {
//   let newTodos = todos;
//   for (let i = 0; i < newTodos.length; i++) {
//     if (newTodos[index] !== newTodos[i]) {
//       newTodos.push(newTodos[i]);
//     }
//   }
//   console.log(newTodos);
// }
function deleteOne(index) {
  let newTodos = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[index] !== todos[i]) {
      newTodos.push(todos[i]);
    }
  }
  console.log(newTodos);
}
// // running application
// addOne({ name: "Hool hiih", status: "Done" });
// addOne({ name: "Usand oroh", status: "to do" });
// addOne({ name: "JS sudlah", status: "to do" });
// statusUpdate(1, "Done");
// changeName(1, "Untah");
// deleteOne(2);