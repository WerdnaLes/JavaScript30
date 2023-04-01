const content = document.querySelector(".content");

const challenges = [
  {
    id: 1,
    title: "JS Drum Kit",
    desc: "A responsive list of keys that will play sound and glow when you click on them.",
    image: "./01-JavaScript-Drum-Kit/drum-kit.jpg",
    demo: "./01-JavaScript-Drum-Kit",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/01-JavaScript-Drum-Kit",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/01-JavaScript-Drum-Kit/README.md",
  },
  {
    id: 2,
    title: "CSS + JS Clock",
    desc: "A clock that displays your local time",
    image: "./02-JS-and-CSS-clock/js-clock.jpg",
    demo: "./02-JS-and-CSS-clock",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/02-JS-and-CSS-clock",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/02-JS-and-CSS-clock/README.md",
  },
  {
    id: 3,
    title: "CSS Variables",
    desc: "A responsive web page where you can set image's background color, blur it or space it.",
    image: "./03-CSS-Variables/assets/css-variables.jpg",
    demo: "./03-CSS-Variables",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/03-CSS-Variables",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/03-CSS-Variables/README.md",
  },
  {
    id: 4,
    title: "Array Cardio Day 1",
    desc: "A bit of practice with Arrays in JavaScript",
    image: "./04-Array-Cardio-Day-1/assets/array.jpg",
    demo: "./04-Array-Cardio-Day-1",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/04-Array-Cardio-Day-1",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/04-Array-Cardio-Day-1/README.md",
  },
  {
    id: 5,
    title: "Flex Pannel Gallery",
    desc: "A photo gallery page created using nested flexboxes and transitions.",
    image: "./05-Flex-Pannel-Gallery/assets/box-preview.jpg",
    demo: "./05-Flex-Pannel-Gallery",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/05-Flex-Pannel-Gallery",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/05-Flex-Pannel-Gallery/README.md",
  },
];

function generateChallenges() {
  content.innerHTML = ``;
  challenges.forEach((challenge) => {
    content.innerHTML += `
            <div class="challenge">
                <div class="challenge__title">#<span class="challenge__id">${
                  challenge.id
                } </span>${challenge.title.toUpperCase()}</div>
                <img class="challenge__img" src="${challenge.image}" alt="${
      challenge.title
    }">
                <div class="challenge__links">
                    <a class="challenge__link demo__link" href="${
                      challenge.demo
                    }" target="_blank"><i class="fa-regular fa-eye"></i>demo</a>
                    <a class="challenge__link repo__link" href="${
                      challenge.repo
                    }" target="_blank"><i class="fa-brands fa-github"></i>repo</a>
                    <a class="challenge__link note__link" href="${
                      challenge.note
                    }" target="_blank"><i class="fa-solid fa-pencil"></i>note</a>
                </div>
            </div>
        `;
  });
}

generateChallenges();
