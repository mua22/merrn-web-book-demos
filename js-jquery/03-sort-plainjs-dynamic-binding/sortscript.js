// sortscript.js
// Simple plain-JavaScript function to sort the list items inside the #students element.
// This file contains a single handler function that reads the list, sorts the text values,
// and rebuilds the list in sorted order.

function sorBtnHandler() {
  // Log the action so developers can see the handler ran
  console.log("Sorting...");

  // Get the container element that holds the student <li> items
  var list = document.getElementById("students");

  // Obtain a live collection of <li> elements inside the list
  var items = list.getElementsByTagName("li");

  // Copy visible text from each <li> into a plain array for sorting
  var itemsArr = [];
  for (let i = 0; i < items.length; i++) {
    // Use innerText to get the user-visible text content
    itemsArr.push(items[i].innerText);
  }

  // Debug: show the unsorted values
  console.log(itemsArr);

  // Sort the array of strings in lexicographical order
  itemsArr.sort();

  // Debug: show the sorted values
  console.log(itemsArr);

  // Remove existing list items and rebuild the list using the sorted array
  list.innerHTML = "";
  for (let i = 0; i < itemsArr.length; i++) {
    var li = document.createElement("li");
    // Set the text value for the new <li> and append it
    li.innerText = itemsArr[i];
    list.appendChild(li);
  }
}

// Bindings function attaches event listeners. Extracted from the previous anonymous onload handler.
function bindings() {
  var btn = document.getElementById("btnSort");
  if (btn) {
    btn.addEventListener("click", sorBtnHandler);
    console.log("Bound #btnSort click to sorBtnHandler");
  } else {
    console.warn("#btnSort not found - could not bind sorBtnHandler");
  }
}

// Assign the named bindings function to run when the page has fully loaded
window.onload = bindings;
