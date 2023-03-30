const content = document.querySelector(".content");

const challenges = [
  {
    id: 1,
    title: "JS Drum Kit",
    desc: "A responsive list of keys that will play sound and glow when you click on them.",
    image: "./01-JavaScript_Drum_Kit/drum-kit.jpg",
    demo: "",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/01-JavaScript_Drum_Kit",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/01-JavaScript_Drum_Kit/README.md",
  },
  {
    id: 2,
    title: "CSS + JS Clock",
    desc: "A clock that displays your local time",
    image: "./02-JS_and_CSS-clock/js-clock.jpg",
    demo: "",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/02-JS_and_CSS-clock",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/02-JS_and_CSS-clock/README.md",
  },
  {
    id: 3,
    title: "CSS Variables",
    desc: "A responsive web page where you can set image's background color, blur it or space it.",
    image: "./03-CSS_Variables/assets/css-variables.jpg",
    demo: "",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/03-CSS_Variables",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/03-CSS_Variables/README.md",
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
