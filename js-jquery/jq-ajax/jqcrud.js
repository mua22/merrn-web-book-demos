console.log("script started");
window.onload = function () {
  // this function would be called after page load
  //   let btn = document.getElementById("loadStoriesBtn");
  //   btn.addEventListener("click", loadStories);
};

$(function () {
  // this will also be called after page load
  console.log("DOM Loaded");
  loadStories();
  $("#loadStoriesBtn").on("click", loadStories);
  $("#stories").on("click", ".btn-del", delStory); // event delegation
});

function loadStories() {
  // load the stories from https://usmanlive.com/wp-json/api/stories
  console.log("Load Stories Func Called");
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories",
    success: handleGetRequest,
  });
  console.log("Ajax Request Sent");
}
function handleGetRequest(response) {
  console.log("Response Arrived");
  $("#stories").empty();
  for (let index = 0; index < response.length; index++) {
    let story = response[index];
    // $("#stories").append(
    //   "<div class='story'><h1>" +
    //     story.title +
    //     "</h1><p>" +
    //     story.content +
    //     "</p></div>",
    // );
    $("#stories").append(`<div class="story">
        <h1>${story.title}</h1>
        <div>${story.content}</div>
        <div class="story-controls">
            <button class="btn-del">Delete</button>
        </div>
        </div>`);
  }
}

function delStory() {
  console.log("Deleting Story");
  $(this).closest(".story").remove();
}
console.log("script ended");
