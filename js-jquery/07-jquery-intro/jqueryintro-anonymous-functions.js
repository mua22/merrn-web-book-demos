console.log("script started");
function showPara() {
  let para = document.getElementById("para");
  para.style.display = "block";
}

// function bindings() {
//   console.log("Running bindings function...");
//   let btn = document.getElementById("mybtn");
//   btn.onclick = showPara;
// }

window.onload = function () {
  let btn = document.getElementById("mybtn");
  btn.onclick = showPara;
};
console.log("script finished");
