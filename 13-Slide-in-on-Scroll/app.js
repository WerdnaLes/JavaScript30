// // Hook document variables:

// const sliderImages = document.querySelectorAll(".slide-in");

// // Hook event listeners:

// window.addEventListener("scroll", debounce(checkSlide));

// // Functions:

// function checkSlide() {
//   sliderImages.forEach((sliderImage) => {
//     // half way through the image
//     const slideInAt =
//       window.scrollY + window.innerHeight - sliderImage.height / 2;
//     // bottom of the image
//     const imageBottom = sliderImage.offsetTop + sliderImage.height;
//     const isHalfShown = slideInAt > sliderImage.offsetTop;
//     const isNotScrolledPast = window.scrollY < imageBottom;
//     if (isHalfShown && isNotScrolledPast) {
//       sliderImage.classList.add("active");
//     } else {
//       sliderImage.classList.remove("active");
//     }
//   });
// }

// function debounce(func, wait = 20, immediate = true) {
//   let timeout;
//   return () => {
//     let context = this;
//     let args = arguments;
//     let later = () => {
//       timeout = null;
//       if (!immediate) {
//         func.apply(context, args);
//       }
//     };
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// Modern solution:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});

const slideInImages = document.querySelectorAll('.slide-in');
slideInImages.forEach(image => observer.observe(image));
