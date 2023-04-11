const cBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

cBoxes.forEach((checkbox) => checkbox.addEventListener("click", handleCheck));

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    cBoxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
