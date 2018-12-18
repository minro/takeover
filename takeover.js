const takeoverButton = document.querySelector(".takeover-button");
const takeover = takeoverButton.querySelector(".takeover");
const bg = takeover.querySelector(".background");
const button = takeoverButton.querySelector(".button");
const circle = button.querySelector(".circle");
const lineOne = button.querySelector(".line-1");
const lineTwo = button.querySelector(".line-2");
const lines = [lineOne, lineTwo];

const toggleTakeover = new TimelineMax({ paused: true, reversed: true });
const transition = new TimelineMax({ paused: true, reversed: true });

toggleTakeover
  .to(
    takeover,
    0.2,
    {
      width: "800px",
      height: "800px",
      x: "-290px",
      y: "-740px",
      ease: Power2.easeInOut,
      transformOrigin: "center center"
    },
    0.4
  )
  .to(
    lines,
    0.2,
    {
      rotation: 90,
      ease: Power2.easeInOut,
      transformOrigin: "center center"
    },
    0
  );

transition
  .to(
    circle,
    0.2,
    {
      ease: Power2.easeInOut,
      transformOrigin: "0% 0%"
    },
    0.2
  )
  .to(lines, 0.2, { opacity: 0, ease: Power2.easeInOut }, 0)
  .to(
    button,
    0.2,
    {
      width: "200vw",
      height: "200vh",
      ease: Power2.easeInOut,
      transformOrigin: "center center",
      x: "-100vw",
      y: "-100vh"
    },
    0.2
  )
  .to(
    circle,
    0.2,
    {
      scale: 1.2,
      ease: Power2.easeInOut,
      transformOrigin: "center center"
    },
    0.2
  );

takeoverButton.addEventListener("mouseenter", () => {
  if (takeoverButton.classList.contains("js-x")) {
    return;
  } else {
    toggleTakeover.reversed() ? toggleTakeover.play() : null;
  }
});

takeoverButton.addEventListener("mouseleave", () => {
  if (takeoverButton.classList.contains("js-x")) {
    return;
  } else {
    toggleTakeover.reversed() ? null : toggleTakeover.reverse();
  }
});

takeoverButton.addEventListener("click", () => {
  takeoverButton.classList.toggle("js-x");
  toggleTakeover.reverse();
  transition.reversed() ? transition.play() : transition.reverse();
});

// const toggleMenu = new TimelineMax({ paused: true, reversed: true });

// toggleMenu
//   .to(
//     lineTwo,
//     0.1,
//     {
//       scaleX: 0
//     },
//     0
//   )
//   .to(
//     lineOne,
//     0.125,
//     {
//       //   rotation: 45,
//       transformOrigin: "50% 50%",
//       y: 25,
//       ease: Power2.easeInOut
//     },
//     "slide"
//   )
//   .to(
//     lineThree,
//     0.125,
//     {
//       //   rotation: -45,
//       transformOrigin: "50% 50%",
//       y: -25,
//       ease: Power2.easeInOut
//     },
//     "slide"
//   )
//   .to(hamburger, 0.25, { rotation: 1080, ease: Power4.easeInOut })
//   .to(
//     lineOne,
//     0.125,
//     {
//       rotation: 45,
//       ease: Power2.easeInOut
//     },
//     "cross"
//   )
//   .to(
//     lineThree,
//     0.125,
//     {
//       rotation: -45,
//       ease: Power2.easeInOut
//     },
//     "cross"
//   );

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("js-x");
//   toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
// });
