$(function () {
  //Dom is Ready
  $("#mybtn").on("click", btnClicked);
  // do not bind click handlers to the <li> elements directly, because they will be added dynamically after the page loads
  //   $("#todos li").on("click", deleteTodo);

  // Instead, use event delegation by binding a single click handler to the parent <ul> element. This will handle clicks on all current and future <li> children.
  $("#todos").on("click", "li", deleteTodo);
});

function btnClicked() {
  var todoText = $("#textbox").val();
  $("#todos").append("<li>" + todoText + "</li>");
  $("#textbox").val("");
}

function deleteTodo() {
  // 'this' is the clicked element, which is the <li> in this case
  $(this).remove();
}
