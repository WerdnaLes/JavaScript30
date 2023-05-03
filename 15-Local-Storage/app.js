/*
    //Challenge//
    Make a:
    * Delete All button;
    * Check All button;
    * Uncheck All button;
    * Mirror it all to the localStorage;
 */

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
// challenge
const checkerButton = document.querySelector("#checker-button");
const deleteButton = document.querySelector("#deleteAll-button");
let areAllChecked = localStorage.getItem("wasPressed") === "true";
let checkerButtonText = localStorage.getItem("areAllChecked") || "Check All";

checkerButton.addEventListener("click", checkAll);
deleteButton.addEventListener("click", deleteMenu);

checkerButton.value = checkerButtonText;

// challenge
const items = JSON.parse(localStorage.getItem("items")) || [];

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);

function addItem(event) {
  event.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  updateLocalStorage();
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    })
    .join("");
}

function toggleDone(event) {
  if (!event.target.matches("input")) return; // skip this unless it's an input
  const index = event.target.dataset.index;
  items[index].done = !items[index].done;
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// challenge

function updateCheckedStorage(areChecked, currentText) {
  areChecked = String(areChecked);
  localStorage.setItem("wasPressed", areChecked);
  localStorage.setItem("areAllChecked", currentText);
}

function checkAll() {
  if (items.length > 0) {
    items.forEach((element) => {
      element.done = !areAllChecked;
    });
    areAllChecked = !areAllChecked;
    checkerButton.value = areAllChecked ? "Uncheck All" : "Check All";
    updateCheckedStorage(areAllChecked, this.value);
    updateLocalStorage();
  }
}

function deleteMenu() {
  localStorage.clear();
  items.splice(0, items.length);
  itemsList.innerHTML = "";
  areAllChecked = false;
  checkerButton.value = "Check All";
  updateCheckedStorage(false, "Check All");
}
