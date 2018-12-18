const takeoverButton = document.querySelector(".takeover-button");
const takeover = takeoverButton.querySelector(".takeover");
const circle = takeover.querySelector(".circle");
const bg = takeover.querySelector(".background");
const lineOne = takeover.querySelector(".line-1");
const lineTwo = takeover.querySelector(".line-2");

const lines = [lineOne, lineTwo];

const toggleTakeover = new TimelineMax({ paused: true, reversed: true });

toggleTakeover
  .to(
    takeover,
    0.2,
    {
      scaleX: "15",
      scaleY: "15",
      x: "-50",
      y: "-200",
      ease: Power2.easeInOut,
      transformOrigin: "50% 50%"
    },
    0
  )
  // .to(
  //   circle,
  //   0.2,
  //   {
  //     ease: Power2.easeInOut,
  //     transformOrigin: "0% 0%"
  //   },
  //   0
  // )
  // .to(
  //   lines,
  //   0.2,
  //   {
  //     rotation: 720,
  //     ease: Power2.easeInOut,
  //     transformOrigin: "0 0"
  //   },
  //   0
  // )
  .to(
    bg,
    0.2,
    {
      scale: 5,
      ease: Power2.easeInOut,
      transformAroundCenter: { scale: 1.05 }
    },
    0
  );

takeoverButton.addEventListener("mouseenter", () => {
  if (takeover.classList.contains("js-x")) {
    return;
  } else {
    toggleTakeover.reversed() ? toggleTakeover.play() : null;
  }
});

takeoverButton.addEventListener("mouseleave", () => {
  if (takeover.classList.contains("js-x")) {
    return;
  } else {
    toggleTakeover.reversed() ? null : toggleTakeover.reverse();
  }
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
