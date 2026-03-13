console.log("Script started");

// below lined will not work if js is added in head section as DOM is not yet ready
// let btn = document.getElementById("loadDataBtn");
// btn.onclick = loadTodos;

function bindings() {
  console.log("Doing Bindings");
  //   let btn = document.getElementById("loadDataBtn");
  //   btn.onclick = loadTodos;
  $("#loadDataBtn").on("click", loadTodos);

  //below binding will not work as these tags are not present at page load
  $(".btn-danger").on("click", delClicked);

  $("#tblTodosBody").on("click", ".btn-danger", delClicked);
}
// call bindings function on page load
// window.onload = bindings;

$(bindings);
$(loadTodos);
function loadTodos() {
  console.log("loadTodos Called");
  console.log("Ajax Call Sending");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: toDoReceived,
  });
  console.log("request sent");
}

function toDoReceived(response) {
  console.log("Response Received");
  $("#tblTodosBody").empty();
  for (let index = 0; index < response.length; index++) {
    const todo = response[index];
    // $("#tblTodosBody").append("<tr><td>" + todo.id + "</td></tr>");
    $("#tblTodosBody").append(`<tr>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.completed}</td>
        <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Del</button>
        </td>
        </tr>`);
  }
  console.log(response);
}

function delClicked() {
  console.log("Delete Clicked");
  $(this).closest("tr").fadeOut();
}
console.log("Script Ended");
