function sorBtnHandler() {
  console.log("Sorting...");
  var list = document.getElementById("students");
  var items = list.getElementsByTagName("li");
  var itemsArr = [];
  for (let i = 0; i < items.length; i++) {
    itemsArr.push(items[i].innerText);
  }
  console.log(itemsArr);
  itemsArr.sort();
  console.log(itemsArr);
  list.innerHTML = "";
  for (let i = 0; i < itemsArr.length; i++) {
    var li = document.createElement("li");
    li.innerText = itemsArr[i];
    list.appendChild(li);
  }
}
