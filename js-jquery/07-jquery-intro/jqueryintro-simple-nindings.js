console.log("script started");
function showPara() {
  console.log("Button clicked, showing paragraph...");
  let para = document.getElementById("para");
  para.style.display = "block";
}
//below two lines are legitimate but not recommended. This is a direct assignment to the onclick property, which will overwrite any existing handler and does not allow multiple handlers for the same event. It's generally better to use addEventListener for more flexibility and maintainability.
//if this script is added in head section then btn would be null at the time of assignment, so this code should be placed after the DOM elements are loaded, such as at the end of the body or inside a window.onload handler.
// let btn = document.getElementById("mybtn");
// btn.onclick = showPara;
function bindings() {
  console.log("Running bindings function...");
  let btn = document.getElementById("mybtn");
  btn.onclick = showPara;
}
//below line is just assigning bindings a function to run when the window's load event fires, which means the DOM is fully loaded and all elements are available for manipulation. This is a common pattern to ensure that your script runs after the page is ready, preventing issues with trying to access elements that haven't been loaded yet.
window.onload = bindings;
console.log("script finished");
