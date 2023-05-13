const content = document.querySelector(".content");

const challenges = [
  {
    id: 1,
    title: "JS Drum Kit",
    desc: "A responsive list of keys that will play sound and glow when you click on them.",
    image: "./01-JavaScript-Drum-Kit/assets/test-preview.jpg",
    demo: "./01-JavaScript-Drum-Kit",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/01-JavaScript-Drum-Kit",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/01-JavaScript-Drum-Kit/README.md",
  },
  {
    id: 2,
    title: "CSS + JS Clock",
    desc: "A clock that displays your local time",
    image: "./02-JS-and-CSS-clock/clock-preview.jpg",
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
  {
    id: 6,
    title: "Type Ahead",
    desc: "A search form that displays and highlights the cities you search.",
    image: "./06-Type-Ahead/assets/type-ahead-preview.jpg",
    demo: "./06-Type-Ahead",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/06-Type-Ahead",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/06-Type-Ahead/README.md",
  },
  {
    id: 7,
    title: "Array Cardio Day 2",
    desc: "A bit of practice with Arrays in JavaScript",
    image: "./04-Array-Cardio-Day-1/assets/array.jpg",
    demo: "./07-Array-Cardio-Day-2",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/07-Array-Cardio-Day-2",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/07-Array-Cardio-Day-2/README.md",
  },
  {
    id: 8,
    title: "Fun with HTML5 Canvas",
    desc: "Paint something on canvas with your mouse",
    image: "./08-Fun-with-HTML5-Canvas/assets/canvas-preview.jpg",
    demo: "./08-Fun-with-HTML5-Canvas",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/08-Fun-with-HTML5-Canvas",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/08-Fun-with-HTML5-Canvas/README.md",
  },
  {
    id: 9,
    title: "Dev Tools Domination",
    desc: "Some useful tricks with console",
    image: "./assets/default.png",
    demo: "./09-Dev-Tools-Domination",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/09-Dev-Tools-Domination",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/09-Dev-Tools-Domination/README.md",
  },
  {
    id: 10,
    title: "Hold Shift and Check Checkboxes",
    desc: "Check checkboxes in between via Shift key",
    image: "./10-Hold-Shift-and-Check-Checkboxes/assets/checkbox-preview.jpg",
    demo: "./10-Hold-Shift-and-Check-Checkboxes",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/10-Hold-Shift-and-Check-Checkboxes",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/10-Hold-Shift-and-Check-Checkboxes/README.md",
  },
  {
    id: 11,
    title: "Custom Video Player",
    desc: "A custom video player",
    image: "./11-Custom-Video-Player/assets/video-player-preview.jpg",
    demo: "./11-Custom-Video-Player",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/11-Custom-Video-Player",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/11-Custom-Video-Player/README.md",
  },
  {
    id: 12,
    title: "Key Sequence Detection",
    desc: "Provide some action if the right key combination has been pressed",
    image: "./assets/default.png",
    demo: "./12-Key-Sequence-Detection",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/12-Key-Sequence-Detection",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/12-Key-Sequence-Detection/README.md",
  },
  {
    id: 13,
    title: "Slide in on Scroll",
    desc: "Make images appear on the page when you scroll past them",
    image: "./assets/default.png",
    demo: "./13-Slide-in-on-Scroll",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/13-Slide-in-on-Scroll",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/13-Slide-in-on-Scroll/README.md",
  },
  {
    id: 14,
    title: "JS references vs copying",
    desc: "Some useful tricks with arrays and objects",
    image: "./assets/default.png",
    demo: "./14-JS-references-vs-copying",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/14-JS-references-vs-copying",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/14-JS-references-vs-copying/README.md",
  },
  {
    id: 15,
    title: "Local Storage",
    desc: "Store some data locally to be displayed even if the page was refreshed",
    image: "./15-Local-Storage/assets/storage-preview.jpg",
    demo: "./15-Local-Storage",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/15-Local-Storage",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/15-Local-Storage/README.md",
  },
  {
    id: 16,
    title: "Mouse Move Shadow",
    desc: "Change text shadow according to mouse moves",
    image: "./16-Mouse-Move-Shadow/assets/mouse-shadow-preview.jpg",
    demo: "./16-Mouse-Move-Shadow",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/16-Mouse-Move-Shadow",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/16-Mouse-Move-Shadow/README.md",
  },
  {
    id: 17,
    title: "Sort Without Articles",
    desc: "A showcase of sort() and replace() usage to sort an array while omitting articles",
    image:
      "./17-Sort-Without-Articles/assets/sort-without-articles.preview.jpg",
    demo: "./17-Sort-Without-Articles",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/17-Sort-Without-Articles",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/17-Sort-Without-Articles/README.md",
  },
  {
    id: 18,
    title: "Adding up times with reduce",
    desc: "Get total time length from every video and convert it in h:mm:ss format",
    image: "./assets/default.png",
    demo: "./18-Adding-Up-Times-with-Reduce",
    repo: "https://github.com/WerdnaLes/javascript30-courses/tree/main/18-Adding-Up-Times-with-Reduce",
    note: "https://github.com/WerdnaLes/javascript30-courses/blob/main/18-Adding-Up-Times-with-Reduce/README.md",
  },
  {
    id: 19,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 20,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 21,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 22,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 23,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 24,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 25,
    title: "Event Capture Propagation Bubbling and Once",
    desc: "A demonstration of usage of propagation, bubbling and once.",
    image:
      "./25-Event-Capture_Propagation_Bubbling-and-Once/assets/propagation-preview.jpg",
    demo: "./25-Event-Capture_Propagation_Bubbling-and-Once",
    repo: "https://github.com/WerdnaLes/JavaScript30-courses/tree/main/25-Event-Capture_Propagation_Bubbling-and-Once",
    note: "https://github.com/WerdnaLes/JavaScript30-courses/blob/main/25-Event-Capture_Propagation_Bubbling-and-Once/README.md",
  },
  {
    id: 26,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 27,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 28,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 29,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
  {
    id: 30,
    title: "",
    desc: "",
    image: "./assets/soon.jpg",
    demo: "",
    repo: "",
    note: "",
  },
];

function generateChallenges() {
  content.innerHTML = ``;
  challenges.forEach((challenge) => {
    content.innerHTML += `
            <div class="challenge">
              <div class="light-holder">
                <span class="material-symbols-outlined">light</span>
                <div class="light"></div>
               </div>
                <div class="challenge__title">#${
                  challenge.id
                } ${challenge.title.toUpperCase()}</div>
                <div class="image-container">
                <img class="challenge__img" src="${challenge.image}" alt="${
      challenge.title
    }"></div>
                <div class="challenge__links">
                    <a class="challenge__link demo__link" href="${
                      challenge.demo
                    }" target="_blank"><span><i class="fa-regular fa-eye"></i> demo</span></a>
                    <a class="challenge__link repo__link" href="${
                      challenge.repo
                    }" target="_blank"><span><i class="fa-brands fa-github"></i> repo</span></a>
                    <a class="challenge__link note__link" href="${
                      challenge.note
                    }" target="_blank"><span><i class="fa-solid fa-pencil"></i> note</span></a>
                </div>
            </div>
        `;
  });
}

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      socialLinks.forEach((element) => {
        console.log(element);
        element.classList.add("visible");
      });
      // entry.target.classList.add("visible");
    } else {
      socialLinks.forEach((element) => {
        element.classList.remove("visible");
      });
      // entry.target.classList.remove("visible");
    }
  });
});

const socialLinks = document.querySelectorAll(".drop-down");
const contactsContainer = document.querySelector(".contacts-container");
observer.observe(contactsContainer);
// socialLinks.forEach((el) => observer.observe(el));

generateChallenges();
