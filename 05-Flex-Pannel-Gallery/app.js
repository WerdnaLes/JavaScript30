const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
  this.classList.toggle("open");
}

panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleOpenActive);
});

function toggleOpenActive(e) {
  console.log(e.propertyName);

  if (e.propertyName.includes(`flex`)) {
    this.classList.toggle("open-active");
  }
}
