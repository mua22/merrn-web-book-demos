console.log("script started");
function showPara() {
  //   let para = document.getElementById("para");
  //   para.style.display = "block";
  $("#para").show();
}

$(function () {
  console.log("DOM is ready, running jQuery bindings...");
  //   let btn = document.getElementById("mybtn");
  //   btn.onclick = showPara;
  $("#mybtn").on("click", showPara);
});

console.log("script finished");
